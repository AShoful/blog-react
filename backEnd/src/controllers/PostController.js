import PostModel from '../models/Post';


class PostController {

  async index(req, res) {
    try{
    const page = req.query.page || 1;
    const result = {}
    result.limit = 5
    result.totalPosts = await PostModel.countDocuments({}) 
    result.posts = await PostModel.find()
                  .skip(( page-1 )*result.limit)
                  .limit(result.limit)
                  .sort({ createdAt: -1 })
    res.json(result) 
    }catch (err) {
     err => res.send(err)
    }
  }
 
  async create(req, res) {
    const data = req.body;
    const post = new PostModel({
      title: data.title,
      text: data.text,
      imageUrl: data.imageUrl,
      owner: data.owner || '5d6d387e8e6ca524f08f1628'
    });

    await post.save()
    try{
      res.json({ status: 'ok' })
    } catch (err) {
      res.send(err)
    }
  }

  async read(req, res) {
    const post = await PostModel.findOne({ _id: req.params.id })
    try {
      if (!post) {res.send({ error: 'not found' })
    } else {res.json(post)}
         }
    catch (err) {err => res.send(err)}
  }
 
  async update(req, res) {
    console.log(req.body);
    await PostModel.findByIdAndUpdate(req.params.id, { $set: req.body })
    try {
      res.json({ status: 'updated' })
    } catch(err) {
      res.send(err)
    }     
  }

  async delete(req, res) {
    const post = await PostModel.findOneAndDelete({id: req.params.id})
    try {
      if (post) {
        res.json({ status: 'deleted' });
      } else {
        res.json({ status: 'error' });
      }
    } catch (err) {
      res.send(err)
    }
  }
}

export default PostController;
