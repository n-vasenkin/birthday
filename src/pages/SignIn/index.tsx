import { Button, Input, Space } from 'antd';
import { Main, Text } from 'components';
import React, { useCallback, useState } from 'react';
import { Redirect } from 'react-router-dom';
import ROUTES from 'const/routes';
import { checkAuthStorage, setAuthStorage } from 'localStorage/auth';
import { setStartStorage } from 'localStorage/info';

const names = ['иван', 'ваня', 'ванная'];

const SignInPage: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [auth, setAuth] = useState<boolean>(!!checkAuthStorage());

  const signIn = useCallback(() => {
    if (names.includes(name.toLowerCase())) {
      setStartStorage();
      setAuthStorage();
      setAuth(true);
    }
  }, [name]);

  return (
    <>
      {auth ? (
        <Redirect to={ROUTES.DESCRIPTION} />
      ) : (
        <Main center>
          <Space direction='vertical' align='center' size='middle'>
            <Text center>Привет, напиши, как тебя зовут)</Text>
            <Input
              placeholder='Введи своё имя'
              onPressEnter={signIn}
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Button onClick={signIn}>Войти</Button>
          </Space>
        </Main>
      )}
    </>
  );
};

export default SignInPage;
