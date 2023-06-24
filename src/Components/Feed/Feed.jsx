import React, {useState, useEffect} from 'react'
import{collection, onSnapshot} from'firebase/firestore';
import { db } from '../../firebase';

import './feed.scss'
import Share from '../share/Share'
import Stories from '../stories/Stories'
import Post from '../posts/Post'

const Feed = () => {
  const[posts, setPosts]= useState([]);

  useEffect(()=>{
    const onSubmit=onSnapshot(collection(db,"posts"),(snapshot)=>{
      setPosts(snapshot.docs.map((doc)=>({id:doc.id, data:doc.data()})))
    })
    return()=>{
      onSubmit();
    }
  },[])
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Stories />
        <Share />
        {posts.sort((a,b)=>b.data.timestamp - a.data.timestamp)
        .map((p)=>(
          <Post key={p.id} post={p}/>
        ))}

        
      </div>
    </div>
  )
}

export default Feed
