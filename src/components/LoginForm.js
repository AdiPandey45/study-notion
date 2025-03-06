import React from 'react'
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';


const LoginForm = ({setIsLoggedIn}) => {

    const navigate=useNavigate();

    const [formData, setFormData] = useState({ email: "", password: "" });
    const [showpass, setshowpass] = useState(false);

    const ClickHandler = () => {
        setshowpass(!showpass);
    }


    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const submitHandler = (event) => {
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");

    }

  

    return (
        <form onSubmit={submitHandler}>
            <label>
                <p>
                    Email Address<sup>*</sup>

                </p>
                <input required type='email' name='email' value={formData.email}
                    placeholder='Enter email id' onChange={changeHandler} />

                <input required type={showpass ? 'text' : 'password'} name='password' value={formData.password}
                    placeholder='Enter password' onChange={changeHandler} />

                <span onClick={ClickHandler}>
                    {showpass ? (<AiOutlineEye />) : (<AiOutlineEyeInvisible />)}
                </span>

                <Link to="#">
                    <p>
                        Forgot Password
                    </p>
                </Link>



            </label>
       
     
       <button>
                Sign In
            </button>
       
        </form>
    )
}

export default LoginForm;