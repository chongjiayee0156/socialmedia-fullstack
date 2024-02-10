import './register.scss'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='register'>
        <div className="card">
            <div className="left">
                <h1>Register</h1>
                <form action="">
                    <input type="text" name="" id="" placeholder='username'/>
                    <input type="email" name="" id="" placeholder='email'/>
                    <input type="password" name="" id="" placeholder='password'/>
                    <input type="text" name="" id="" placeholder='name'/>
                    <button>Register</button>
                </form>
            </div>
            <div className="right">
                <h1>Kdrama Social</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, soluta magnam!</p>
                <span>Do you already have an account? </span>

                <Link to="/login">
                <button>Log in</button>

                    </Link>
            </div>
        </div>
      
    </div>
  )
}

export default Register
