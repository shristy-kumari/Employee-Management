import { useState } from "react";
import Layout from "../../Layout/Layout";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate("");
  const [errors,setErrors] = useState({});
  const [data, setData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    password: "",
    cpassword: "",
  });
  //FORM VALIDATION
  function validation(data) {
    const errors = {};
  
    if (data.name === "") errors.name = "Name is required!!";
    if (data.email === "") errors.email = "Email is required!!";
    if (data.mobile === "") {
      errors.mobile = "Mobile is required!!";
    } 
    else {
      if (data.mobile.length !== 10) {
        errors.mobile = "Mobile number must be 10 digits";
      }
    }
  
    if (data.address === "") errors.address = "Address is required!!";
    if (data.password === "") {
      errors.password = "Password is required!!";
    } 
    else {
      if (data.password.length < 8) {
        errors.password = "Password must be at least 8 characters long";
      }
    }
    if (data.cpassword === "") errors.cpassword = "Confirm password is required";
  
    return errors;
  }
  

  const handleChange = (e)=>{
      setData({...data,[e.target.name]:e.target.value})  
  } 
     //HANDLE REGISTER
  const handleRegister = async(e)=>{
     e.preventDefault();
     setErrors(validation(data));
    // await fetch(`http://localhost:3000/users`,{
    //     method:"POST",
    //     headers:{"content-type":"application/json"},
    //     body:JSON.stringify(data)
    //  })
    //  setData({
    //   name:"",
    //   email:"",
    //   mobile:'',
    //   address:"",
    //   password:"",
    //   cpassword:""
    // })

    //  alert('user registered successfully !!!')
    // toast.success('User registered successfully !!!',{autoClose:1000})
    //  setTimeout(() => {
    //   navigate("/login");
    //  },2000);
  };

  return (
    <Layout>
      <div className="row offset-4 mt-5">
        <div className="col-md-6 p-4 bg-light">
          <h4>Registration form</h4>
          <form className="mt-2" onSubmit={handleRegister}>
            <div className="form-group mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="username"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
              {errors && <span style={{color:'red',fontSize:'15px'}}>{errors.name}</span> }            
            </div>
            <div className="form-group mt-2">
              <input
                type="email"
                className="form-control"
                placeholder="email id"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            {errors && <span style={{color:'red',fontSize:'15px'}}>{errors.email}</span> }
            </div>
            <div className="form-group mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="mobile no"
                name="mobile"
                value={data.mobile}
                onChange={handleChange}
              />
              {errors && <span style={{color:'red',fontSize:'15px'}}>{errors.mobile}</span> }

            </div>
            <div className="form-group mt-2">
              <input
                type="text"
                className="form-control"
                placeholder="address"
                name="address"
                value={data.address}
                onChange={handleChange}
              />
              {errors && <span style={{color:'red',fontSize:'15px'}}>{errors.address}</span> }

            </div>
            <div className="form-group mt-2">
              <input
                type="password"
                className="form-control"
                placeholder="password"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
              {errors && <span style={{color:'red',fontSize:'15px'}}>{errors.password}</span> }

            </div>
            <div className="form-group mt-2">
              <input
                type="password"
                className="form-control"
                placeholder="confirm password"
                name="cpassword"
                value={data.cpassword}
                onChange={handleChange}
              />
              {errors && <span style={{color:'red',fontSize:'15px'}}>{errors.cpassword}</span> }

            </div>
            <div className="form-group mt-2">
              <button className="btn btn-primary w-100">REGISTER</button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
}
