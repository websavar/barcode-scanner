export interface ButtonProps {
  id?: string
  classes?: string
  outlined?: boolean
  type?: 'submit' | 'reset' | 'button' | undefined
  onClick?: () => void
  disabled?: boolean
  children: string | JSX.Element
}
