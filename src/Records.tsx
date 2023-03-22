import { title } from "process";
import React, { useState } from "react"
import './Records.css'
import { Users } from "./RecordsInterface";
import axios from "axios";

let nextId = 0;

export const USER_RECORDS: Users[] = [

]


const Records = () =>{

    const [records, setRecords] = useState(USER_RECORDS);
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState('');
    const [nameEdit, setNameEdit] = useState('');
    const [ageEdit, setAgeEdit] = useState(0);
    const [emailEdit, setEmailEdit] = useState('');
    const [error, setErrorMsg] = useState('');
    const [hasError, setError] = useState(false);
    const [editError, setEditErrorMsg] = useState('');
    const [hasEditError, setEditError] = useState(false);

    function addItem() {
        if(name === '') {
            setErrorMsg("Name can not be blank!")
            setError(true)
        }
        else if(age === null || age < 18 || age.toString() == '' || isNaN(age)) {
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

            axios.post("http://localhost:3000/api/users", {
                name: name,
                age: age,
                email: email,
            })
            .then((response) => console.log(response))
            .catch((err) => console.log(err));

            axios.get("http://localhost:3000/api/users/4")
            .then((response)=> {
                console.log(response.data.id);
            })
            .catch((err) => console.log(err))
        }
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

    const EditNameChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setNameEdit(event.target.value);
    }

    const EditAgeChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setAgeEdit(parseInt(event.target.value));
    }

    const EditEmailChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setEmailEdit(event.target.value);
    }

    
    function deleteItem(id:number) {

        const newRecords = records.filter((itemid) => itemid.id != id);
        setRecords(newRecords);
    }
    
    function editItem(id:number) {
        if(nameEdit === '') {
            setEditErrorMsg("Edited name can not be blank!")
            setEditError(true)
        }
        else if(ageEdit === null || ageEdit < 18 || ageEdit.toString() === '' || isNaN(ageEdit)) {
            setEditErrorMsg("Edited age can not be blank and has to be bigger than 18!")
            setEditError(true)
        }
        else if(emailEdit === '') {
            setEditErrorMsg("Edited email can not be blank!")
            setEditError(true)
        }
        else {
        setEditError(false)
        records.forEach(element => {
            if(element.id === id) {
                element.name = nameEdit;
                element.age = ageEdit;
                element.email = emailEdit;
                setRecords([...records])
            }
        });
        
    }
}
    

    return (
        <>
        <form className="formAdd" onSubmit={(event) => {event.preventDefault()}}>

            <div className="errorMessage" style={{opacity: hasError ? '100%' : '0%'}}>{error}</div><br />
            <div className="formDiv">
                <label htmlFor="nameLabel">NAME</label><br />
                <input type="text" onChange={NameChange}/><br />

                <label htmlFor="ageLabel">AGE</label>
                <br />
                <input type="number" onChange={AgeChange}/><br />

                <label htmlFor="emailLabel">E-MAIL</label><br />
                <input type="text" onChange={EmailChange}/><br />

                <button onClick={addItem} className={'buttonAdd'}>ADD</button> 
            </div>
        </form>

        <form className="formEdit" onSubmit={(event) => {event.preventDefault()}}>

            <div className="editErrorMessage" style={{opacity: hasEditError ? '100%' : '0%'}}>{editError}</div><br />
            <div className="formDiv">
                <label htmlFor="nameLabel">EDIT NAME</label><br />
                <input type="text" onChange={EditNameChange}/><br />

                <label htmlFor="ageLabel">EDIT AGE</label>
                <br />
                <input type="number" onChange={EditAgeChange}/><br />

                <label htmlFor="emailLabel">EDIT E-MAIL</label><br />
                <input type="text" onChange={EditEmailChange}/><br />

            </div>
        </form>



        <table>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>AGE</th>
                    <th>E-MAIL</th>
                    <th>ACTIONS</th>
                </tr>
            </thead>
            <tbody>
            {records.map(item => 
            <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>{item.email}</td>
                <td>
                <button className="deleteButton" onClick={() =>deleteItem(item.id)}>X</button>
                <button className="editButton" onClick={() =>editItem(item.id)}>Edit</button>
                </td>
            </tr>
            
            )}
        </tbody>
        </table>
            
        </>
    )
}

export default Records;