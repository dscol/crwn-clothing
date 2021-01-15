import { useState } from "react";
import './sign-in.styles.scss';
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.utils";


const SignIn = () => {
    const [ email, setEmail ] = useState<string>('');
    const [ password, setPassword ] = useState<string>('');

    const handleSubmit = async (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()

        try {
            await auth.signInWithEmailAndPassword(email, password)
            setEmail('')
            setPassword('')
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div className='sign-in'>
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form onSubmit={handleSubmit}>
                <FormInput 
                    name='email' 
                    type='email' 
                    handleChange={(e: React.SyntheticEvent<HTMLInputElement>) => setEmail(e.currentTarget.value)}
                    value={email} 
                    label='email'
                    required
                />
                <FormInput 
                    name='password' 
                    type='password' 
                    handleChange={(e: React.SyntheticEvent<HTMLInputElement>) => setPassword(e.currentTarget.value)}
                    value={password} 
                    label='password'
                    required
                />
                <div className='buttons'>
                    <CustomButton type='submit'>Sign in</CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
                        Sign in with Google
                    </CustomButton>
                </div>
            </form>
        </div>
    )
}

export default SignIn;