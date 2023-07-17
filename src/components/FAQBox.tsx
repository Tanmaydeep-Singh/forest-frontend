import React from 'react'

function FAQBox(props:any) {
    return (
        <><div className="collapse collapse-plus bg-[#ffffff] w-[280px] md:w-[445px] m-5">
            <input type="checkbox" name="my-accordion-3"  />
            <div className="collapse-title text-xl font-medium">
                {props.question}
            </div>
            <div className="collapse-content">
                <p>{props.answer}</p>
            </div>
            </div>
        </>
  )
}

export default FAQBox