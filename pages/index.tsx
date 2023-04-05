import { useState } from "react";

export default function Home() {
// const [answer, setAnswer] = useState(false);
const [index , setIndex]=useState(0)
const [score ,setScore] = useState(0);
const data = [
  {
    qustion:"What is JavaScript?",
    option:["JavaScript is a scripting language used to make the website interactive","JavaScript is an assembly language used to make the website interactive","JavaScript is a compiled language used to make the website interactive","None of Above"],
    ans :"JavaScript is a scripting language used to make the website interactive" 
  },
  {
    qustion:" Which of the following is correct about JavaScript?",
    option:["JavaScript is an Object-Based language","JavaScript is Assembly-language","JavaScript is an Object-Oriented language","JavaScript is a High-level language"],
    ans :"JavaScript is Assembly-language" 
  },
  {
    qustion:"Arrays in JavaScript are defined by which of the following statements?",
    option:["It is an ordered list of values","It is an ordered list of objects","It is an ordered list of string","It is an ordered list of functions"],
    ans :"It is an ordered list of functions" 
  },
  {
    qustion:"Which of the following is not javascript data types?",
    option:["Null type",
    "Undefined type",
    "Number type",
    "All of the mentioned"],
    ans :"All of the mentioned" 
  }
]
const nextPage = ()=>{
 
  if(index<data.length-1){
   
    setIndex(index+1);

  }else{
    alert("You Reached the last Pages ab Back chala ja")
  }
}
const handelChange =(e:any)=>{
if(e.target.value==data[index].ans){
  setScore(score+1); 
}
}
const previousPage = (e:any)=>{
 
  if(index>0){
    setIndex(index-1);
  }else{
    alert("bhai screen se bhahr niklega kya")
  }
} 
  return (
    <>
      <div className="mr-auto align-middle p-5 border-x-sky-950 border-4 border-solid ">
          {/* {data.map((item)=>{
            
            return(
              <>
               <div className={`font-serif text-center ${answer?"bg-gradient-to-r from-cyan-500 to-blue-500":"bg-gradient-to-r from-white-500 to-white-500"}`} >
               <h3 className="qustion">{item.qustion}</h3>
               <form className="@apply grid grid-cols-[1fr_1fr] gap-3 text-[15px]">
               <div className="ans grow" >

            <input 
             type="radio" 
             name="ch"
             id="input1" 
             value={item.option[0]} 
             onChange={(e)=>{ SetAnswer(e.target.value===item.ans)}} />
            <label htmlFor="input1" >{item.option[0]}
            </label>
            </div>
            <div className="ans grow ">

            <input
             type="radio" 
             name="ch" 
             id="input2" 
             value={item.option[1]}
             onChange={(e)=>{ SetAnswer(e.target.value===item.ans)}} />
            <label htmlFor="input2"  >{item.option[1]}</label>
            </div>
            <div className="ans grow ">

            <input 
            type="radio" 
            name="ch" 
            id="input3" 
            value={item.option[2]} 
            onChange={(e)=>{  SetAnswer(e.target.value===item.ans)}} />
            <label htmlFor="input3" >{item.option[2]}
            </label>
            </div>
            <div className="ans grow ">

            <input
            type="radio" 
            name="ch" 
            id="input4" 
            value={item.option[3]} 
            onChange={(e)=>{SetAnswer(e.target.value===item.ans)}}  />
            <label htmlFor="input4" >{item.option[3]}</label>
            </div>
          </form>
        </div>
          </>
          )
          }
          )} */}
          <div className="score">
            <h1>{score}</h1>
          </div>
          <div className="ques">
              <h3>{data[index].qustion}</h3>
          </div>
          <div>
            
            {data[index].option && data[index].option.map((e:any,i:any)=>{
              return(
                   <div>
                 <input
                  type="radio" 
                  value={e} id={i} name="radioButton"  onChange={handelChange} />
                 <label htmlFor={i}>{e}</label>
                  </div>
              )
          })
          }
          </div>
           <button onClick={previousPage}>Previous</button>
          <button onClick={nextPage}>Next</button>
      </div>
      </>
  )
}
