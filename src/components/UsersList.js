import React, {useState, useEffect} from 'react';
import axios from 'axios'
import User from "./User";
import {SERVER_URL} from '../config'
import request from "graphql-request";

async function fetchUsers(useRest = true) {
    if (useRest)
        return await axios.get(`${SERVER_URL}/users`);
    const query = `{
                     users {
                            id,
                            name,
                            imageUrl,
                            comments {
                                text,
                                user {
                                    name,
                                    imageUrl
                                }
                            }
                        }
    }`;
    return await request(
        `${SERVER_URL}/graphql`,
        query
    );
}

export default function UsersList({useRest = true}) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        setUsers(fetchUsers(useRest));
    }, [useRest, users]);
    return (
        <>
            {
                users.map(user => <User user={user} userComments={user.comments}/>)
            }
        </>
    );
}