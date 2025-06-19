import React from 'react';

export default function FAQCard({ title, text1, text2 }) {
  return (
    <article className="faq-card highlighted">
      <h4 className="faq-card__title">❓ {title}</h4>
      <p>{text1}</p>
      <p>{text2}</p>
    </article>
  );
}
