import React, { useEffect, useState } from "react";

interface ClockState {
    title: string,
    time: Date,
}

export default function Clock() {
  const[time, setTime] = useState(new Date());

  useEffect(() => {
    document.body.style.backgroundColor='red';

    return ()=> {
      document.body.style.backgroundColor='';
    }
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
   

    return ()=> {
      clearInterval(interval)
    }
  }, [])

    return(
      <div>
        {time.toLocaleString()}
      </div>
    )
}


export class Clocks extends React.Component<{}, ClockState>{

  state = {title: 'asd', time: new Date()}

  componentDidMount() {
    // document.title = this.state.title
    // this.date = window.setInterval(() => this.setState({date: new Date()}), 1000)
    setInterval(() => {
      console.log('tick')
      this.setState({
        time: new Date()
      })
  },1000)
  }
  componentWillUnmount() {
    // clearInterval(this.date)
  }
  render(){
    return(
      <>
      <div>
        <div>
          {this.state.time.toLocaleString()}
        </div>
      </div>
      </>
    )
  }
}
   