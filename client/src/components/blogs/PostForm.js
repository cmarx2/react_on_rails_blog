import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';

class PostForm extends Component {
  state ={ title: '', body: '' }

  //checking to see if it exists so we can prepopulate the state
  componentDidMount() {
    
    if (this.props.id)
      this.setState({ title: this.props.title, body: this.props.body })
  }


  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.id) {
      // edit post
      const { id, title, body, created_at, updated_at, close } = this.props
      const post = { id, title, body, created_at, updated_at }
      this.props.edit(post)
      //callback function
      this.props.close()
    } else {
    // add database state inside of blog
    this.props.add(this.state)
    }
    //clear out the form
    this.setState({ title: '', body: ''})
  }

  render() {
    const { title, body } = this.state
    return(
      <>
      <h1>Form</h1>
      <Form onSubmit={ this.handleSubmit }>
        <Form.Input
          required
          label="Title"
          name='title'
          value={title} 
          onChange={this.handleChange}  
          />
        <Form.Input
          required
          label="Body"
          name='body'
          value={body} 
          onChange={this.handleChange}  
          />
        <Form.Button>Submit</Form.Button>
      </Form>
      </>
    )
  }
}

export default PostForm;