import React, { useState } from "react";

interface Props {
    value: number
    setValue: (value: number)=> void
}

const IncreaseButton = ({value, setValue}: Props) => {
    

    return (
        <>
        <div>
            <div>
                <button style={{width: '100px', height: "100px", fontSize: '20px'}} onClick={() => setValue(value+1)}>{value}</button>
            </div>
        </div>
        </>
    )
}

export default IncreaseButton;