import React, { useState } from 'react'
import './Tweet.css' 
const Tweet = ({tweet, handleLike, handleDislike}) => {
  return (
    <div className='whole'>
        <div className="section-one">
        <div className="mainName"><h6>{tweet.name}</h6></div>
            <div className="twitterHandle"><p>{tweet.twitterhandle}</p></div> 
        </div>
        <div className="content">{tweet.tweet}</div>
        <div className="action">
            <button onClick={()=>handleLike(tweet.id)}><i className="fa-solid fa-thumbs-up"></i></button>
            <button onClick={()=>handleDislike(tweet.id)}><i className="fas fa-thumbs-down"></i></button>
            <h5><span className="badge bg-secondary">{tweet.likes}</span></h5>
        </div>
    </div>
  )
}
 
export default Tweet