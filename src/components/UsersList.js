import React, {useEffect, useState} from 'react';
import axios from 'axios'
import User from "./User";
import {SERVER_URL} from '../config'
import request from "graphql-request";


async function fetchUsers(useRest) {
    if (useRest)
        return (await axios.get(`${SERVER_URL}/users`)).data;

    const query = `
            {
                     users {
                            id,
                            name,
                            email,
                            imageUrl,
                            comments {
                                text,
                                user {
                                    name,
                                    imageUrl
                                }
                            }
                        }
            }`
    ;
    return (await request(
        `${SERVER_URL}/graphql`,
        query
    )).users;
}

export default function UsersList({useRest = true}) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const temp = fetchUsers(useRest);
        temp.then(users => setUsers(users));

    }, [useRest]);
    return (
        <div className="container">
            <h5 className="section-title h1">
                Users
            </h5>
            <br/>
            <div className="row">
                {
                    users.map((user, index) => <User key={index} user={user} userComments={user.comments}/>)
                }
            </div>
        </div>
    );
}
