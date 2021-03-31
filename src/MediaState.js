import React from 'react'




function MediaState(props) {
    return (
        <div>
            Hello from Media Card
            <h1>{props.title}</h1>
            <p>{props.body}</p>
            <img src={props.imgURL}/>
        </div>
    )
}



export default MediaState
