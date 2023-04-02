type User = {
    name: string
    age: number
    id?: number
}

interface User1 {
    id: number,
    name: string,
    age: number
}

interface Admin extends User {
    com: string
}

let user: Admin = {
    id: 20,
    name: "moustafa",
    age: 27,
    com: "asd"
}

let user1: User1 = {
    id: 21,
    name: "asd",
    age: 11
}