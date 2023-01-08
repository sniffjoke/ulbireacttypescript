import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UsersPage from "./components/UsersPage";
import TodosPage from "./components/TodosPage";
import { Link } from 'react-router-dom';
import UserItemPage from "./components/UserItemPage";
import TodoItemPage from "./components/TodoItemPage";

function App() {

    // const users: IUser[] = [
    //     {id: 1, name: 'Ulbi tv', email: 'asf@mail.ru', address: {city: 'Moscow', street: 'Lenina', zipcode: '123'}},
    //     {id: 2, name: 'Timur', email: 'asf@mail.ru', address: {city: 'Kaliningrad', street: 'Pushkina', zipcode: '123'}}
    // ]
    return (
        <BrowserRouter>
            <div>
                <Link to={'/users'}>
                    Пользователи
                </Link>
                <Link to={'/todos'}>
                    Список дел
                </Link>
            </div>
            <Routes>
                <Route path={'/users'} element={<UsersPage />} />
                <Route path={'/todos'} element={<TodosPage />} />
                <Route path={'/users/:id'} element={<UserItemPage />} />
                <Route path={'/todos/:id'} element={<TodoItemPage />} />
            </Routes>
        </BrowserRouter>
        // <div>
        //     <EventsExample />
        //     <Card
        //         width={'200px'}
        //         height={'200px'}
        //         variant={CardVariant.outlined}
        //         // onClick={(num) => console.log('click', num)}
        //     >
        //     </Card>
        //     {/*<UserList users={users}/>*/}
        // </div>
    );
}

export default App;
