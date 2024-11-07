import React, { useEffect, useState } from 'react'
import "./Blog.css"
import { blogDaw, blogMixing, blogVox } from "../../assets"
import { urlFor, client } from '../../client'

const Blog = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "posts"]';
    client.fetch(query).then((data) => {
      setPosts(data);
    })
  }, [])
  return (
    <section id='blog' className='bg-pink-color'>
      <div className="wrapper">
        <h2 className='light'>Latest Posts</h2>
        <div className="content-container">
          {
            posts.map((post) => (
              <div className="post">
                <div className="tag">{post.label}</div>
                <a href="#">
                  <img src={urlFor(post.thumbnail)} alt="" />
                </a>
                <a href="#">
                  <h3 className="post-title">{post.title}</h3>
                </a>
              </div>

            ))
          }
          <div className="post">
            <div className="tag">Mixing</div>
            <a href="#">
              <img src={blogMixing} alt="" />
            </a>
            <a href="#">
              <h3 className="post-title">How To Mix Guitars Effectively</h3>

            </a>
          </div>
          <div className="post">
            <div className="tag">Vox</div>
            <a href="#">
              <img src={blogVox} alt="" />
            </a>
            <a href="#">
              <h3 className="post-title">The Real Power of Harmonies in Music Production</h3>
            </a>
          </div>
          <div className="btn-container">
            <a href="" className='all-posts-btn'>All Posts</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog