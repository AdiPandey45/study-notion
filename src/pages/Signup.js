import Template from '../components/Template';
import Signimg from '../assets/signup.png';
 
 const SignUp = ({setIsLoggedIn}) => {
  return ( 
    <div>
          <Template     
            title="Join the millions learning to code with StudyNotion for free"  
            desc1="Build Skills for today, tomorrow and beyond." 
            desc2="Education to future-proof your career." 
            image={Signimg}
            formType="signup"
            setIsLoggedIn={setIsLoggedIn}/>
    </div>
  )
}

export default SignUp;
