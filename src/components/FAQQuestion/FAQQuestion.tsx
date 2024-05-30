import { useState } from "react";
import DownArrow from "../../assets/icons/icons-400/arrow-bottom-right.svg?react";
import UpArrow from "../../assets/icons/icons-400/arrow-top-right.svg?react";

interface FAQQuestionProps {
  question: string;
  answer: string;
}

function FAQQuestion({ question, answer }: FAQQuestionProps) {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="faq-question">
      <div className="faq-question-container">
        <h4 className="faq-question-question">{question}</h4>
        <button className="faq-question-button" onClick={toggleOpen}>
          {open ? <UpArrow /> : <DownArrow />}
        </button>
      </div>
      {open && <p className="faq-question-answer">{answer}</p>}
    </div>
  );
}

export default FAQQuestion;
