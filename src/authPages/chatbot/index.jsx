import "./style.scss";
import Header from "../../authComponents/header";
import { useEffect, useRef, useState } from "react";
import SendMessageToChatBotIcon from "../../svg_pictures/send-message-to-chatbot-icon";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useSelector } from 'react-redux';
import allMyLanguageData from '../../data/data';
import BurgerMenu from "../../authComponents/burgerMenu";
import { apiClient, buildAuthHeaders, getErrorMessage } from "../../api";



function formatDate(value) {
    const d = new Date(value);
    if (Number.isNaN(d.getTime())) return "Неверная дата";

    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();
    const hours = String(d.getHours()).padStart(2, "0");
    const minutes = String(d.getMinutes()).padStart(2, "0");

    return `${day}.${month}.${year} - ${hours}:${minutes}`;
}

const pickFirstValue = (source, keys, fallback = "") => {
    for (const key of keys) {
        const candidate = source?.[key];
        if (candidate !== undefined && candidate !== null && candidate !== "") {
            return candidate;
        }
    }
    return fallback;
};

const normalizeHistoryPayload = (payload) => {
    if (Array.isArray(payload)) return payload;
    if (Array.isArray(payload?.history)) return payload.history;
    if (Array.isArray(payload?.messages)) return payload.messages;
    if (Array.isArray(payload?.data)) return payload.data;
    return [];
};

const normalizeRole = (role = '') => {
    const lowerCased = String(role).toLowerCase();
    if (lowerCased === 'assistant' || lowerCased === 'bot' || lowerCased === 'system') {
        return 'bot';
    }
    return 'user';
};

const extractTimestamp = (source, fallback = new Date().toISOString()) =>
    pickFirstValue(
        source,
        ['timestamp', 'created_at', 'createdAt', 'updatedAt', 'date', 'datetime'],
        fallback
    );

const normalizeHistoryEntry = (entry, index, chatBotContent) => {
    const baseId = Number.isFinite(Number(entry?.id)) ? Number(entry.id) : index;
    const timestamp = extractTimestamp(entry);

    if (entry?.role && (entry?.content || entry?.text || entry?.message)) {
        const text = pickFirstValue(
            entry,
            ['content', 'text', 'message', 'prompt', 'question', 'response', 'answer'],
            chatBotContent.emptyDataText
        );

        return [
            {
                id: baseId,
                role: normalizeRole(entry.role),
                text,
                timestamp,
            },
        ];
    }

    const userText = pickFirstValue(
        entry,
        ['prompt', 'message', 'question', 'text', 'content'],
        chatBotContent.emptyDataText
    );

    const botText = pickFirstValue(
        entry,
        ['response', 'answer', 'reply', 'result', 'message', 'text'],
        chatBotContent.loadingHistory
    );

    return [
        {
            id: baseId * 2,
            role: 'user',
            text: userText,
            timestamp,
        },
        {
            id: baseId * 2 + 1,
            role: 'bot',
            text: botText,
            timestamp,
        },
    ];
};

const extractBotReply = (payload, fallback = 'Ответ пустой 🤖') => {
    const candidates = [
        payload?.data?.response,
        payload?.data?.answer,
        payload?.data?.message,
        payload?.response,
        payload?.answer,
        payload?.message,
        payload?.data?.result,
        payload?.result,
        payload?.data?.text,
        payload?.text,
        payload?.data?.content,
        payload?.content,
        payload?.data?.choices?.[0]?.message?.content,
        payload?.choices?.[0]?.message?.content,
        payload?.data?.choices?.[0]?.text,
        payload?.choices?.[0]?.text,
    ];

    for (const candidate of candidates) {
        if (typeof candidate === 'string' && candidate.trim()) return candidate.trim();
    }

    const arrayChoices =
        payload?.data?.choices ||
        payload?.choices ||
        payload?.data?.data ||
        payload?.data?.messages;

    if (Array.isArray(arrayChoices)) {
        const combined = arrayChoices
            .map((item) => item?.message?.content || item?.content || item?.text || '')
            .filter(Boolean)
            .join('\n')
            .trim();
        if (combined) return combined;
    }

    return fallback;
};

export default function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isThinking, setIsThinking] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const messagesEndRef = useRef(null);
    const [token] = useLocalStorage("token", "");
    const interfaceLanguage = useSelector(state => state.language.interfaceLanguage);
    const chatBotContent = allMyLanguageData[interfaceLanguage]?.chat_bot_page || allMyLanguageData.ru.chat_bot_page;
    const [isBurgerActive, setIsBurgerActive] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isBurgerActive ? 'hidden' : 'auto';
        if (isBurgerActive) {
            document.documentElement.classList.add('no-scroll');
            document.body.classList.add('no-scroll');
        } else {
            document.documentElement.classList.remove('no-scroll');
            document.body.classList.remove('no-scroll');
        }
        return () => {
            document.body.style.overflow = 'auto';
            document.documentElement.classList.remove('no-scroll');
            document.body.classList.remove('no-scroll');
        };
    }, [isBurgerActive]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const res = await apiClient.get('/gpt/history', {
                    headers: buildAuthHeaders(token),
                });
                const history = normalizeHistoryPayload(res.data?.data || res.data || []);
                const formatted = history.flatMap((msg, index) =>
                    normalizeHistoryEntry(msg, index, chatBotContent)
                );
                setMessages(formatted);
            } catch (err) {
                console.error("Ошибка загрузки истории:", err);
            } finally {
                setIsLoading(false);
            }
        };
        if (token) {
            fetchHistory();
        } else {
            setIsLoading(false);
            setMessages([]);
        }
    }, [token, chatBotContent]);

    const sendMessage = async () => {
        const trimmed = input.trim();
        if (!trimmed || !token) return;

        const isoTimestamp = new Date().toISOString();
        const conversation = messages
            .filter((msg) => !msg.isThinking)
            .slice(-20)
            .map((msg) => ({
                role: msg.role === 'bot' ? 'assistant' : 'user',
                content: msg.text,
            }));

        const userMessage = {
            id: Date.now(),
            role: "user",
            text: trimmed,
            timestamp: isoTimestamp, 
        };

        const thinkingMessage = {
            id: Date.now() + 1,
            role: "bot",
            text: `🤖 ${chatBotContent.thinkingChatBotMessage}`,
            isThinking: true,
            timestamp: isoTimestamp,
        };

        setMessages((prev) => [...prev, userMessage, thinkingMessage]);
        setInput("");
        setIsThinking(true);

        try {
            const res = await apiClient.post(
                '/gpt/ask',
                {
                    prompt: trimmed,
                    message: trimmed,
                    question: trimmed,
                    text: trimmed,
                    messages: [...conversation, { role: 'user', content: trimmed }],
                    timestamp: isoTimestamp,
                },
                {
                    headers: buildAuthHeaders(token),
                }
            );

            const botText = extractBotReply(res, "Ответ пустой 🤖");

            const responseTimestamp = extractTimestamp(res?.data, isoTimestamp);

            setMessages((prev) => [
                ...prev.filter((msg) => !msg.isThinking),
                {
                    id: Date.now() + 2,
                    role: "bot",
                    text: botText,
                    timestamp: responseTimestamp,
                },
            ]);
        } catch (error) {
            const errorMessage = getErrorMessage(error, "Ошибка запроса");
            setMessages((prev) => [
                ...prev.filter((msg) => !msg.isThinking),
                {
                    id: Date.now() + 2,
                    role: "bot",
                    text: `❌ ${errorMessage}`,
                    timestamp: isoTimestamp,
                },
            ]);
        } finally {
            setIsThinking(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") sendMessage();
    };

    return (
        <div className="chat-bot__page">
            <BurgerMenu isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
            <Header isBurgerActive={isBurgerActive} setIsBurgerActive={setIsBurgerActive} />
            <div className="chat-bot__container">
                {isLoading ? (
                    <div className="chat-bot__no-messages-wrapper">
                        <div className="chat-bot__empty-message">{chatBotContent.loadingHistory}</div>
                    </div>
                ) : messages.length === 0 ? (
                    <div className="chat-bot__no-messages-wrapper">
                        <div className="chat-bot__empty-message">{chatBotContent.emptyDataText}</div>
                    </div>
                ) : (
                    <ul className="chat-bot__list">
                        {messages.map((msg) => (
                            <li key={msg.id} className={msg.role}>
                                <span>{msg.text}</span>
                                <small className="chat-bot__timestamp">{formatDate(msg.timestamp)}</small>
                            </li>
                        ))}
                        <div ref={messagesEndRef} />
                    </ul>
                )}
            </div>

            <div className="chat-bot__input-container">
                <div className="chat-bot__input-block">
                    <input
                        type="text"
                        placeholder={chatBotContent.inputPlaceHolder}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        disabled={isThinking}
                    />
                    <button
                        className="chat-bot__send-button"
                        onClick={sendMessage}
                        disabled={isThinking}
                    >
                        <SendMessageToChatBotIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}
