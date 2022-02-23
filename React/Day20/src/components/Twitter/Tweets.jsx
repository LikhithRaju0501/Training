import React, { useState } from 'react';
import Tweet from './Tweet';
 
const Tweets = () => {
    const [tweets,setTweets]=useState([
        {
            id:1,
            name:"Likhith Raju",
            twitterhandle:"@lRaju",
            tweet:"Over 250k Starlink user terminals",
            likes:0
        },{
            id:2,
            name:"Athish Venkatesh",
            twitterhandle:"@athishaves",
            tweet:"Exciting time in commercial spaceflight.Polaris Program will undertake a series of tech demo missions culminating in first flight of Starship. Thankful to team @SpaceX, Polaris Directors & my amazing crew @KiddPoteet @gillis_sarahe, Anna Menon",
            likes:0
        },
        {
            id:3,
            name:"Vedavyas S Joshi",
            twitterhandle:"@vJoshi",
            tweet:"The duty of a leader is to serve their people, not for the people to serve them",
            likes:0
        },
        {
            id:4,
            name:"Elon Musk",
            twitterhandle:"@elon_musk",
            tweet:"Raptor 2 generates more than 230 tons of thrust at sea level, up from Raptor 1’s 185 tons",
            likes:0
        }
 
    ]);
    const handleLike=(id)=>{
     const i = tweets.findIndex(item=>item.id===id)
     setTweets([...tweets],tweets[i].likes+=1)
    }
    const handleDislike=(id)=>{
     const i = tweets.findIndex(item=>item.id===id)
     if(tweets[i].likes>0){
        setTweets([...tweets],tweets[i].likes-=1)
     }
    }

  return (
    <div >
     {tweets.map((item)=>{
         return(
             <Tweet tweet={item} handleLike={handleLike} handleDislike={handleDislike} />
         )
     })}
    </div>
  )
}
 
export default Tweets