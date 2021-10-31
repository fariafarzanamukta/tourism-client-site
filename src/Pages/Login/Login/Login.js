import React from 'react';
import { useHistory, useLocation } from 'react-router';

import useAuth from './../../../hooks/useAuth';
// https://alfath-89d51.web.app
const Login = () => {
    const { signInUsingGoogle, setIsLoading, setUser } = useAuth();

    const history = useHistory();
    const location = useLocation();
    const url = location.state?.from || "/home"

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((res) => {
                setIsLoading(true)
                setUser(res.user)
                history.push(url)
            }
            )
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false);
            })
    };

    return (
        <div>
            <h1 className="my-5">Please Login</h1>
            <button onClick={handleGoogleLogin} className="btn btn-success mb-4 px-4 py-2">Google Sign In</button>
        </div>
    );
};

export default Login;

