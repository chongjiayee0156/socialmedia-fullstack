import Post from '../post/Post';
import './posts.scss'

  //TEMPORARY
  const posts = [
    {
      id: 1,
      name: "John Doe",
      userId: 1,
      profilePic:
        "src/assets/selfie4.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      img: "src/assets/secondpost.jpg"    },
    {
      id: 2,
      name: "Jane Doe",
      userId: 2,
      profilePic:
      "src/assets/selfie.png",

      desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
      img: "src/assets/group1.jpg",
    
    },
    {
        id: 3,
        name: "Jane Doe",
        userId: 3,
        profilePic:
          "src/assets/selfie3.jpg",
        desc: "Tenetur iste voluptates dolorem rem commodi voluptate pariatur, voluptatum, laboriosam consequatur enim nostrum cumque! Maiores a nam non adipisci minima modi tempore.",
        img: "src/assets/selfie2.jpg"
          },
  ];

function Posts() {
  return (
    <div className='posts'>
        {
            posts.map(post=>(
                    <Post post={post} id={post.id}/>
            ))
        }
      
    </div>
  )
}

export default Posts
