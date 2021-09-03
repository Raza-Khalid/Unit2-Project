import React, { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'
import PostCard from '../components/PostCard'
import axios from 'axios'


const AllPost = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getPosts()
  }, [])

  const getPosts = async () => {
    let res = await axios.get(`${BASE_URL}/posts`)
    console.log('data', res.data)
    setPosts(res.data.posts)
  }
  const deletePost = async (id) => {
    await axios.delete(`${BASE_URL}/posts/${id}`)
    setPosts(posts.filter((post)=>post._id !==id))
  }

  console.log(posts)
  return (
    <div>
      <h1>Posts</h1>
      <section className="container-grid">
        {posts.map((post) => (
          <div>
            <PostCard key={posts._id} post={post} deletePost={deletePost}/>
          </div>
        ))}
      </section>
    </div>
  )
}

export default AllPost
