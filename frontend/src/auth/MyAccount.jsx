import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initFirebase } from '../services/datastore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const MyAccount = () => {

    const app = initFirebase();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    const navigateTo = useNavigate();

    const signIn = async () => {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        if (user) {
            navigateTo('/homepage');
        }
    }

    const signOut = async () => {
        await auth.signOut();
        navigateTo('/homepage');
    }


    return (
        <div>
            {auth.currentUser ?
            <button onClick={signOut}>Log out</button>
            : <button onClick={signIn}>Log in with Google</button>
}
        </div>
    )
}

export default MyAccount;
