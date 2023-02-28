import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {findAllByDisplayValue} from "@testing-library/react";
import TeamsList, {teamsList} from "./Teams";
import SzorzoTabla from "./szorzotabla";
import { Clocks } from './Clock';


// interface Author{
//     name: string
//     age: number
// }
//
// interface UserInfo {
//     author: Author;
//     text: string;
//     date: Date;
// }
//
//
// interface UserInfoProps {
//     userInfo: UserInfo
//
// }
//
// const userInfo: UserInfo = {
//     date: new Date(),
//     text:'asd',
//     author: {
//         age:4,
//         name:'ewe'
//
//     }
// }
//
// function UserInfo(props: UserInfoProps) {
//     return (
//         <div>
//             <h1>Name: {props.userInfo.author.name}</h1>
//             <h1>Age: {props.userInfo.author.age}</h1>
//             <h1>Title: {props.userInfo.text}</h1>
//         </div>
//     )
// }

// interface ToDo{
//     description: string
//     title: string
//     id: number
//
// }
//
// interface ToDoListProps {
//     todo: ToDo[]
// }
//
// const toDoList: ToDo[] = [
//     {
//         description: "takaritas ma este",
//         title: "Takaritas",
//         id: 1,
//     },
//     {
//         description: "asd",
//         title: "asd",
//         id: 2,
//     }
//
// ]
//
//
//
// function ToDoList(props: ToDoListProps){
//     function onClick() {
//         // alert(item.title);
//     }
//
//     return(
//         <>
//             <div >{props.todo.map(item => <div key={item.id}> {item.title}  </div> )}</div>
//         </>
//
//     )
//
// }


interface Members{
    name: string
    age: number
    nickname: string
    sex: string
}

interface Teams {
    abbr: string
    name: string
    members: Members

}

interface TeamsProps{
    teams: Teams[]
}





function App() {

    const [count, setCount] = useState(0);

  return (
        // <Welcome1 name="Roli" age={20}/>
      // <UserInfo userInfo={userInfo} />
      // <ToDoList todo={toDoList}/>
      // <TeamsList teams={teamsList}/>
    //   <SzorzoTabla />
    <>
        <button onClick={() => setCount(count + 1)}>1</button>
        <button onClick={() => setCount(count - 1)}>1</button>
            {new Array(count).fill(0).map((v, i) => {
                <Clocks key={i} />
            })}
    </>
  );
}

export default App;
