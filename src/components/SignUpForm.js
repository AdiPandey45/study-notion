import React, { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const SignUpForm = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({ firstname: '', lastname: '', email: '', createpassword: '', confirmpassword: '' });
    const [showpass1, setshowpass1] = useState(false);
    const [showpass2, setshowpass2] = useState(false);
    const navigate = useNavigate();

    const toggleShowPass1 = () => setshowpass1(!showpass1);
    const toggleShowPass2 = () => setshowpass2(!showpass2);

    const changeHandler = (event) => {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (formData.createpassword !== formData.confirmpassword) {
            toast.error("Password Mismatch");
            return; 
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        navigate("/dashboard");
    };

    return (
        <div>
            <div>
                <button>Student</button>
                <button>Instructor</button>
            </div>

            <form onSubmit={submitHandler}>
                <div>
                    <label>
                        <p>First Name<sup>*</sup></p>
                        <input required type='text' name='firstname' onChange={changeHandler}
                            placeholder='Enter First Name'
                            value={formData.firstname} />
                    </label>
                    <label>
                        <p>Last Name<sup>*</sup></p>
                        <input required type='text' name='lastname' onChange={changeHandler}
                            placeholder='Enter Last Name'
                            value={formData.lastname} />
                    </label>
                </div>

                <label>
                    <p>Email Address<sup>*</sup></p>
                    <input required type='email' name='email' onChange={changeHandler}
                        placeholder='Enter Email Address'
                        value={formData.email} />
                </label>

                <div>
                    <label>
                        <p>Create Password<sup>*</sup></p>
                        <input required type={showpass1 ? 'text' : 'password'} name='createpassword' onChange={changeHandler}
                            placeholder='Enter Password'
                            value={formData.createpassword} />
                        <span onClick={toggleShowPass1}>
                            {showpass1 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </span>
                    </label>

                    <label>
                        <p>Confirm Password<sup>*</sup></p>
                        <input required type={showpass2 ? 'text' : 'password'} name='confirmpassword' onChange={changeHandler}
                            placeholder='Confirm Password'
                            value={formData.confirmpassword} />
                        <span onClick={toggleShowPass2}>
                            {showpass2 ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
                        </span>
                    </label>
                </div>

                <button type="submit">Create Account</button>
            </form>
        </div>
    );
}

export default SignUpForm;
