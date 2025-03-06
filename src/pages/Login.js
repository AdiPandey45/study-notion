
import Template from '../components/Template';
import LoginImg from '../assets/login.png'; 

const Login=({setIsLoggedIn})=>{
    return(
        <div> 
            <Template  
            title="Welcome Back"
            desc1="Build Skills for today, tomorrow and beyond."
            desc2="Education to future-proof your career." 
            image={LoginImg} 
            formType="login"
            setIsLoggedIn={setIsLoggedIn}/>
          
        </div>
    )
}

export default Login;
