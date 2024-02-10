import { Link } from 'react-router-dom'
import './post.scss'
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useState } from 'react';
import Comment from '../comment/Comment';

function Post({post}) {
    const [commentOpen, setCommentOpen] = useState(false);
    
    //temporary
    const like = false;
  return (
    <div className='post'>
      <div className="container">
        <div className="user">
            <div className="userinfo">
                <img src={post.profilePic} alt="" />
                <div className="details">
                <Link to={`/profile/${post.userId}`} style={{textDecoration: "none", color: "inherit"}}>
                    <span className="name">{post.name}</span>
                </Link>
                <span className="date">
                    5 mins ago
                </span>
                </div>
            </div>
            {/* icon */}
            <MoreHorizIcon />
        </div>
        <div className="context">
            <p>{post.desc}</p>
            {console.log(JSON.stringify(post.img))}
            {console.log("now")}
            <img src={post.img} alt="" />
        </div>
        <div className="info">
            <div className="item">
                {like? <FavoriteOutlinedIcon />: <FavoriteBorderOutlinedIcon />}
                12 likes
            </div>
            <div className="item" onClick={()=>setCommentOpen((commentOpen)=>!commentOpen)}>
                <TextsmsOutlinedIcon />
                12 comments
            </div>
            <div className="item">
                <ShareOutlinedIcon />
                share
            </div>
        </div>
        {commentOpen && <Comment />}
      </div>
    </div>
  )
}

export default Post
