import { ButtonProps } from "@/types";

const Button: React.FC<ButtonProps> = ({
  id,
  classes,
  outlined = false,
  type = 'button',
  onClick,
  disabled = false,
  children
}) => (
  <button
    id={id}
    className={`inline-flex items-center justify-center px-2 py-1 text-center text-sm font-semibold
      transition ease-in-out duration-100 
      ${outlined ? `text-cyan-900 bg-gray-50 ${!disabled && 'hover:bg-cyan-50'} ` :
        `text-blue-50 bg-cyan-600 ${!disabled && 'hover:bg-cyan-700'}`}
      ${disabled && 'text-gray-400 bg-gray-200'} border border-gray-300' rounded
      ${classes ? ' ' + classes : ''}`}
    onClick={onClick}
    type={type}
    disabled={disabled}
  >{children}
  </button>
);

export default Button;