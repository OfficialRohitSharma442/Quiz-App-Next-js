import { spawn } from "child_process";
import { useEffect, useState } from "react";

export default function Home() {
  // const [answer, setAnswer] = useState(false);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [flag, setFlag] = useState(false);
  const [ans, setAns] = useState("");
  let arr: any = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const checknum = (randomNum: any) => {
    console.log(randomNum);
    return randomNum == randomNum;
  };
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
  // let arrj : any = [];
  arr[0] = [0];
  // let i = 0;
  const nextPage = () => {
    // debugger;
    let randomNum = Math.floor(Math.random() * 10);
    if (arr.includes(randomNum)) {
      console.log("hi");
    } else {
      console.log("no no no");
    }
    // if (arr.includes(randomNum)) {
    //   randomNum = Math.floor(Math.random() * 10);
    //   setIndex(Math.floor(Math.random() * 10));
    //   arr.push(randomNum);
    // } else {
    //   setIndex(randomNum);
    //   arr.push(randomNum);
    // }
    // console.log(arr);

    // if (ans == data[index].answer) {
    //   setScore(score + 1);
    // }
    // const radio = document.querySelectorAll(".radio");
    // radio.forEach((e: any, i: any) => {
    //   if (e.checked) {
    //     e.checked = false;
    //   }
    // });
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
            onClick={nextPage}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
