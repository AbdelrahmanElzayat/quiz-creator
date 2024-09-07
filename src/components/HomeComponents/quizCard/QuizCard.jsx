import React from "react";
import "./QuizCard.css";
const QuizCard = () => {
  const questions = [
    {
      question: "What is the capital of France?",
      answers: ["Paris", "London", "Berlin"],
      correct: "Paris",
    },
    { question: "What is 2 + 2?", answers: ["3", "4", "5"], correct: "4" },
  ];

  return (
    <div className="quizCard">
      <div className="quizHeader">
        <div className="quizName">
          <svg
            width={48}
            height={48}
            fill="#888"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 403.48 403.48"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <g>
                <path d="M277.271,0H46.176v403.48h311.129V80.035L277.271,0z M281.664,25.607l50.033,50.034h-50.033V25.607z M61.176,388.48V15 h205.489v75.641h75.641v297.84H61.176z"></path>
                <path d="M101.439,117.58h55.18V62.4h-55.18V117.58z M116.439,77.4h25.18v25.18h-25.18V77.4z"></path>
                <path d="M101.439,192.08h55.18V136.9h-55.18V192.08z M116.439,151.9h25.18v25.18h-25.18V151.9z"></path>
                <path d="M101.439,266.581h55.18V211.4h-55.18V266.581z M116.439,226.4h25.18v25.181h-25.18V226.4z"></path>
                <path d="M101.439,341.081h55.18v-55.18h-55.18V341.081z M116.439,300.901h25.18v25.18h-25.18V300.901z"></path>
                <rect
                  x="177.835"
                  y="326.081"
                  width="114.688"
                  height="15"
                ></rect>{" "}
                <rect
                  x="177.835"
                  y="251.581"
                  width="114.688"
                  height="15"
                ></rect>{" "}
                <rect x="177.835" y="177.08" width="114.688" height="15"></rect>{" "}
                <rect x="177.835" y="102.58" width="114.688" height="15"></rect>{" "}
              </g>
            </g>
          </svg>

          <div className="headerContent">
            <h3>quiz title</h3>
            <p>quiz description</p>
          </div>
        </div>
        <div className="QuizOptions">
          <button title="edit">
            <svg
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#888"
            >
              <path d="M6.41421 15.89L16.5563 5.74785L15.1421 4.33363L5 14.4758V15.89H6.41421ZM7.24264 17.89H3V13.6473L14.435 2.21231C14.8256 1.82179 15.4587 1.82179 15.8492 2.21231L18.6777 5.04074C19.0682 5.43126 19.0682 6.06443 18.6777 6.45495L7.24264 17.89ZM3 19.89H21V21.89H3V19.89Z"></path>
            </svg>
          </button>
          <button title="view">
            <svg
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#888"
            >
              <path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path>
            </svg>
          </button>
          <button title="youtube">
            <svg
              width={24}
              height={24}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="#888"
            >
              <path d="M19.6069 6.99482C19.5307 6.69695 19.3152 6.47221 19.0684 6.40288C18.6299 6.28062 16.501 6 12.001 6C7.50098 6 5.37252 6.28073 4.93225 6.40323C4.68776 6.47123 4.4723 6.69593 4.3951 6.99482C4.2863 7.41923 4.00098 9.19595 4.00098 12C4.00098 14.804 4.2863 16.5808 4.3954 17.0064C4.47126 17.3031 4.68676 17.5278 4.93251 17.5968C5.37252 17.7193 7.50098 18 12.001 18C16.501 18 18.6299 17.7194 19.0697 17.5968C19.3142 17.5288 19.5297 17.3041 19.6069 17.0052C19.7157 16.5808 20.001 14.8 20.001 12C20.001 9.2 19.7157 7.41923 19.6069 6.99482ZM21.5442 6.49818C22.001 8.28 22.001 12 22.001 12C22.001 12 22.001 15.72 21.5442 17.5018C21.2897 18.4873 20.547 19.2618 19.6056 19.5236C17.8971 20 12.001 20 12.001 20C12.001 20 6.10837 20 4.39637 19.5236C3.45146 19.2582 2.70879 18.4836 2.45774 17.5018C2.00098 15.72 2.00098 12 2.00098 12C2.00098 12 2.00098 8.28 2.45774 6.49818C2.71227 5.51273 3.45495 4.73818 4.39637 4.47636C6.10837 4 12.001 4 12.001 4C12.001 4 17.8971 4 19.6056 4.47636C20.5505 4.74182 21.2932 5.51636 21.5442 6.49818ZM10.001 15.5V8.5L16.001 12L10.001 15.5Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
