import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Comment from "./Comment";
import {SERVER_URL} from "../config";

const fetchComments = async (id) => {
    return (await axios.get(`${SERVER_URL}/users/${id}/comments`)).data;
};


export default ({user, userComments = []}) => {
    const {_id, name, email, imageUrl} = user;
    const [comments, setComments] = useState(userComments);
    if (userComments.length === 0) {
        useEffect(() => {
            fetchComments(_id)
                .then(comments => setComments(comments));
        }, [_id]);
    }
    return (
        <div className="col-xs-12 col-sm-6 col-md-4">
            <div className="image-flip" onTouchStart="this.classList.toggle('hover');">
                <div className="mainflip">
                    <div className="frontside">
                        <div className="card">
                            <div className="card-body text-center">
                                <p>
                                    <img
                                        className=" img-fluid"
                                        src={imageUrl}
                                        alt={name}
                                        title={name}
                                    />
                                </p>
                                <h4 className="card-title">
                                    {name}
                                </h4>
                                <p className="card-text">
                                    {email}
                                </p>
                                <a href="#" className="btn btn-primary btn-sm">
                                    <i className="fa fa-plus">
                                    </i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="backside">
                        <div className="card">
                            <div className="card-body text-center mt-4">
                                <h4 className="card-title" style={{marginTop: -25}}>
                                    <u>
                                        Comments
                                    </u>
                                </h4>
                                <p className="card-text">
                                    {
                                        comments.map((comment, index) =>
                                            <Comment
                                                key={index}
                                                user={user}
                                                comment={comment}/>
                                        )
                                    }
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
