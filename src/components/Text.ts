import styled, { css } from 'styled-components';

const Text = styled.p`
  font-size: 18px;
  margin: 0;
  ${({ center }: { center?: boolean }) =>
    center &&
    css`
      text-align: center;
    `}
`;

export default Text;
