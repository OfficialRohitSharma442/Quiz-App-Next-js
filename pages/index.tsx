import { useContext, useEffect, useState } from "react";
import { themes } from "@/context/context";
export default function Home() {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  // const [flag, setFlag] = useState(false);
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
      // setFlag(true);
      return null;
    }

    let randomNumber: any;
    do {
      randomNumber = Math.floor(Math.random() * 10);
    } while (generatedNumbers.includes(randomNumber));

    setGeneratedNumbers([...generatedNumbers, randomNumber]);
    // console.log(generatedNumbers);
    setIndex(randomNumber);
    increseScore();
  };
  const increseScore = () => {
    if (ans == data[index].answer) {
      setScore(1 + score);
    }
    // alert(score);
    const radio = document.querySelectorAll(".radio");
    radio.forEach((e: any, i: any) => {
      if (e.checked) {
        e.checked = false;
      }
    });
    const label = document.querySelectorAll(".labelsp");
    label.forEach((event) => {
      if (event.classList.contains("bg-[#0891b2]")) {
        event.classList.remove("bg-[#0891b2]");
      }
    });
    // alert(score);
  };
  const handelChange = (e: any) => {
    // console.log(e.target.htmlFor);
    setAns(e.target.htmlFor);
    const label = document.querySelectorAll(".labelsp");
    label.forEach((event) => {
      if (event.classList.contains("bg-[#0891b2]")) {
        // console.log("hi");
        event.classList.remove("bg-[#0891b2]");
      }
    });
    e.target.classList.add("bg-[#0891b2]");
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
                      <>
                        {/* <div key={e}> */}
                        <input
                          type="radio"
                          className="radio hidden"
                          value={e}
                          id={e}
                          name="radioButton"
                        />
                        <label
                          htmlFor={e}
                          key={i}
                          onClick={handelChange}
                          className="cursor-pointer labelsp p-4 bg-gray-600 text-white mb-3 last:mb-0 rounded-md block hover:bg-orange-400"
                        >
                          <span className="p-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                            {e}
                          </span>
                        </label>
                        {/* </div> */}
                      </>
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
