import { Container } from './styles';

export function Caption({ title,  ...rest }) {
  return (
    <Container 
      type="text"
      {...rest}
    >
      {title}
    </Container>
  );
}
