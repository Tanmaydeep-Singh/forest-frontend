import React from 'react'
import FAQBox from './FAQBox'

function FAQ() {
  return (
    <div className=" bg-[#CEE963] md:px-28 py-10  ">
        <h1 className="text-[30px] font-bold px-5" >Frequently Asked Questions  </h1>
        <div className=' grid md:grid-cols-2 items-center justify-center justify-items-center w-[80%] m-auto '>

            <FAQBox question={"question-1"} answer={"answer-1"} />
            <FAQBox question={"question-2"} answer={"answer-2"} />
            <FAQBox question={"question-3"} answer={"answer-3"} />
            <FAQBox question={"question-4"} answer={"answer-4"} />
            <FAQBox question={"question-5"} answer={"answer-5"} />
        </div>
    </div>
  )
}

export default FAQ