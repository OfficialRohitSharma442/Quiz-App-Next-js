import { log } from "console";
import { useState } from "react";

export default function Home() {
const [answer, SetAnswer] = useState(" ");
const data = [
  {
    qustion:"What is JavaScript?",
    option:[" JavaScript is a scripting language used to make the website interactive"," JavaScript is an assembly language used to make the website interactive","JavaScript is a compiled language used to make the website interactive","None of Above"],
    ans :"JavaScript is a scripting language used to make the website interactive" 
  },
  {
    qustion:" Which of the following is correct about JavaScript?",
    option:[" JavaScript is an Object-Based language","JavaScript is Assembly-language"," JavaScript is an Object-Oriented language","JavaScript is a High-level language"],
    ans :" JavaScript is an Object-Based language" 
  },
  {
    qustion:"Arrays in JavaScript are defined by which of the following statements?",
    option:[" It is an ordered list of values"," It is an ordered list of objects","It is an ordered list of string","It is an ordered list of functions"],
    ans :"It is an ordered list of values" 
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

  function handleChange(e:any){
    console.log(e);    
  };
  
  return (
    <>
      <div className="mr-auto align-middle p-5 border-x-sky-950 border-4 border-solid">
        <div className="font-serif text-center " >
          {data.map((item)=>{
            
             return(
              <>
               <h3 className="qustion">{item.qustion}</h3>
               <form className="@apply grid grid-cols-[1fr_1fr] gap-3 text-[15px]">
               <div className="ans grow" >

            <input 
             type="radio" 
             name="ch"
             id="input1" 
             value={item.option[0]} 
             onChange={(e)=>{ handleChange(e.target.value===item.ans)}} />
            <label htmlFor="input1" >{item.option[0]}
            </label>
            </div>
            <div className="ans grow ">

            <input
             type="radio" 
             name="ch" 
             id="input2" 
             value={item.option[1]}
             onChange={(e)=>{  handleChange(e.target.value===item.ans)   }} />
            <label htmlFor="input2"  >{item.option[1]}</label>
            </div>
            <div className="ans grow ">

            <input 
            type="radio" 
            name="ch" 
            id="input3" 
            value={item.option[2]} 
            onChange={(e)=>{  handleChange(e.target.value===item.ans)   }} />
            <label htmlFor="input3" >{item.option[2]}
            </label>
            </div>
            <div className="ans grow ">

            <input
            type="radio" 
            name="ch" 
            id="input4" 
            value={item.option[3]} 
            onChange={(e)=>{  handleChange(e.target.value===item.ans)   }}  />
            <label htmlFor="input4" >{item.option[3]}</label>
            </div>
          </form>
          </>
          )
          }
          )}
        </div>
      </div>
      </>
  )
}
