import React, {useEffect, useState} from 'react';
import Card, {CardVariant} from "./components/Card";
import UserList from "./components/UserList";
import {IUser} from "./types/types";
import axios from "axios";

function App() {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetchUsers()
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    // const users: IUser[] = [
    //     {id: 1, name: 'Ulbi tv', email: 'asf@mail.ru', address: {city: 'Moscow', street: 'Lenina', zipcode: '123'}},
    //     {id: 2, name: 'Timur', email: 'asf@mail.ru', address: {city: 'Kaliningrad', street: 'Pushkina', zipcode: '123'}}
    // ]
    return (
        <div>
            <Card
                width={'200px'}
                height={'200px'}
                variant={CardVariant.outlined}
                // onClick={(num) => console.log('click', num)}
            >
            </Card>
            <UserList users={users}/>
        </div>
    );
}

export default App;
