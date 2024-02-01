import React, { useState } from "react";
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import RemoveCircleOutlineRoundedIcon from '@mui/icons-material/RemoveCircleOutlineRounded';

function FAQ() {
  const faqData = [
    {
      question: "What features do Smart HRM offer?",
      answer: "Smart HRM offers various features such as...",
    },
    {
      question: "How will Smart HRM help my business?",
      answer: "Smart HRM can help your business by...",
    },
    {
      question: "Do Smart HRM help with software implementation?",
      answer: "Yes, Smart HRM provides support with software implementation.",
    },
  ];

  const [showAnswer, setShowAnswer] = useState(null);

  const toggleAnswer = (faqNumber) => {
    setShowAnswer((prevAnswer) => (prevAnswer === faqNumber ? null : faqNumber));
  };

  return (
    <section className="h-screen bg-white flex flex-col justify-center items-center">
      <div className="text-black self-center">
        <h1 className="text-3xl font-extrabold text-center mt-20">Frequently Asked Questions about <span className="text-bg-color">Smart HRM</span></h1>
      </div>

      {/* FAQ Items */}
      <div className="w-11/12 max-w-xl m-auto">
        {faqData.map((faq, index) => (
          <div key={index} className="bg-sec-color rounded-md mb-8 p-1 shadow-sec-color shadow-lg">
            <div className="flex items-center justify-between p-4 cursor-pointer" onClick={() => toggleAnswer(index)}>
              <div className="text-white text-lg font-bold">
                {faq.question}
              </div>
              <div className="text-xl">
                {showAnswer === index ? (
                  <RemoveCircleOutlineRoundedIcon className="text-lg" style={{color:'white'}}></RemoveCircleOutlineRoundedIcon>
                ) : (
                  <ControlPointRoundedIcon className="text-lg" style={{color:'white'}}></ControlPointRoundedIcon>
                )}
              </div>
            </div>
            {showAnswer === index && (
              <div className="text-gray-200 text-lg p-4 border-t-2">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQ;
