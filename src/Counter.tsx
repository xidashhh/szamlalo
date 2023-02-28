import React, {useState} from 'react';

interface State {
    value:number,
    text:string,
}

const Counter = () =>{
    const [value, setValue] = useState(0);
    const [uresString, setString] = useState('')

    // const [state, useState] = useState<State>({value:0, text:''})

    return(
        <>
            <div>Érték: {value}</div>
            <div>Dupla: {value*2}</div>
            <div>Négyzet: {value**2}</div>
            <div>String: {uresString}</div>
            <button onClick={()=>{setValue(value+1)}}>+1</button>
            <button onClick={()=>{setString(uresString+'HAHA ')}}>HAHA</button>
        </>
    )
}


export default Counter;