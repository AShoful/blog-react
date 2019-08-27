import React from 'react'
import PostsList from '../../components/PostsList/'
import {connect} from 'react-redux'
import {fetchItems, fetchRemoveItem} from '../../store/actions/actionsPosts'



class PostsListContainer extends React.Component {
  
  componentDidMount(){
    this.props.fetchItems(this.props.page)
  }

  render (){
    const {items,  loading, removeItem, isAuth} = this.props
    return  <PostsList 
      	items = {items}
        removeItem = {removeItem}
      	loading= {loading}
        isAuth = {isAuth}/>
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
      loading: state.posts.loading,
      isAuth: state.auth.token,
      page: state.posts.page
    }
  }

  function mapDispatchToProps (dispatch){
    return{
      fetchItems: () => dispatch(fetchItems()),
      removeItem: (id) => dispatch(fetchRemoveItem(id))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(PostsListContainer);