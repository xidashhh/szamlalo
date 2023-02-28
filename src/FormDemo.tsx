import React, { useState } from "react";

export function NameForm() {
    const [name, setName] = useState('')

    const handleSubmit = (event: React.SyntheticEvent) =>{
        alert('A name was submitted: ' + name);
        event.preventDefault();
    };

    const handleChange = (event: React.SyntheticEvent<HTMLInputElement>) =>{

        const characters = Array.from(event.currentTarget.value);
        const filtered = characters.filter(char => char.toUpperCase() === char)
        const filteredString = filtered.join('');

        setName(filteredString);
    }

    return ( 
        <form onSubmit={handleSubmit} >

            Free text:<input type="text" />
            <br />
            Name:<input type="text" value={name} onChange={handleChange} maxLength={150}/>
            <div>
                {150-name.length} karakter van hátra.
            </div>
            <input type="submit"  value="Submit" />
        </form> 
    )
}