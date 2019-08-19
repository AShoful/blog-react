import React from 'react'
import PostItem from '../PostItem'
import Loader from '../UI/Loader'
import classes from './PostsList.module.css'
import axios from 'axios'


class PostsList extends React.Component { 

  state = {
    items : null
  }
  componentDidMount(){
    axios.get('/items.json')
    .then((res) => this.setState({items: res.data}))
  }

  render (){
    const {items} = this.state
    return (
    <div className = {classes.PostsList}>
      {!items ? 
          <Loader />: 
         items.map( item => (  
            <PostItem key = {item._id}     
            {...item}
          />  ))
      } 
    </div>)
    }
  }

export default PostsList;