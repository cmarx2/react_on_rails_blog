import React, { Component } from 'react';
import axios from 'axios';
import Post from './Post'
import PostForm from './PostForm';

class Blog extends Component {
  state = { posts: [] }

  componentDidMount() {
    axios.get("/api/posts")
      .then( res => {
        this.setState({ posts: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  addPost = (post) => {
    // add the post to the backend
    axios.post('/api/posts', {post}) //postData are the parameters, title and body
      .then( res => {
        const { posts } = this.state
        this.setState({ posts: [...posts, res.data ]})
      })
      .catch( err => {
        console.log(err)
      })
    // add the post to the frontend or state
  }

  deletePost = (id) => {
    //delete in the db
    axios.delete(`/api/posts/${id}`)
    .then ( res => {
      // delete in the state
      const { posts } = this.state
      this.setState({ posts: posts.filter(p => p.id !== id) })
    })
    //delete in the state
  }

  editPost = (post) => {
    // update in db
    axios.put(`/api/posts/${post.id}`, { post }) //similar to create, need to pass in whole object, need the whole object in order to update it
      .then( res => {
          const posts = this.state.posts.map( p => {
            if (p.id === post.id) //it's the array with the updated value
              return res.data
            return p  
      })
      this.setState( { posts })
    })
      .catch( err => {
        console.log(err)
      })
    //update in the state
  }

  renderPost = () => {
    const { posts } = this.state
    return posts.map( post => <Post key={post.id} {...post } remove={this.deletePost} edit={this.editPost}/>) //passing in methods here because we want to edit/remove the post. Then pass it to the Post component
  }

  render() {
    return(
      <>
        <h1>Blog Page</h1>
        <PostForm add={this.addPost} />
        { this.renderPost() }
      </>
    )
  }
}

export default Blog;