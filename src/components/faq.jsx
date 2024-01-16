import React, { useState } from "react";
import arrow from "../Assets/bottom-arr.svg"; // make sure to provide the correct path

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-[60%] font-medium px-6 py-2 border-2 border-blue-800 rounded-2xl  ">
      <div className="text-black flex justify-between items-center">
        <p>{question}</p>
        <img
          src={arrow}
          alt=""
          onClick={toggleDropdown}
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            cursor: "pointer",
          }}
        />
      </div>
      {isOpen && (
        <>
          {" "}
          <hr className="bg-gray-400 mt-3 h-[0.15rem]"/>{" "}
          <div className="mt-2 text-gray-500 w-[95%] ml-4"> {answer}</div>
        </>
      )}
    </div>
  );
};

const FAQSection = () => {
  return (
    <div className="p-12">
      <div className="text-4xl font-bold text-blue-900">FAQ</div>
      <div className="flex flex-col p-8 gap-5">
        <FAQItem
          question="Can education flashcards be used for all age groups?"
          answer="Yes, education flashcards can be adapted for various age groups by adjusting the content and difficulty level."
        />
        <FAQItem
          question="How do education flashcards work?"
          answer="Education flashcards are designed to reinforce learning through repetition. They typically consist of a question on one side and the answer on the other side."
        />
        <FAQItem
          question="Can education flashcards be used for test preparation?"
          answer="Absolutely! Education flashcards are an effective tool for test preparation, helping to review and reinforce key concepts."
        />
      </div>
    </div>
  );
};

export default FAQSection;
