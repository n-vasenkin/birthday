import styled, { css } from 'styled-components';

const Main = styled.main`
  border: 2px solid #333;
  height: 100%;
  background: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  overflow-y: auto;
  padding: 20px;
  ${({ center }: { center?: boolean }) =>
    center &&
    css`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `};
`;

export default Main;
