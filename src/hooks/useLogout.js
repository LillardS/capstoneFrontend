import { useAuthContext } from './useAuthContext';

// log user out and update auth context
export const useLogout = () => {

    // allows to update authcontext
    const { dispatch } = useAuthContext();

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user');

        // dispatch logout action
        dispatch({ type: 'LOGOUT' });
    }

    // can be taken from this hook
    return { logout }
}