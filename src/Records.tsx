import { title } from "process";
import React, { useState } from "react"
import './Records.css'
import { Users } from "./RecordsInterface";

let nextId = 0;

export const USER_RECORDS: Users[] = [

]


const Records = () =>{

    const [records, setRecords] = useState(USER_RECORDS);
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');
    const [error, setErrorMsg] = useState('');
    const [hasError, setError] = useState(false);

    function addItem() {
        if(name === '') {
            setErrorMsg("Name can not be blank!")
            setError(true)
        }
        else if(age === null || age < 18 || age.toString() == '') {
            setErrorMsg("Age can not be blank and has to be bigger than 18!")
            setError(true)
        }
        else if(email === '') {
            setErrorMsg("Email can not be blank!")
            setError(true)
        }
        else {
            setRecords([...records, {id:nextId++, name: name, age:age, email:email}])
            setErrorMsg("");
            setError(false)
        }
    }

    function deleteItem(id:number) {

        const newRecords = records.filter((itemid) => itemid.id != id)
        setRecords(newRecords)
    }

    const NameChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const AgeChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setAge(parseInt(event.target.value));
    }

    const EmailChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    
    function editItem(id:number) {

        const newRecords = records.splice(id, 1, )
        setRecords(newRecords)
    }
    

    return (
        <>
        <form onSubmit={(event) => {event.preventDefault()}}>

        <div className="errorMessage" style={{opacity: hasError ? '100%' : '0%'}}>{error}</div><br />
        <label htmlFor="nameLabel">Name</label>
        <input type="text" onChange={NameChange}/>

        <label htmlFor="ageLabel">Age</label>
        <input type="number" onChange={AgeChange}/>

        <label htmlFor="emailLabel">E-mail</label>
        <input type="text" onChange={EmailChange}/>


        <button onClick={addItem}>Hozzaad</button>
        {/* <button onClick}>Modosit</button> */}
        </form>


        <table>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>E-MAIL</th>
                <th>ACTIONS</th>
            </tr>
            {records.map(item => 
            <tr key={item.id}>
                <td>{item.id+1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>
                <button className="deleteButton" onClick={() =>deleteItem(item.id)}>X</button>
                </td>
            </tr>
            
            )}
        </table>
            
        </>
    )
}

export default Records;