import React, { PropsWithChildren, useState } from "react";
import './interfaces'
import './Panel.css'

interface Props{
    id?: number
    title?: string
    description?: string
    text?: JSX.Element
    betterText?: React.ReactNode
    children?: React.ReactNode
}


const PanelOutput = (props: PropsWithChildren<Props>) => {



    // const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) => {

    //     setName(event.currentTarget.value)

    // }

    // const kattintasEvent = () =>{

    // }

    return(

        <>            
            <div className="panel">
                <span>{props.id}</span> <br/>
                <span>{props.title}</span><br/>
                <span>{props.description}</span><br/>
                <span>{props.text}</span><br/>
                <span>{props.betterText}</span><br/>
                <span>{props.children}</span><br/>
            </div>
        </>

    )
}


export default PanelOutput;