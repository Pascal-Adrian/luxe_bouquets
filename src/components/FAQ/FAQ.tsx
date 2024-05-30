import FAQQuestion from "../FAQQuestion/FAQQuestion";

interface FAQProps {
  questions: {
    question: string;
    answer: string;
  }[];
  className?: string;
}

function FAQ({ questions, className }: FAQProps) {
  return (
    <div className={"faq" + (className ? " " + className : "")}>
      <h2 className="faq-title">Subscription FAQ</h2>
      {questions.map((question, index) => (
        <FAQQuestion
          key={index}
          question={question.question}
          answer={question.answer}
        />
      ))}
    </div>
  );
}

export default FAQ;
