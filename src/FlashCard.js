import { useState } from 'react';

function FlashCard({ questions }) {
  const [cardId, setCardId] = useState(null);

  const handleClick = (id) => {
    if (cardId === id) {
      setCardId(null);
    } else setCardId(id);
  };

  const renderQuestions = questions.map((question) => {
    return (
      <div
        className={cardId === question.id ? 'selected' : ''}
        onClick={() => handleClick(question.id)}
        key={question.id}
      >
        {cardId === question.id ? question.answer : question.question}
      </div>
    );
  });
  return <div className='flashcards'>{renderQuestions}</div>;
}
export default FlashCard;
