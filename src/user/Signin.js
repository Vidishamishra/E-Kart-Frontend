import React, {useState} from 'react';
import Layout from '../core/Layout';
import {Redirect} from 'react-router-dom';
import {signin, authenticate, isAuthenticated} from '../auth/index';

const Signin = () => {

    const [values, setValues] = useState({
        email: '',
        password: '',
        error: '',
        Loading: false,
        redirectToReferrer:false
    })

    const {email, password, error, Loading, redirectToReferrer} = values;
    const {user} = isAuthenticated()

    const handleOnClick = (e) =>{
        e.preventDefault();
        setValues({...values, error: false, Loading: true})
        signin({email, password})
          .then(data => {
              if(data.error) {
                  setValues({...values, error: data.error, Loading: false})
              } else {
                authenticate(data, () => {
                    setValues({
                        ...values,
                        redirectToReferrer: true
                    })
                })
                  
              }
          })
    }

 

    //higher order function : function returning another function 
    //[name] is dynamic and captures values from fields as typed in...
    const handleChange = name => event => {
            setValues({...values, error:false, [name]: event.target.value})
    }

    const signinForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email')} value={email} type="email" className="form-control"/>
            </div>

            <div className="form-group">
                <label className="text-muted">Password</label>
                <input onChange={handleChange('password')} value={password} type="Password" className="form-control"/>
            </div>

            <button onClick={handleOnClick} type="button" className="btn btn-primary">Sign In</button>
        </form>
    );
 
    const showError = () => {
        return (
            <div className="alert alert-danger" style={{display: error ? "": "none"}}>
                {error}
            </div>
        )
    }

    const showLoading = () => 
    Loading && (
        <div className="alert alert-info">
            <h2>Loading...</h2>
        </div>
    );

    const redirectUser = () => {
        if (redirectToReferrer) {
           if(user && user.role === 1) {
            return <Redirect to="/admin/dashboard" />
           } else {
            return <Redirect to="/user/dashboard" />
           }
        }
        if(isAuthenticated()) {
           return  <Redirect to="/" />
        }
    };

    return (
        <Layout
            title = "Signin"
            description = "Signin to Node React E-commerce App"
            className="container col-md-8 offset-md-2">
                {showError()}
                {showLoading()}
                {signinForm()}
            {redirectUser()}
            
        </Layout>
    );
}


export default Signin;