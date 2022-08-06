import { useDebugValue } from 'react';
import { useSelector } from 'react-redux';

export const useAuth = () => {
    const { uid } = useSelector(state => state.auth);
    useDebugValue(uid, uid => (uid ? 'Logged in' : 'Logged out'));
    return useSelector(state => state.auth);
};
