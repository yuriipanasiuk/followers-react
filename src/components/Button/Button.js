import { StyledButton } from './Button.styled';

const Button = ({ type = 'button', title, click }) => {
  return (
    <StyledButton color={title} type={type} onClick={click}>
      {title}
    </StyledButton>
  );
};

export default Button;
