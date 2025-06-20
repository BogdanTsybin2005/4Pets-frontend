export default function TestimonialCard({ name, position, content, imgSrc }) {
    const avatarStyle = imgSrc ? { backgroundImage: `url(${imgSrc})` } : {};
    return (
        <details className="testimonial-card accordion-block">
            <summary className="testimonial-card__header">
                <div className="testimonial-card__avatar" style={avatarStyle} />
                <div className="testimonial-card__info">
                    <div className="testimonial-card__name">{name}</div>
                    <div className="testimonial-card__position role-highlight">{position}</div>
                </div>
            </summary>
             <div className="testimonial-card__body">
                 {content.split('\n').map((line, idx) => (
                     <p key={idx}>{line}</p>
                 ))}
             </div>
        </details>
     );
}
