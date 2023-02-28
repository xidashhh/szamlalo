import React, { useState } from "react";


interface Props {
    value: number;
    setValue : (value:number) => void
    amount?: number;
}

const DecreaseButton = ({value, setValue, amount = 1}:Props) => {

    const [name, setName] = useState('')


    return (
        <>
        <div>
            <div>
                <button style={{width: '100px', height: "100px", fontSize: '20px'}} onClick={() => setValue(value-amount)}>-{amount}</button>
            </div>
        </div>
        </>
    )
}

export default DecreaseButton;