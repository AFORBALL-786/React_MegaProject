import React, {useState, useEffect} from 'react'
import {Container, PostCard} from '../components/index'
import service from '../appwrite/configure'

const AllPost = () => {
    const [post, setPost] = useState([])

    service.getPosts([]).then(posts => {
            if(posts){
                setPost(posts.documents);
            }
        })
    
    useEffect(() => {}, [])

  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {post.map(post => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard post={post}/>
                    </div>
                ))}
            </div>
        </Container>
    </div>
  )
}

export default AllPost