import React, { useEffect, useState } from 'react'

function Posts() {
    
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/posts')
        .then(data => {
            return data.json();
        })
        .then(data => {
            setPosts(data);
        })
        .catch(err => {
            console.log(err.message);
        })
    }, []);
  return (
    posts.length > 0 ? (
        <div className='d-flex flex-column align-items-center'>
            {posts.map(post => (
                <div key={post.id}>
                    <div className='d-flex'>
                        <img src={post.user.profileImage} alt="" className='dp'/>
                        <h6 className='mt-2'>{post.user.username}</h6>
                    </div>
                    <div>
                        <img src={post.image} alt="" className='post' />
                    </div>
                    <div className='mt-1'>
                        <i className="bi bi-heart"></i>
                        <i className="bi bi-chat"></i>
                        <i className="bi bi-send"></i>
                    </div>
                    <small><b>{post.likes.count} likes</b></small>
                    <p>{post.caption}</p>
                </div>
                
                
            ))}
        </div>
        )
        : 
        (
        <div>
            Loading
        </div>
        )
 
  )
}

export default Posts
