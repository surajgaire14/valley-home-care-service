import React from "react";
import "./style.scss";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [toggleans, setToggleAnswer] = React.useState({});

  const toggleState = (id) => {
    setToggleAnswer({ ...toggleans, [id]: !toggleans[id] });
  };

  React.useEffect(() => {
    toggleState;
  }, [toggleans]);

  const faqs = [
    {
      id: 1,
      question: "What are the benefit of critical care training?",
      answer: [
        "The reward of having a part in critically ill or injured patient’s recovery.",
        "Get to work with various professionals and work as part of team.",
        "Critical care nurses only provide care to a few patients at a time.",
        "Opportunity to work with state of the art medical technology.",
      ],
    },
    {
      id: 2,
      question: "What are the important skills of a critical care nurses ?",
      answer: [
        "Communication skills.",
        "Interpersonal skills",
        "Decision-making skills.",
        "Problem-solving skills.",
        "Observational skills.",
        "Assessment skills.",
        "Clinical skills",
        "Critical thinking skills",
      ],
    },
    {
      id: 3,
      question: "Why to become a dialysis nurse?",
      answer: [
        "“Being a dialysis nurse is beyond rewarding, because it is even changing.” Said Lillian Pryor, MSN, RN, CNN, President of the American Nephrology Nurses Association. “It takes the skill set of many nursing specialties to provide proper dialysis treatment and care.”",
      ],
    },
    {
      id: 4,
      question: "what are the role of nurse during dialysis?",
      answer: [
        "Role of nurse during dialysis",
        "Checking the patient’s vital sign and talking with them to assess their condition.",
        "Teaching patient about their disease and its treatment and answering any questions.",
        "Overseeing the dialysis treatment from start to finish.",
        "Making sure patients are given the correct medications ordered by their doctors.",
      ],
    },
    {
      id: 5,
      question: "What is Dialysis?",
      answer: [
        "Dialysis is a treatment for individuals whose kidney are failing. There are two types of dialysis, hemodialysis and peritoneal dialysis, that both perform normal kidney functions, filtering waste and excess fluid from the blood.Hemodialysis",
        "A machine removes blood from your body filter it through a dialyzer (artificial kidney) and returns the cleaned blood to your body. This 3 to 5 hour process may take place in a hospital or a dialysis center three times a week. Peritoneal dialysis",
        "Peritoneal dialysis is done with tiny blood vessels inside the abdominal lining (peritoneum) filter blood through the aid of a dialysis solution. This solution is a type of cleansing liquid that contains water, salt and other additives. 3 goals of dialysis",
        "Removing waste, salt and extra water to prevent them from building up in the body.",
      ],
    },
    {
      id: 6,
      question: "What are the benefits of Dialysis?",
      answer: [
        "Dialysis nurse provide care to end stage renal disease patient.",
        "Cleaning toxins from their bodies.",
        "Educating them about the kidney.",
        "Self-care choices that allows them to live as fully a life as possible.",
      ],
    },
    {
      id: 7,
      question: "Who are Care Givers? ",
      answer: [
        "A person who provide help to another person in need is care giver. Care giver help individuals achieve tasks and functions necessary for daily life that may have for a number of reason, become inaccessible to them.",
      ],
    },
    {
      id: 8,
      question: "What are the Responsibilities of care giver ?",
      answer: [
        "Assess medical needs.",
        "Prepare a care plan.",
        "Assist with basic needs.",
        "Provide companionship.",
        "Helping with home keeping.",
        "Monitor medications.",
        "Assess home care plan regularly.",
        "Prepare meals.",
        "Assist with transfer and mobility.",
        "Provide transportation.",
      ],
    },
    {
      id: 9,
      question: "What are the qualities of care giver ?",
      answer: [
        "Patience",
        "Compassion",
        "Attentiveness",
        "Provide companionship.",
        "Dependability",
        "Trustworthiness",
        "Empathy",
        "Time management",
      ],
    },
  ];

  return (
    <div className="faq__container">
      <h1>Frequently Asked Questions</h1>
      <p>Questions you might ask about our care givers and services.</p>

      <div className="faqs">
        {faqs.map((faq) => {
          return (
            <div key={faq.id}>
              <div className="qstn" onClick={() => toggleState(faq.id)}>
                <h3>{faq.question}</h3>
                <p className={`${toggleans[faq.id] && "show"}`}>
                  <i className="ri-arrow-down-s-line"></i>
                </p>
              </div>
              <AnimatePresence>
                {toggleans[faq.id] && (
                  <motion.div
                    className="desp"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                      // delay: 0.02,
                      type: "spring",
                      stiffness: 50,
                      damping: 20,
                    }}
                  >
                    {faq.answer.map((answer, index) => {
                      return <p key={index}>{answer}</p>;
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
