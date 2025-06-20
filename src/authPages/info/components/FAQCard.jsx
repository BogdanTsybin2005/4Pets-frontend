export default function FAQCard({ title, text1, text2 }) {
    return (
        <details className="faq-card accordion-block">
            <summary className="faq-card__title">❓ {title}</summary>
                <p>{text1}</p>
                <p>{text2}</p>
        </details>
    );
}
