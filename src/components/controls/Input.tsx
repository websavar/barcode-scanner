import { InputProps } from "@/types";

const Input: React.FC<InputProps> = ({
  name,
  inputValue,
  register,
  required = true,
  inputType = 'text'
}) => (
  <label className="first-letter:capitalize">
    {name.split('_').join(' ')} {required && '*'}
    <input
      className='inputField w-full'
      type={inputType}
      {...register(name, { value: inputValue, required: required })}
    />
  </label>
);

export default Input;