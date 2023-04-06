import { spawn } from "child_process";
import { useEffect, useState } from "react";  
export default function Home() {
  // const [answer, setAnswer] = useState(false);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [flag, setFlag] = useState(false);
  const [ans, setAns] = useState("");
  const [generatedNumbers, setGeneratedNumbers] = useState<any>([]);

  const data = [
    {
      question: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      answer: "Paris",
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent van Gogh",
        "Leonardo da Vinci",
        "Pablo Picasso",
        "Michelangelo",
      ],
      answer: "Leonardo da Vinci",
    },
    {
      question: "What is the largest mammal in the world?",
      options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      answer: "Blue Whale",
    },
    {
      question: "What is the currency of Japan?",
      options: ["Dollar", "Euro", "Yen", "Pound"],
      answer: "Yen",
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["Mount Everest", "K2", "Kilimanjaro", "Denali"],
      answer: "Mount Everest",
    },
    {
      question: "What is the largest country in the world by land area?",
      options: ["Canada", "Russia", "China", "United States"],
      answer: "Russia",
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Au", "Gd", "Ag"],
      answer: "Au",
    },
    {
      question: "What is the smallest planet in our solar system?",
      options: ["Venus", "Mars", "Mercury", "Earth"],
      answer: "Mercury",
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturn", "Neptune", "Uranus"],
      answer: "Jupiter",
    },
    {
      question: "What is the name of the first man to walk on the moon?",
      options: [
        "Buzz Aldrin",
        "Neil Armstrong",
        "Yuri Gagarin",
        "Alan Shepard",
      ],
      answer: "Neil Armstrong",
    },
  ];
  const generateRandomNumber = () => {
    if (generatedNumbers.length + 1 === data.length) {
      alert(`Exam Completed Your Score is ${score} out of ${data.length - 1}`);
      return null;
    }

    let randomNumber: any;
    do {
      randomNumber = Math.floor(Math.random() * 10);
    } while (generatedNumbers.includes(randomNumber));

    setGeneratedNumbers([...generatedNumbers, randomNumber]);
    console.log(generatedNumbers);
    setIndex(randomNumber);
    increseScore();
  };
  const increseScore = () => {
    if (ans == data[index].answer) {
      setScore(score + 1);
    }
    const radio = document.querySelectorAll(".radio");
    radio.forEach((e: any, i: any) => {
      if (e.checked) {
        e.checked = false;
      }
    });
  };
  const handelChange = (e: any) => {
    setAns(e.target.value);
  };

  return (
    <>
      <div className="mr-auto align-middle p-5 border-x-sky-950 border-4 border-solid ">
        <div className="ques">
          <h3>{data[index].question}</h3>
        </div>
        <div>
          {data[index].options &&
            data[index].options.map((e: any, i: any) => {
              return (
                <div key={i}>
                  <input
                    type="radio"
                    className="radio"
                    value={e}
                    id={i}
                    name="radioButton"
                    onChange={handelChange}
                  />
                  <label htmlFor={i}>{e}</label>
                </div>
              );
            })}
        </div>
        <div className="flex justify-around">
          <button
            className="border-x-2 border-y-2 p-2 bg-slate-900 text-white"
            onClick={generateRandomNumber}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
