import React from 'react'
import PostsList from '../../components/PostsList/'
import {connect} from 'react-redux'
import {fetchItems} from '../../store/actions/actionsPosts'



class PostsListContainer extends React.Component {
  
  componentDidMount(){
    this.props.fetchItems()
  }

  render (){
    const {items,  loading} = this.props
    return  <PostsList 
      	items = {items}
      	loading= {loading}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(PostsListContainer);