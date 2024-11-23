import mongoose, { Schema } from "mongoose";

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },

  content: {
    type: String,
    required: true,
  },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },

  image: {
    type: String, 
    required: false, 
  },
  
}, { timestamps: true });


const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export default Blog;