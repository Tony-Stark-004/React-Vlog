import './Post.css'
import PostImage from '../../Assests/PostImage.jpg'

const Post = () => {
  return (
    <>
      <div className="post">
        <img className="postImg" src={PostImage} alt="Post-Img" />

        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">Lorem ipsum dolor sit amet.</span>
          <span className="postDate">1 hour ago</span>
        </div>

        <p className='postDescription'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ab nisi iste eveniet nihil necessitatibus repellendus? Similique, ratione dolores dolore cum rem quos incidunt quod! Voluptate modi dignissimos laboriosam neque! Eligendi, dolores consequatur! Eos eaque ullam vel velit quod reprehenderit ipsa ratione consectetur, natus id nostrum officia distinctio? Accusamus, dignissimos.</p>
      </div>
    </>
  )
}

export default Post