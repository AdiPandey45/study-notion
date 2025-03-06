import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const NavBar = ({isLoggedIn,setIsLoggedIn}) => {


    const clickHandler=()=>{
        setIsLoggedIn(false);
       toast.success("Logged Out");
    }   
    
    return (
        <div className='flex justify-evenly'>

            <Link to="/">
                <img src={logo} alt="logo" width={160} height={32} loading='lazy' />
            </Link>

            <ul className='flex gap-3'>
                <li>
                    <Link to="/">Home</Link>

                </li>
                <li>
                    <Link to="/">About</Link>

                </li>
                <li>
                    <Link to="/">Contact</Link>

                </li>

            </ul>

            <div className='flex ml-5 mr-3 gap-3'>                

                {!isLoggedIn &&
                    <Link to="/login">
                        <button>
                            Login
                        </button>
                    </Link>
                }

                {!isLoggedIn &&
                    <Link to="/signup">
                        <button>
                            Signup
                        </button>
                    </Link>
                }

                {isLoggedIn &&
                    <Link to="/">
                        <button onClick={clickHandler}>

                            LogOut
                        </button>
                    </Link>
                }

{isLoggedIn &&
                    <Link to="/dashboard">
                        <button>
                            DashBoard
                        </button>
                    </Link>
                }
            </div>
        </div>

    )
}

export default NavBar;