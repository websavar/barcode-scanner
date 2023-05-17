import { InputProps } from "types";
import { splitUnderscore } from "utils";

const Input: React.FC<InputProps> = ({
  name,
  inputValue,
  register,
  required = true,
  inputType = 'text'
}) => (
  <label className="first-letter:capitalize" aria-label={name}>
    {splitUnderscore(name)} {required && '*'}
    <input
      className='inputField w-full'
      type={inputType}
      {...register(name, { value: inputValue, required: required })}
    />
  </label>
);

export default Input;