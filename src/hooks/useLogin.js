// imports
import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

// log in and update auth context
export const useLogin = () => {

    // set state for errors, whether the app is loading, and update auth context
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    // function to log in a user
    const login = async (email, password) => {

        // set loading state to true since request just started
        setIsLoading(true);

        // insures erros are null at the start of a request
        setError(null);

        // fetch log in user controller, post login request to server, store response in a variable
        const response = await fetch('https://capstone-backend-51b9.onrender.com/user/Login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json();

        // if the response is not okay
        if (!response.ok) {

            // set loading state to false
            setIsLoading(false);

            // set the error to the recieved error (displayed below the log in form)
            setError(json.error);
        }

        // if the response is okay
        if (response.ok) {

            // save the user and token from the response to local storage
            localStorage.setItem('user', JSON.stringify(json));

            // update the auth context and log the user in
            dispatch({ type: 'LOGIN', payload: json });

            // set loading state to false at the end
            setIsLoading(false);
        }
    }

    // can be taken from this hook
    return { login, isLoading, error }
}