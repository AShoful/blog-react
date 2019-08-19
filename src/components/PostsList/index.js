import React, { useState, useEffect }  from 'react'
import PostItem from '../PostItem'
import Loader from '../UI/Loader'
import classes from './PostsList.module.css'
import axios from '../../axios/'


function PostsList()  { 

  const [items, setItems] = useState(null)
  const [error, setError] = useState('');

  // state = {
  //   items : null
  // }

  // componentDidMount(){
  //   axios.get('/posts')
  //     .then((res) => this.setState({items: res.data}))
  //     .catch(err => console.log(err);)
  // }

  // render (){
  //   const {items} = this.state

    useEffect(() => {
      let isSubscribed = true
      axios.get('/posts')
      .then(res => isSubscribed ? setItems(res.data) : null)
      .catch(err => isSubscribed ? setError(err) : null)

      return () => isSubscribed = false;
        }, [])

    
    return (
    <div className = {classes.PostsList}>
      {!error && !items && <Loader />} ;
      {!error && items &&  items.map( item => (  
            <PostItem 
              key = {item._id}     
              {...item}
            />  ))};           
    </div>
    )
    // }
  }

export default PostsList;