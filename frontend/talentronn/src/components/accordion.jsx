import React from 'react';
import '../styles/accoordion.css';
const Accordion = () => {
  const accordionData = [
    {
      id: "flush-collapseOne",
      headingId: "flush-headingOne",
      question: "What qualifications must one meet to enrol in the training program?",
      answer: "Placeholder content for this accordion. This is the first item's accordion body.",
    },
    {
      id: "flush-collapseTwo",
      headingId: "flush-headingTwo",
      question: "What is the course fee for the training program?",
      answer: "Placeholder content for this accordion. This is the second item's accordion body.",
    },
    {
      id: "flush-collapseThree",
      headingId: "flush-headingThree",
      question: "What courses are available for the upcoming training program?",
      answer: "Placeholder content for this accordion. This is the third item's accordion body.",
    },
    {
      id: "flush-collapseFour",
      headingId: "flush-headingFour",
      question: "What teaching methodology is being employed?",
      answer: "This is the fourth item's accordion body.",
    },
    {
      id: "flush-collapseFive",
      headingId: "flush-headingFive",
      question: "Can a homemaker with an extended career break attend the training program?",
      answer: "This is the fifth item's accordion body.",
    },
  ];
  return (
    <>
      <div className="faaq">
        <span>Frequently Asked Questions</span>
        <p>About Training Course</p>
      </div>
      <div className="container mb">
        <div className="d-flex justify-content-center">
          <div>
            <div className="accordion accordion-flush w-100 ms-0 mb-560" id="accordionFlushExample">
              {accordionData.map((item, index) => (
                <div className="accordion-item" key={index} style={{ height: '110px' }}>
                  <h2 className="accordion-header" id={item.headingId}>
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#${item.id}`}
                      aria-expanded="false"
                      aria-controls={item.id}
                    >
                      {item.question}
                    </button>
                  </h2>
                  <div
                    id={item.id}
                    className="accordion-collapse collapse"
                    aria-labelledby={item.headingId}
                    data-bs-parent="#accordionFlushExample"
                  >
                    <div className="accordion-body">{item.answer}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Accordion;
