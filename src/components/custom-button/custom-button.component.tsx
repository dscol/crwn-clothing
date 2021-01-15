import './custom-button.styles.scss';

interface ICustomButton {
    children: any,
    isGoogleSignIn?: boolean
    inverted?: boolean,
    [x:string]: any,
}

const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps}: ICustomButton) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButton;