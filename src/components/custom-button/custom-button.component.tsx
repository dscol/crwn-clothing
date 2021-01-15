import { CustomButtonContainer } from './custom-button.styles';


const CustomButton = ({ children, ...props}: any) => (
    <CustomButtonContainer {...props}>
        {children}
    </CustomButtonContainer>
)

export default CustomButton;