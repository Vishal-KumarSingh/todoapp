
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { useEffect } from "react";


// Function to check if token is present
function isTokenPresent(): boolean {
  const token = Cookies.get('auth_token'); // Replace 'auth_token' with the cookie name you're using
  //console.log(token);
  return !!token;
}

function Home() {
  const navigate = useNavigate();



  useEffect(() => {
    // Set a timer to navigate after 5 seconds (5000 milliseconds)
    if(isTokenPresent()){
      console.log("auth token present");
      navigate("/dashboard");
    }else{
      console.log("auth absent");
      navigate("/login");
    }// Delay in milliseconds

    // Cleanup function to clear the timer if the component unmounts
  
  }, [navigate]);


 
  return (
     <>
     <h1>This is home</h1>
     
     </>
  )
}



export default Home
