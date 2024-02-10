import './login.scss'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/authContext'

function Login() {

    const {login} = useContext(AuthContext)

    const handleLogin = ()=>{
        console.log("worked")

        login()
    }

  return (
    <div className="login">
      <div className="card">
        <div className="left">
            <h1>Hello Kdrama Lovers</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod beatae aperiam sint! 
            </p>
            <span>Don't have an account?</span>
            <Link to='/register'>
            <button>Register</button>
            </Link>
        </div>
        <div className="right">
            <h1>Login</h1>
            <form action="">
                <input type="text" placeholder="username"/>
                <input type="password" name="pw" id="pw" placeholder="password" />
                <button onClick = {()=> handleLogin()}>Log in</button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login

