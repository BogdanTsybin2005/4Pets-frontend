import { useEffect, useRef } from "react";
import Header from "../../authComponents/header";
import './style.scss';
import SendMessageToChatBotIcon from "../../svg_pictures/send-message-to-chatbot-icon";

export default function ChatBot() {
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <div className="chat-bot__page">
            <Header />
            <div className="chat-bot__container">
                <div className="chat-bot__empty-message">Сообщений пока нет</div>
                <ul className="chat-bot__list">
                    {Array.from({ length: 30 }).map((_, i) => (
                        <li key={i} className={i % 2 === 0 ? "bot" : "user"}>
                            Сообщение {i + 1}: Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, eligendi pariatur deserunt molestiae nesciunt inventore, quibusdam, doloremque dolor libero maiores autem officiis fugiat natus sed veritatis iste modi asperiores suscipit.
                        </li>
                    ))}
                    <div ref={messagesEndRef} />
                </ul>
            </div>
            <div className="chat-bot__input-container">
                <div className="chat-bot__input-block">
                    <input type="text" placeholder="Напиши сообщение..." />
                    <button className="chat-bot__send-button">
                        <SendMessageToChatBotIcon />
                    </button>
                </div>
            </div>
        </div>
    );
}
