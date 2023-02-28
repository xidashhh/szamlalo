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
            <div className="formDiv">
                <label htmlFor="nameLabel">Name</label><br />
                <input type="text" onChange={NameChange}/><br />

                <label htmlFor="ageLabel">Age</label>
                <br />
                <input type="number" onChange={AgeChange}/><br />

                <label htmlFor="emailLabel">E-mail</label><br />
                <input type="text" onChange={EmailChange}/><br />


                <button onClick={addItem} className={'buttonAdd'}>Add</button>
                {/* <button onClick}>Modosit</button> */}
            </div>
        </form>


        <table>
            <tr>
                <th>NAME</th>
                <th>AGE</th>
                <th>E-MAIL</th>
                <th>ACTIONS</th>
            </tr>
            {records.map(item => 
            <tr key={item.id}>
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