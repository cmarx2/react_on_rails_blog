import React, { Component } from 'react';
import { Header, Segment, Button, Icon } from 'semantic-ui-react';
import PostForm from './PostForm';

class Post extends Component {
  state = { editing: false }

  toggleEdit = () => this.setState({ editing: !this.state.editing })

  render() {
    const { title, body, remove, id, edit } = this.props
    const { editing } = this.state 
    return(
      <Segment>   
        { editing ? 
            <PostForm {...this.props} close={this.toggleEdit} />
          :
          <div>
            <Header>Post: { title }</Header>
            <p>
              { body }
            </p>
          </div>
        }
        <Button icon color="yellow" onClick={this.toggleEdit}>
          <Icon name='pencil' />
        </Button>
        <Button icon color="red" onClick={() => remove(id)}>
          <Icon name='trash' />
        </Button>
      </Segment>
    )
  }
}

export default Post;