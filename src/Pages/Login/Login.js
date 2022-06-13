import React from 'react';
import { useSignInWithEmailAndPassword,useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading';
import Footer from '../../Shared/Footer';

const Login = () => {

    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const { register, formState: { errors }, handleSubmit } = useForm();

    const [SignInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    let signInError;
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    if(loading || gLoading){
        return <Loading></Loading>
    }

    if(error || gError){
        signInError = <p className='text-red-500'><small>{error?.message || gError?.message}</small></p>
    }

    if(user || gUser){
        navigate(from, {replace: true});
    }

    const onSubmit = data => {
        console.log(data);
        SignInWithEmailAndPassword(data.email,data.password);
    }

    return (
        <div className='px-5'>
            <div class="card-body d-flex justify-content-center  my-4 ">

<div>

<h2 class="card-title text-center text-primary">Login</h2>

<form onSubmit={handleSubmit(onSubmit)}>
<div class="form-group d-flex flex-column justify-content-center align-items-center mb-2">
<div>
<label className='' for="exampleInputEmail1">Email</label>
</div>
<div>
<input 
type="email" 
placeholder="Your Email" 
className="input text-center" 
{...register("email", {
required: {
value: true,
massage: 'email required'
},
pattern: {
value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
message: 'Please Give a Valid Email' // JS only: <p>error message</p> TS only support string
}
})}
/>
</div>

<label class="label">
{errors.email?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.email.message}</span>}
{errors.email?.type === 'pattern' &&  <span class="label-text-alt text-red-500">{errors.email.message}</span>}


</label>


</div>
<div class="form-group d-flex flex-column justify-content-center align-items-center mb-2">
<div>
<label className='' for="exampleInputPassword1">Password</label>
</div>
<div>
<input 
type="password" 
placeholder="Password" 
className="input text-center" 
{...register("password", {
required: {
value: true,
massage: 'password required'
},
minLength: {
value: 6,
message: 'Must be 6 characters or longer' // JS only: <p>error message</p> TS only support string
}
})}
/>
</div>

</div>



<label class="label">
{errors.password?.type === 'required' &&  <span class="label-text-alt text-red-500">{errors.password.message}</span>}
{errors.password?.type === 'minLength' &&  <span class="label-text-alt text-red-500">{errors.password.message}</span>}


</label>

{signInError}



<div className='d-flex justify-content-center'>
<button type="submit" className="btn btn-primary text-center mb-1">Submit</button>
</div>
</form>
<p><small>New to KimberLaw? <Link className='text-secondary' to="/signup">Create New Account</Link></small></p>
<div class="dropdown-divider">OR</div>
<div className='d-flex justify-content-center align-items-center'>
<button onClick={() => signInWithGoogle()} 
className='btn-primary'>Continue with Google</button>
</div>
</div>



</div>
<Footer></Footer>
        </div>


    );
};

export default Login;