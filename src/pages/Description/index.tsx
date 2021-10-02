import { RocketOutlined } from '@ant-design/icons';
import { Space } from 'antd';
import { Button, Main, Text } from 'components';
import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from 'const/routes';
import DATA from 'data';

const DescriptionPage: React.FC = () => {
  return (
    <Main center>
      <Space direction='vertical' align='center' size='large'>
        <Text center>
          Привет, тебя ждут <b>{DATA.length}</b> интересных вопросов :)
        </Text>
        <Text style={{ fontSize: '14px' }}>
          - Время не ограничено <br />
          - Есть подсказки <br />
          - Регистр не важен (РыбА = рыба) <br />
          - Вопросы можно пропускать <br />
        </Text>
        <Link to={ROUTES.LIST}>
          <Button icon={<RocketOutlined />}>Полетели</Button>
        </Link>
      </Space>
    </Main>
  );
};

export default DescriptionPage;
