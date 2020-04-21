import React, {useState} from 'react';
import Layout from '../core/Layout';
import {Link} from 'react-router-dom';
import {signup} from '../auth/index';

const Signup = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const {name, email, password, error, success} = values;

    const handleOnClick = (e) =>{
        e.preventDefault();
        setValues({...values, error: false})
        signup({name, email, password})
          .then(data => {
              if(data.error) {
                  setValues({...values, error: data.error, success: false})
              } else {
                  setValues({
                      ...values,
                      name: '',
                      email: '',
                      password: '',
                      error: '',
                      success: true
                  })
              }
          })
    }

 

    //higher order function : function returning another function 
    //[name] is dynamic and captures values from fields as typed in...
    const handleChange = name => event => {
            setValues({...values, error:false, [name]: event.target.value})
    }

    const signUpForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input onChange={handleChange('name')} value={name} type="text" className="form-control"/>
            </div>

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control"/>
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} value={password} type="Password" className="form-control"/>
            </div>

            <button onClick={handleOnClick} type="button" className="btn btn-primary">Sign Up</button>
        </form>
    );
 
    const showError = () => {
        return (
            <div className="alert alert-danger" style={{display: error ? "": "none"}}>
                {error}
            </div>
        )
    }

    const showSuccess = () => {
        return (
            <div className="alert alert-info" style={{display: success ? "": "none"}}>
               Account Successfully created! Please <Link to="/signin">SignIn</Link>
            </div>
        )
    }

    return (
        <Layout
            title = "Signup"
            description = "Signup to Node React E-commerce App"
            className="container col-md-8 offset-md-2">
                {showError()}
                {showSuccess()}
            {signUpForm()}
            {JSON.stringify(values)}
        </Layout>
    );
}


export default Signup;