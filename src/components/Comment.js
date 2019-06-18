import React from 'react'

export default ({user, comment}) => {
    const {name: userName, imageUrl} = user;
    const {text} = comment;
    return (
        <div className="row" style={{marginTop: 10}}>
            <div className="col-md-4">
                <img
                    alt={userName}
                    title={userName}
                    src={imageUrl}
                    className="img img-rounded img-fluid img-thumbnail comment-image"/>
            </div>
            <div className="col-md-8">
                <p>
                    <a className="float-left" href="#">
                        <strong>
                            {userName}
                        </strong>
                    </a>
                </p>
                <div className="clearfix">
                </div>
                <p>
                    {text}
                </p>
            </div>
        </div>
    );
}
