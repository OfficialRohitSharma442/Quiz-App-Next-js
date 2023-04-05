import { useState } from "react";

export default function Home() {
  // const [answer, setAnswer] = useState(false);
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [flag, setFlag] = useState(false);
  const [ans, setAns] = useState("");

  const data = [
    {
      qustion: "What is JavaScript?",
      option: [
        "JavaScript is a scripting language used to make the website interactive",
        "JavaScript is an assembly language used to make the website interactive",
        "JavaScript is a compiled language used to make the website interactive",
        "None of Above",
      ],
      ans: "JavaScript is a scripting language used to make the website interactive",
    },
    {
      qustion: " Which of the following is correct about JavaScript?",
      option: [
        "JavaScript is an Object-Based language",
        "JavaScript is Assembly-language",
        "JavaScript is an Object-Oriented language",
        "JavaScript is a High-level language",
      ],
      ans: "JavaScript is Assembly-language",
    },
    {
      qustion:
        "Arrays in JavaScript are defined by which of the following statements?",
      option: [
        "It is an ordered list of values",
        "It is an ordered list of objects",
        "It is an ordered list of string",
        "It is an ordered list of functions",
      ],
      ans: "It is an ordered list of functions",
    },
    {
      qustion: "Which of the following is not javascript data types?",
      option: [
        "Null type",
        "Undefined type",
        "Number type",
        "All of the mentioned",
      ],
      ans: "All of the mentioned",
    },
  ];
  const nextPage = () => {
    if (index < data.length - 1) {
      setIndex(index + 1);
    } else {
      alert(
        `You completed quiz succfully Your score is ${score} out of ${data.length}...`
      );
    }
    if (ans == data[index].ans) {
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
          <h3>{data[index].qustion}</h3>
        </div>
        <div>
          {data[index].option &&
            data[index].option.map((e: any, i: any) => {
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
