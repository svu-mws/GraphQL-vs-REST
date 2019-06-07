import React from 'react'

export default ({user, comment}) => {
    const {name: userName, imageUrl} = user;
    const {text} = comment;
    return (
        <div className="row">
            <div className="col-md-2">
                <img
                    alt={userName}
                    title={userName}
                    src={imageUrl}
                    className="img img-rounded img-fluid"/>
            </div>
            <div className="col-md-10">
                <p>
                    <a className="float-left" href="https://maniruzzaman-akash.blogspot.com/p/contact.html">
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