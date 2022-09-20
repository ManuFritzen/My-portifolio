import { Container } from './styles';

export function ButtonNav({ title,  ...rest }) {
  return (
    <Container 
      type="button"
      {...rest}
    >
      {title}
    </Container>
  );
}