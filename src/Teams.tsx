import {Teams, TeamsProps} from "./interfaces";
import './Teams.css';
import React from "react";

function TeamsList(props:TeamsProps){
    return(

        <>

            <div ><input type={"text"} readOnly={true}/>{props.teams.map(items =><h2>Team Name: {items.name}<br /> Abbreviation: {items.abbr} <br /> Name: {items.members.name} <br /> Age: {items.members.age}<br /> Sex: {items.members.sex}<br /> Nickname:{items.members.nickname}</h2>)}</div>
        </>
    )
}

export const teamsList: Teams[] = [
    {
        abbr: 'ViS',
        name: 'Visuals',
        members: {
            name: 'Kala Majka',
            age: 12,
            nickname: 'xxxxxxxxx',
            sex: 'male'
        },
    },
    {
        abbr: 'Pog',
        name: 'Poggers Doggers',
        members: {
            name: 'Kala Majka',
            age: 12,
            nickname: 'xxxxxxxxx',
            sex: 'male'
        },
    },
]

export default TeamsList;