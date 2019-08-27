import PostModel from '../models/Post';


class PostController {

  index(req, res) {

    const page = req.query.page || 1;
    const result = {}
    result.limit = 5
    PostModel.countDocuments({}) 
      .then( totalPosts => result.totalPosts = totalPosts)
    PostModel.find()
        .skip(( page-1 )*result.limit)
        .limit(result.limit)
        .sort({ createdAt: -1 })
        .then((posts) => {
          result.posts = posts
          res.json(result) })
        .catch(err => res.send(err))
  }

  
  create(req, res) {
    const data = req.body;

    const post = new PostModel({
      title: data.title,
      text: data.text,
      imageUrl: data.imageUrl,
      owner: data.owner
    });

    post.save()
    .then(() => {res.json({ status: 'ok' })})
    .catch(err => res.send(err))
  }

  read(req, res) {
    PostModel.findOne({ _id: req.params.id })
    .then(post => {
      if (!post) {res.send({ error: 'not found' });
      } else {res.json(post);
      }
    })
    .catch(err => res.send(err))
  }
    

  update(req, res) {
    console.log(req.body);
    PostModel.findByIdAndUpdate(req.params.id, { $set: req.body }, err => {
      if (err) {res.send(err);
      }
      res.json({ status: 'updated' });
    });
  }

  delete(req, res) {
    PostModel.deleteOne({
      _id: req.params.id,
    })
    .then(post => {
      if (post) {
        res.json({ status: 'deleted' });
      } else {
        res.json({ status: 'error' });
      }
    })
    .catch(err => res.send(err))
  }

  indexUser(req, res) {
    
    PostModel.find({owner: req.params.id})
    .sort({ createdAt: 1 })
    .then((posts) => {
       res.json(posts) })
    .catch(err => {
      res.send(err)})
  }
}

export default PostController;
