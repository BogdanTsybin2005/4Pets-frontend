import "./style.scss";
import axios from "axios";
import Header from "../../authComponents/header";
import { useEffect, useRef, useState } from "react";
import SendMessageToChatBotIcon from "../../svg_pictures/send-message-to-chatbot-icon";
import useLocalStorage from "../../hooks/useLocalStorage";
import { useSelector } from 'react-redux';
import allMyLanguageData from '../../data/data';
import BurgerMenu from "../../authComponents/burgerMenu";



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
        return () => { document.body.style.overflow = 'auto'; };
    }, [isBurgerActive]);

    const toggleBurger = () => {
        setIsBurgerActive(prev => {
            const newState = !prev;
            document.body.style.overflow = newState ? 'hidden' : 'auto';
            return newState;
        });
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const res = await axios.get("http://localhost:5000/gpt/history", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                const history = res.data || [];
                const formatted = history.flatMap((msg) => [
                    {
                        id: msg.id * 2,
                        role: "user",
                        text: msg.prompt,
                        timestamp: msg.timestamp,  
                    },
                    {
                        id: msg.id * 2 + 1,
                        role: "bot",
                        text: msg.response,
                        timestamp: msg.timestamp,  
                    }
                ]);
                setMessages(formatted);
            } catch (err) {
                console.error("Ошибка загрузки истории:", err);
            } finally {
                setIsLoading(false);
            }
        };
        if (token) {
            fetchHistory();
        }
    }, [token]);

    const sendMessage = async () => {
        const trimmed = input.trim();
        if (!trimmed || !token) return;

        const isoTimestamp = new Date().toISOString();

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
            const res = await axios.post(
                "http://localhost:5000/gpt/ask",
                {
                    message: trimmed,
                    timestamp: isoTimestamp,
                },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );

            const botText = res.data?.response || "Ответ пустой 🤖";

            setMessages((prev) => [
                ...prev.filter((msg) => !msg.isThinking),
                {
                    id: Date.now() + 2,
                    role: "bot",
                    text: botText,
                    timestamp: isoTimestamp,
                },
            ]);
        } catch (error) {
            const errorMessage = error.response?.data?.message || "Ошибка запроса";
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
