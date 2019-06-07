import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Comment from "./Comment";
import {SERVER_URL} from "../config";

export default ({user, userComments}) => {
    const {id, name, email, imageUrl} = user;
    const [comments, setComments] = useState(userComments);
    if (userComments === null) {
        useEffect(() => {
            const fetchComments = async () => {
                const comments = await axios.get(`${SERVER_URL}/users/${id}/comments`);
                setComments(comments);
            };
            fetchComments();
        }, [id]);
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="card card-inverse" style={
                        {
                            backgroundColor: "#333",
                            borderColor: "#333"
                        }
                    }>
                        <div className="card-block">
                            <div className="row">
                                <div className="col-md-8 col-sm-8">
                                    <h2 className="card-title">Name: {name}</h2>
                                    <p className="card-text"><strong>Email: </strong> {email}</p>
                                </div>
                                <div className="col-md-4 col-sm-4 text-center">
                                    <img className="btn-md"
                                         src={imageUrl}
                                         alt={name}
                                         style={{borderRadius: "50%"}}/>
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-primary"
                                type="button"
                                data-toggle="collapse"
                                data-target="#collapseExample"
                                aria-expanded="false"
                                aria-controls="collapseExample">
                            Comments
                        </button>
                        <div className="collapse"
                             id="collapseExample">
                            <div className="card card-body">
                                {
                                    comments.map(comment => <Comment user={user} comment={comment}/>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}