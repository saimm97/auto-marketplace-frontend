import { signIn, signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';


export const handleSignIn = () => signIn('google');
export const handleSignOut = () => signOut();
export const handleSession = () => useSession();