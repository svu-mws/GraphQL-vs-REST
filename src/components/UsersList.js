import React, {useState, useEffect} from 'react';
import axios from 'axios'
import User from "./User";
import {SERVER_URL} from '../config'

export default function UsersList() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function fetchUsers() {
            const users = await axios.get(`${SERVER_URL}/users`);
            setUsers(users);
        }

        fetchUsers();
    }, [users]);
    return (
        <>
            {
                users.map(user => <User user={user}/>)
            }
        </>
    );
}