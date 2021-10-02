import { Space } from 'antd';
import { Main, Text } from 'components';
import {
  checkInfoStorage,
  checkStartStorage,
  checkFinishStorage,
} from 'localStorage/info';
import React from 'react';

const InfoPage: React.FC = () => {
  return (
    <Main center>
      <Space direction='vertical' align='center' size='middle'>
        <p>
          <b>Начало прохождения:</b>
          <br /> {checkStartStorage()}
          <br />
          <br />
          <b>Конец прохождения:</b>
          <br />
          {checkFinishStorage()}
          <br />
          <br />
          <br />
          {Object.values(checkInfoStorage()).map((el: any) => (
            <>
              <span>
                - {el?.title}:{' '}
                {Array.isArray(el?.value)
                  ? el.value.map((answer: any) => <>{answer}, </>)
                  : el?.value}
              </span>
              <br />
            </>
          ))}
        </p>
      </Space>
    </Main>
  );
};

export default InfoPage;
