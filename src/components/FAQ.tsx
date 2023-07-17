import React from 'react'
import FAQBox from './FAQBox'

function FAQ() {
  return (
    <div className=" bg-[#CEE963] md:px-28 py-10  ">
        <h1 className="text-[30px] font-bold px-5" >Frequently Asked Questions  </h1>
        <div className=' grid md:grid-cols-2 items-center justify-center justify-items-center w-[80%] m-auto '>

            <FAQBox question={"What is the Virtual Forest? "} answer={"Virtual forest is a web-based game that enables users to plant trees in the real world, while sitting on couch or work-desk! "} />
            <FAQBox question={"question-2"} answer={"What is the USP of Virtual Forest? "} />
            <FAQBox question={"question-3"} answer={"How does Virtual Forest plants trees in real life? "} />
            <FAQBox question={"question-4"} answer={"How much do I need to spend to plant a tree? "} />
            <FAQBox question={"question-5"} answer={"How many trees can a user plant in Virtual Forest?"} />
        </div>
    </div>
  )
}

export default FAQ