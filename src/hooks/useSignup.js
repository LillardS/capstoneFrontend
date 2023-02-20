import { useState } from 'react';
import { useAuthContext } from './useAuthContext';

// sign up and update auth context
export const useSignup = () => {

    // set state for errors, whether the app is loading, and update auth context
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    // function to sign up a user
    const signup = async (email, password) => {

        // set loading state to true since request just started
        setIsLoading(true);

        // insures erros are null at the start of a request
        setError(null);

        // fetch sign up user controller, post signup request to server, store response in a variable
        const response = await fetch('/user/Signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json();

        // if the response is not okay
        if (!response.ok) {

            // set loading state to false
            setIsLoading(false)

            // set the error to the recieved error (displayed below the sign up form)
            setError(json.error)
        }

        // if the response is okay
        if (response.ok) {

            // save the user and token from the response to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update the auth context and log the new user in
            dispatch({ type: 'LOGIN', payload: json })

            // set loading state to false at the end
            setIsLoading(false)
        }
    }

    // can be taken from this hook
    return { signup, isLoading, error }
}