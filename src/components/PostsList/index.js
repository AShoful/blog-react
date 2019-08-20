import React from 'react'
import PostItem from '../PostItem'
import Loader from '../UI/Loader'
import classes from './PostsList.module.css'
import {connect} from 'react-redux'
import {fetchItems} from '../../store/actions/actionsPosts'



class PostsList extends React.Component {
  
  componentDidMount(){
    this.props.fetchItems()
  }

  render (){
    
    const {items,  loading} = this.props
    
    return (
      <div className = {classes.PostsList}>
      {loading && items.length !== 0 ? <Loader/>
        : items.map( item => (<PostItem key = {item._id} {...item}/>))}
      </div>
      )
    }

  }

  // function PostsList(props)  { 

  // const {items, loading, fetchItems} = props

  //   React.useEffect(() => {
  //    fetchItems()}, [])
   
  //   return (
  //   <div className = {classes.PostsList}>
  //      { loading && items.length !==0 ? <Loader />
  //         : items.map(item => (  
  //           <PostItem 
  //             key = {item._id}     
  //             {...item}
  //           />  ))
  //       }           
  //   </div>
  //   )
  // }


  function mapStateToProps(state) {
    return {
      items: state.posts.items,
      loading: state.posts.loading
    }
  }

  function mapDispatchToProps (dispatch){
    return{
      fetchItems: () => dispatch(fetchItems())
    }
  }






export default connect(mapStateToProps, mapDispatchToProps)(PostsList);