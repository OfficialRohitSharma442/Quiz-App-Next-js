import { useContext, useEffect, useState } from "react";
import { themes } from "@/context/context";
export default function Home() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [flag, setFlag] = useState(false);
  const [ans, setAns] = useState("");
  const [generatedNumbers, setGeneratedNumbers] = useState<any>([]);
  // const [dark, setDark] = useState(false);
  const { dark, setDark } = useContext(themes);

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
      setFlag(true);
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
      <div>
        <div className="dark:bg-[#192734] ">
          <div className="h-[calc(100vh-44px)] flex items-center">
            <div className="m-auto  align-middle p-5 mr border-4 border-solid w-[70%] rounded-lg">
              <h1 className="font-extrabold text-3xl mb-5 		font-noto dark:text-white">
                {data[index].question}
              </h1>
              <div>
                {data[index].options &&
                  data[index].options.map((e: any, i: any) => {
                    return (
                      <div
                        key={i}
                        className="p-3 align-middle bg-gray-600 text-white mb-3 last:mb-0 rounded-md flex justify-center hover:bg-orange-400"
                      >
                        <input
                          type="radio"
                          className="radio w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600   dark:bg-gray-700 dark:border-gray-600"
                          value={e}
                          id={i}
                          name="radioButton"
                          onChange={handelChange}
                        />
                        <label
                          className="w-full  ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                          htmlFor={i}
                        >
                          {e}
                        </label>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          <div className="flex justify-around  absolute bottom-0 right-0">
            <button
              className={`text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:text-black dark:focus:ring-gray-700 dark:border-gray-700`}
              onClick={generateRandomNumber}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
