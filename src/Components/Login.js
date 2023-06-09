import React, { state, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../StyleSheets/Login.css";
import {toast} from 'react-toastify'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./SignUp";

export default function Login() {

  const [UserType, setuserType] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
// const [Token,setToken]=useState("")
  const navigate = useNavigate()
  // const win = window.sessionStorage

  const onChangeUserType = (event) => {
    setuserType(event.target.value)
  }

  const onChangeEmailAddress = (event) => {
    setEmail(event.target.value)
  }

  const onChangePassword = (event) => {
    setPassword(event.target.value)
  }



  const saveUser = async (event) => {
    event.preventDefault();
    try {
      const User = { user_type: UserType, email: Email, password: Password }
      let data = JSON.stringify(User);


      let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://localhost:3001/auth/user/login',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios.request(config)
        .then((response) => {
          // console.log(response.data.Data.token)
          // setToken(response.data.Data.token)
          localStorage.setItem('login',JSON.stringify({
            Login : true,
            token : response.data.Data.token
          }))
          // console.log(response.token)
          // console.log(response.status)
        
          if (response.status === 200) {
            if (User.user_type === 'Patient') {
              navigate('/patientdashboard')
              toast.success('Welcome ! patient',
                {position: toast.POSITION.TOP_RIGHT,
                })
            } else if (User.user_type === 'Doctor') {
              navigate('/doctordashboard')
              toast.success('Welcome ! Doctor',
              {position: toast.POSITION.TOP_RIGHT,
              })
            } else if (User.user_type === 'Staff') {
              navigate('/staffdashboard')
              toast.success('Welcome ! Staff Mamber',
              {position: toast.POSITION.TOP_RIGHT,
              })
            }
          }
        })
        .catch((error) => {
          console.log(error.response.data.error)
          toast.error(error.response.data.error,
          {position: toast.POSITION.TOP_RIGHT,
          })
        });
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div className="container me-5" style={{ marginTop: "2%" }}>

        <form className=" container border border-white col-6 mx-my-3 mb-3" id="Table" >
          <div className="mb-5 mt-2">
            <h3 className="text-primary text-uppercase mb-3">Login</h3>
            {/* userType */}
            <div className="col px-md-5">
              <div className="mb-2">Select Your Role*</div>
              <select className="form-select mb-3" aria-label="Default select example" value={UserType} onChange={onChangeUserType}>
                <option defaultValue value="">-Select Role-</option>
                <option value='Doctor'> Doctor </option>
                <option value='Staff'>Staff</option>
                <option value='Patient'>Patient</option>
              </select>
            </div>
            {/* Email Address */}
            <div className="mb-3 col px-md-5">
              <label htmlFor="exampleInputEmail1" className="form-label"> Email Address*</label>
              <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="name@example.com" value={Email} onChange={onChangeEmailAddress} />
            </div>
            {/* Password */}
            <div className="mb-3 col px-md-5">
              <label htmlFor="exampleInputPassword1" className="form-label"> Password*</label>
              <input type="password" className="form-control" id="exampleInputPassword1" value={Password} placeholder="password" onChange={onChangePassword} />
              <Link className="ml-auto border-link small-xl" to="/forgotpassword"> Forget Password? </Link>
            </div>
            {/* Login */}
            <div className="text-center">
              <button type="submit" className="btn btn-primary mx-1 my-2">
                <Link className="nav-link " id="login" onClick={saveUser}>Log In</Link>
              </button>
              {/* signUp */}
              <div>
                <small> Not a member? </small>
                <Link className="link-opacity-75-hover mb-3" id="signup" to="/signup"> SignUp</Link>
              </div>
              <small > Create a Account for a smart, east and fast clinic Management. </small>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}







// {errors && (
//   <ul>
//  {errors.map((error, index) => (
//   <li key={index}>{error.msg}</li>
//   ))}
// </ul>
//     )}

// event.preventDefault()

// const User ={user_type: UserType ,email:Email,password:Password}
// const response = await fetch('http://localhost:3001/auth/user/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(User),
// })
// console.log(response.json())
// if(!(response.status === 200)){
//   const errorData =response.json();
//   setErrors(errorData.errors)
// }else {
//   setErrors([]);
//   const userData = await response.json();
//   if ( User.user_type=== 'Patient') {
//     history.push('http://localhost:3000/patientdashboard');
//   } else if (User.user_type === 'Doctor') {
//     history.push('http://localhost:3000/doctordashboard');
//   }
// }

// const regExp = RegExp(
//   /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
// )






  // .then(data => this.setState({ }));

    //   const updateItem = await fetch(`http://localhost:3001/auth/user/login`, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //         "Content-Length":User.length
    //     },
    //     body: JSON.stringify({ User })
    // }).then((result)=>{
    //      console.log('result',result)
    //     }).then(res => res.json())
    // console.log(updateItem, '<---- login')

    //   fetch( "http://localhost:3001/auth/user/login",{
    //      method:'POST',
    //     headers:{
    //       'Accept':'application/json',
    //       'Content-Type':'application/json'
    //     },

    // body:JSON.stringify(User)
    //  }).then((result)=>{
    //   console.warn('result',result)
    //  })



        // state = {
    //   UserType: '',
    //   Email: '',
    //   Password:'',
    //   formErrors: {UserType: '',Email: '' ,password: ''},
    //   UserTypeValid:false,
    // emailValid: false,
    // passwordValid: false,
    // formValid: false
    // }


       // console.log("lerlsjfo", User);
    // console.log('userlenth',User.size)


    //   const validaition =(values)=>{
// const error ={};
// if(!values.user_type){
//   error.usertype ='username is required!'
// }
// if(!values.email){
//   error.email ='email is required!'
// }
// if(!values.password){
//   error.password ='password is required!'
// }
// return error
//   }

//  useEffect(()=>{
//   console.log(fromErrors)
// if(Object.keys(fromErrors).length === 0 && isSumbmit){
//   console.log({user_type: UserType, email: Email, password: Password })
// }

//  })

// useEffect(() => {
//   const form = formRef.current;
//   if (typeof Parsley === 'undefined') {
//     return;
//   }
//   form.ParsleyInstance.formValidationSetup(window.ParsleyConfig);
//   form.ParsleyInstance.on('form:submit', (event) => {
//     event.preventDefault();
//     console.log('Form submitted');
//   });
//   return () => {
//     form.ParsleyInstance.off('form:submit');
//   };
// }, []);