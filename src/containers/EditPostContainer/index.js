import React from 'react'
import {connect} from 'react-redux'
import AddPost from '../../components/AddPost/'
import {fetchItem} from '../../store/actions/actionsPosts'
import Loader from '../../components/UI/Loader/'
import postApi from '../../api/'

class EditPostContainer extends React.Component {

	componentDidMount(){
		const {post, postId, fetchItem} = this.props;
		if (!post){
		fetchItem(postId)}
	}

	handleSubmit = async (data, id) => {
		const res = await postApi.patch(data, id)
		try {
			window.alert('Изменеия сохранены в базе')
			console.log(res.data)
		} 
		catch(e){
			console.log(e)
			window.alert('База данных недоступна, попробуйте позже')
		}
	}
	
	render (){
		const {history:{goBack}, post, postId} = this.props
		return  (post ? 
			 <AddPost 
			 	changePost = {post}
			 	postId = {postId}
			 	goBack = {goBack}
			 	handleSubmit = {this.handleSubmit} /> : 
			 <Loader/>)
	}

}

const mapStateToProps = ({ posts }, { match }) => ({
  post: posts.items && posts.items.filter(post => post._id === match.params.id)[0],
  postId: match.params.id,
});

const mapDispatchToProps = (dispatch) =>({
	fetchItem: (id) => dispatch(fetchItem(id)) 
})

export default connect(mapStateToProps, mapDispatchToProps)(EditPostContainer);
