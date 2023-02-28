import { isVisible } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import './accordion.css'

interface Props {
    title: React.ReactNode
    description: React.ReactNode
    defaultOpen?: boolean
}

const Accordion = (props: Props, defaultOpen=false) => {
    const [toggle, setToggle] = useState(false)

    function fncToggle() {
        
        setToggle(!toggle)
    }

return(

    <>
    <button onClick={fncToggle} className="accordion">
        {props.title}
    </button>
        <div className={"panel" + toggle? 'panel--open' : 'panel--closed'} >
        {props.description}
        </div>
</>
)
}



export default Accordion