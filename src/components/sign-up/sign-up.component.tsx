import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import { useState } from 'react';

const SignUp = () => {
    const [ displayName, setDisplayName ] = useState<string>('');
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');
    const [ confirmPassword, setConfirmPassword ] = useState<string>('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (password !== confirmPassword) {
            alert("Passwords don't match")
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email, 
                password
            );

            await createUserProfileDocument(user, { displayName });

            setDisplayName('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='sign-up'>
            <h2 className='title'>I don't have an account</h2>
            <span>Sign up with your email and password</span>
            <form className='sign-up-form' onSubmit={handleSubmit}>
                <FormInput 
                    type='text'
                    name='displayName'
                    value={displayName}
                    handleChange={(e: React.SyntheticEvent<HTMLInputElement>) => setDisplayName(e.currentTarget.value)}
                    label='Display Name'
                    required
                />
                <FormInput 
                    type='email'
                    name='email'
                    value={email}
                    handleChange={(e: React.SyntheticEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
                    label='Email'
                    required
                />
                <FormInput 
                    type='password'
                    name='password'
                    value={password}
                    handleChange={(e: React.SyntheticEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
                    label='Password'
                    required
                />
                <FormInput 
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    handleChange={(e: React.SyntheticEvent<HTMLInputElement>) => setConfirmPassword(e.currentTarget.value)}
                    label='Confirm Password'
                    required
                />
                <CustomButton type='submit'>SIGN UP</CustomButton>
            </form>
        </div>
    )
}

export default SignUp;