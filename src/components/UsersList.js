import React, {useEffect, useState} from 'react';
import axios from 'axios'
import User from "./User";
import {SERVER_URL} from '../config'
import request from "graphql-request";


async function fetchUsers(useRest) {
    if (useRest) {
        return (await axios.get(`${SERVER_URL}/users`)).data;
    }
    const query = `
            {
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
            }`
    ;
    return (await request(
        `${SERVER_URL}/graphql`,
        query
    ));
}

export default function UsersList({useRest = false}) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const temp = fetchUsers(useRest);
        // console.log(temp);
        temp.then(users => setUsers(users));

    }, [useRest]);
    return (
        <>
            {
                users.map(user => <User user={user} userComments={user.comments}/>)
            }
        </>
    );
}
