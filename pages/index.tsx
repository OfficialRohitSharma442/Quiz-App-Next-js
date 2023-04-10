import { useContext, useEffect, useState } from "react";
// import { themes } from "@/context/context";
export default function Home() {
  const [index, setIndex] = useState<any>();
  const [score, setScore] = useState(0);
  const [flag, setFlag] = useState(false);
  const [ans, setAns] = useState();
  const [generatedNumbers, setGeneratedNumbers] = useState<any>([]);
  // const [dark, setDark] = useState(false);
  // const { dark, setDark } = useContext(themes);
  useEffect(() => {
    setIndex(Math.floor(Math.random() * 10));
  }, []);
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
  // console.log(data);
  const generateRandomNumber = () => {
    if (generatedNumbers.length == data.length - 1) {
      alert(`Exam Completed Your Score is ${score} out of ${data.length - 1}`);

      return null;
    }
    let randomNumber: any;
    do {
      randomNumber = Math.floor(Math.random() * 10);
    } while (generatedNumbers.includes(randomNumber));

    setGeneratedNumbers([...generatedNumbers, randomNumber]);
    // console.log(generatedNumbers);
    setTimeout(() => {
      setIndex(randomNumber);
    }, 2000);
    increseScore();
    let label = document.querySelectorAll(".labelsp");
    console.log(label);
    label.forEach((elem: any) => {
      console.log(elem.innerText);
      if (elem.innerText === data[index].answer) {
        elem.classList;
        elem.classList.add("bg-green-400");
      } else if (ans === elem.innerText) {
        elem.classList.add("bg-red-400");
      }
    });
    console.log(generatedNumbers);
  };

  const increseScore = () => {
    if (ans == data[index].answer) {
      setScore(1 + score);
    }

    const radio = document.querySelectorAll(".radio");
    radio.forEach((e: any, i: any) => {
      if (e.checked) {
        e.checked = false;
      }
    });
    const label = document.querySelectorAll(".labelsp");
    label.forEach((event) => {
      event.classList.remove("bg-yellow-500");
      event.classList.remove("bg-red-400");
      setTimeout(() => {
        event.classList.remove("bg-red-400");
        event.classList.remove("bg-green-400");
      }, 2000);
    });
    setFlag(false);
    console.log("rendom array", generatedNumbers);
    console.log("index => ", index);
  };
  const handelChange = (e: any, result: any) => {
    // alert("hello")

    setAns(result);
    setFlag(true);
    // console.log(e.target.childNodes[0].innerText);
    // console.log();
    const label = document.querySelectorAll(".labelsp");
    label.forEach((event) => {
      if (event.classList.contains("bg-yellow-500")) {
        event.classList.remove("bg-yellow-500");
      }
    });
    // console.log(e);
    e.target.classList.add("bg-yellow-500");
    
  };

  return (
    <>
      <div>
        <div className="dark:bg-[#192734] ">
          <div className="h-[calc(100vh-92px)] flex items-center">
            <div className="m-auto  align-middle p-5 mr border-4 border-solid w-[70%] rounded-lg">
              <h1 className="font-extrabold text-3xl mb-5 font-noto dark:text-white">
                {index ? data[index].question : ""}
              </h1>
              <div>
                {index
                  ? data[index].options.map((e: any, i: any) => {
                      return (
                        <>
                          <div className="" key={e}>
                            <input
                              type="radio"
                              className="radio hidden"
                              value={e}
                              id={i}
                              name="radioButton"
                            />
                            <label
                              htmlFor={i}
                              key={i}
                              onClick={(p) => {
                                handelChange(p, e);
                              }}
                              className="cursor-pointer	labelsp p-4 bg-gray-600 m-3 last:mb-0 rounded-md block hover:bg-orange-400 ml-2 text-sm font-medium  text-gray-900 dark:text-gray-300"
                            >
                              {e}
                            </label>
                          </div>
                        </>
                      );
                    })
                  : " "}
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className={`text-white bg-gray-800 hover:bg-gray-900 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-white dark:text-black dark:focus:ring-gray-700 dark:border-gray-700`}
              onClick={generateRandomNumber}
              disabled={!flag ? true : false}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
