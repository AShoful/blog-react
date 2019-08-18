import mongoose, { Schema } from 'mongoose';
import autopopulate from 'mongoose-autopopulate'

const PostSchema = new Schema(
  {
    title: String,
    text: String,
    imageUrl: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        autopopulate: true
    },
  },
  {
    timestamps: true,
  },
);

PostSchema.plugin(autopopulate)
const Post = mongoose.model('Post', PostSchema);

export default Post;
