import './profile.scss'
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from '../../components/posts/Posts';


function Profile() {
  return (
    <div className='profile'>
        <div className="images">
            <img className="cover" src="../src/assets/group1.jpg" alt="" />
            <img className="profile" src="../src/assets/user.jpg" alt="" />
        </div>
        <div className="profilecontainer">
            <div className="profileinfo">
                <div className="left">
                <a href="http://facebook.com">
              <FacebookTwoToneIcon />
            </a>
            <a href="http://instagram.com">
              <InstagramIcon  />
            </a>
            <a href="http://twitter.com">
              <TwitterIcon/>
            </a>
            <a href="http://linkedin.com">
              <LinkedInIcon  />
            </a>
            <a href="https://www.pinterest.com/">
              <PinterestIcon  />
            </a>
                </div>
                <div className="center">
                <span>Jane Doe</span>
            <div className="info">
              <div className="item">
                <PlaceIcon />
                <span>USA</span>
              </div>
              <div className="item">
                <LanguageIcon />
                <span>lama.dev</span>
              </div>
            </div>
            <button>follow</button>
                </div>
                <div className="right">
                <EmailOutlinedIcon />
            <MoreVertIcon />
                </div>

            </div>
            <Posts />
        </div>
    </div>
  )
}

export default Profile
