import { Progress as AntProgress } from 'antd';
import styled, { css } from 'styled-components';

export const StatusPanel = styled.div`
  position: sticky;
  top: -20px;
  margin-top: -20px;
  padding: 20px 0;
  background: #fff;
  z-index: 5;
`;

export const Progress = styled(AntProgress)`
  width: 100%;
`;

export const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid #444;
  color: #444;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ completed }: { completed?: boolean }) =>
    completed &&
    css`
      color: #fff;
      background: #52c41a;
      border-color: #52c41a;
    `}
`;
