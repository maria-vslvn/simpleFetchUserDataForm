import { ButtonModel } from '../../models';

export const Button = ({ type = 'submit', label, ...rest }: ButtonModel) => {
  return (
    <button type={type} {...rest}>{label}</button>
  )
}
