import React, { useState } from "react";
import DecreaseButton from "./DecreaseValue";
import IncreaseButton from "./szamlalo";



const CounterButtons = () =>{

    const [value, setValue] = useState(0);
    const [amount, setAmount] = useState(0);
    let [text, setText] = useState('');
    const increase = <IncreaseButton value={value} setValue={setValue} />
    const decrease = <DecreaseButton value={value} setValue={setValue} amount={1}/>

    const NumberChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setAmount(parseInt(event.target.value));
    }

    // function lessThanZero(number:number) {
        
    //     if (number < 0) {
    //         return true
    //     }
    //     else {
    //         return false
    //     }
    // }

    function reverseFunction(value: number, setValue: React.Dispatch<React.SetStateAction<number>>) {
    
        if(value > 0) {
            return (
            <>
            {decrease}
            {increase}
            </>
        
        )}
    
        else {
            return (
            <>
            {increase}
            {decrease}
            </>
        
        )}
        
    }

        return(
            <>
                <div>
                <input type="number" onChange={NumberChange}/>
                    {reverseFunction(value, setValue)}
                    
                    <div style={{color: 'red'}}>
                        {value<0? 'Kisebb, mint 0' : ''}
                        {value<0 && 'Kisebb, mint 0'}
                    </div>
                    {/* <button style={{width: '20px'}} onClick={() => setValue(value-1)}>-</button> */}
                </div>
            </>
        )
    }

export default CounterButtons;




// interface State {
//     value: number
// }

// class CounterButtonsClass extends React.Component<{}, State> {

//     state = {value: 0}

//     render() {
//         const {value} = this.state;

//         const setValue = (newValue:number) =>{
//             this.setState({
//                 value: newValue
//             })
//         }
//         return(


//             <>
//                 <div>
//                     <IncreaseButton value={value} setValue={setValue} />
//                     <DecreaseButton value={value} setValue={setValue} />
//                 </div>
//             </>
//         )
//     }
// }