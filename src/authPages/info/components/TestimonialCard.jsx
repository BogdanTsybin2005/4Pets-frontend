import React from 'react';



export default function TestimonialCard({ name, position, content, imgSrc }) {
    return (
        <article className="testimonial-card testimonial-glow">
            <div className="testimonial-card__header">
                <div className="testimonial-card__avatar" />
                <div className="testimonial-card__name">{name}</div>
                <div className="testimonial-card__position role-highlight">{position}</div>
            </div>
            <div className="testimonial-card__body">
                {content.split('\n').map((line, idx) => (
                    <p key={idx}>{line}</p>
                ))}
            </div>
            <img className="testimonial-card__img" src={imgSrc} alt={name} />
        </article>
    );
}