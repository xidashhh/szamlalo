export interface Members{
    name: string
    age: number
    nickname: string
    sex: string
}

export interface Teams {
    abbr: string
    name: string
    members: Members

}

export interface TeamsProps{
    teams: Teams[]
}

export interface Todo {
    userId: number
    id: number;
    title:string;
    completed: boolean
}