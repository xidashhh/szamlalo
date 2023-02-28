import React, {useState} from 'react';

// interface Props {
//     label:,
// }

interface CounterState {
    value:number,
    text:string,
}

// const users: Map<string, User> = new Map();
// users.get();

export class CounterClass extends React.Component<{}, CounterState> {
    state = { value: 1, text: ''}

    private plusOneOnClick = () => { 
        this.setState({value:this.state.value+1})
        this.setState({value:this.state.value+1})
        // ez csak eggyel növeli meg

        this.setState(prevState => ({value: prevState.value+1}))
        this.setState(prevState => ({value: prevState.value+1}))
        
    }

    render() {
        // const { label } = this.props;
        const { text, value } = this.state
        return(
            // <span onClick={this.onClick}>
            //     {this.state.date.toString()}
            // </span>
            <>
            <div>
                {/* <div>{label}: {this.state.value}</div> */}

                <div>
                    <button onClick={() => {this.setState({value: value+1})}}>{value}</button>
                </div>
                <div>
                    <button onClick={() => {this.setState({value: value+1})}}></button>
                </div>
            </div>
            </>
        )
    }
}

const Counter = () =>{
    const [value, setValue] = useState(0);
    const [uresString, setString] = useState('')

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