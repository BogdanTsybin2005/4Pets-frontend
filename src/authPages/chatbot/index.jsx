import { useEffect, useRef, useState } from "react";
import Header from "../../authComponents/header";
import "./style.scss";
import axios from "axios";
import SendMessageToChatBotIcon from "../../svg_pictures/send-message-to-chatbot-icon";
import useLocalStorage from "../../hooks/useLocalStorage";



export default function ChatBot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [isThinking, setIsThinking] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const messagesEndRef = useRef(null);
    const [token] = useLocalStorage("token", "");

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

                const formatted = history
                    .map((msg) => [
                        { id: msg.id * 2, role: "user", text: msg.prompt },
                        { id: msg.id * 2 + 1, role: "bot", text: msg.response },
                    ])
                    .flat();

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

        const userMessage = {
            id: Date.now(),
            role: "user",
            text: trimmed,
        };

        const thinkingMessage = {
            id: Date.now() + 1,
            role: "bot",
            text: "🤖 Бот думает...",
            isThinking: true,
        };

        setMessages((prev) => [...prev, userMessage, thinkingMessage]);
        setInput("");
        setIsThinking(true);

        try {
            const res = await axios.post(
                "http://localhost:5000/gpt/ask",
                { message: trimmed },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const botText = res.data?.response || "Ответ пустой 🤖";

            setMessages((prev) => [
                ...prev.filter((msg) => !msg.isThinking),
                {
                    id: Date.now() + 2,
                    role: "bot",
                    text: botText,
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
            <Header />
            <div className="chat-bot__container">
                {isLoading ? (
                    <div className="chat-bot__no-messages-wrapper">
                        <div className="chat-bot__empty-message">Загрузка истории...</div>
                    </div>
                ) : messages.length === 0 ? (
                    <div className="chat-bot__no-messages-wrapper">
                        <div className="chat-bot__empty-message">Сообщений пока нет</div>
                    </div>
                ) : (
                    <ul className="chat-bot__list">
                        {messages.map((msg) => (
                            <li key={msg.id} className={msg.role}>
                                {msg.text}
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
                        placeholder="Напиши сообщение..."
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
