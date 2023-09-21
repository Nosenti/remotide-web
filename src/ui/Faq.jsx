/* eslint-disable react/prop-types */
import { useState } from "react";

const faqs = [
  {
    question: "What is Remotide, and how can it help me?",
    answer:
      "Remotide is a platform dedicated to connecting African professionals with permanent remote job opportunities in Europe and North America. We offer a streamlined application process, skill-matching, and access to top-tier international companies.",
  },
  {
    question: "Do I have to pay to use Remotide?",
    answer:
      "Our primary goal is to empower African talent. There is no fee for talents to join and apply for jobs. Any potential costs or subscription models will be transparent and communicated in advance.",
  },
  {
    question: "What kind of jobs can I find on Remotide?",
    answer:
      "While we cater to various industries, our primary focus areas include software development, data analytics, cyber security, and other tech-related sectors.",
  },
  {
    question: "What's the vetting process for talents?",
    answer:
      "We pride ourselves on ensuring quality matches. Talents may be required to undergo technical assessments, profile reviews, and interviews to ensure they align with the needs of our partner companies.",
  },
  {
    question: "How does the automatic apply feature work?",
    answer:
      "Our system evaluates your profile and matches it with job listings. If there's a significant match, the system can automatically apply on your behalf, increasing your chances of landing the perfect role.",
  },
  {
    question: "Why should we hire from Remotide?",
    answer:
      "Remotide provides access to a vetted talent pool from Africa, offering top skills at competitive rates. Our candidates undergo a rigorous assessment ensuring you get quality matches tailored to your needs.",
  },
  {
    question: "How do you ensure the quality of talents on your platform?",
    answer:
      "Each talent undergoes a vetting process that includes technical assessments, profile reviews, and interviews. This ensures they meet the high standards both we and our partner companies expect.",
  },
  {
    question: "Is there a cost associated with hiring from Remotide?",
    answer:
      "Companies may subscribe to access our talent pool. Specific pricing details can be found [on our Pricing page/link to pricing], but rest assured, our model offers cost-effective solutions compared to traditional hiring.",
  },
  {
    question: "What if the talent doesn't meet our expectations?",
    answer:
      "We prioritize quality and satisfaction. If a talent doesn't align with your expectations, reach out to our support team, and we'll work together to find an optimal solution.",
  },
  {
    question: "How does the salary transparency feature work?",
    answer:
      "To promote fair compensation and combat wage gaps, all job listings on Remotide are required to display a salary range. This ensures talents know the compensation upfront, fostering trust and transparency.",
  },
];

function Faq() {
  return (
    <div className="bg-greyBackground">
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="w-[80%] mx-auto my-[10px] flex flex-col space-y-6 py-8">
      <h3 className="font-bold text-3xl text-center">
        Frequently Asked Questions
      </h3>
      {data.map((el, i) => (
        <AccordionItem
          title={el.question}
          text={el.answer}
          num={i}
          key={el.question}
        />
      ))}
    </div>
  );
}

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div
      className={`shadow-md p-5 pr-12 cursor-pointer border-t-4 bg-white ${
        isOpen ? "border-t-colorBrand600" : "border-t-white"
      }  grid grid-cols-[auto,1fr,auto] gap-x-6 gap-y-8 items-center`}
      onClick={handleToggle}
    >
      <p
        className={`text-gray-400 text-xl font-medium ${
          isOpen ? "text-colorBrand600" : ""
        }`}
      >
        {num < 9 ? `0${num + 1}` : num + 1}
      </p>
      <p
        className={`text-xl font-medium ${isOpen ? "text-colorBrand600" : ""}`}
      >
        {title}
      </p>
      <p className="text-xl font-medium">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="col-span-2 pb-4 leading-relaxed">{text}</div>}
    </div>
  );
}

export default Faq;
