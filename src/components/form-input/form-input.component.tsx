import './form-input.styles.scss';

interface IFormInput {
    label: string,
    handleChange: (e: React.SyntheticEvent<HTMLInputElement>) => void,
    [x:string]: any
}

const FormInput = ({ handleChange, label, ...otherProps }: IFormInput) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps} />
        {
            label ?
            (<label 
                className={`${
                    otherProps.value.length ? 'shrink' : ''
                    } form-input-label`}
            >
                {label}
            </label>)
            : null
        }
    </div>
)

export default FormInput;