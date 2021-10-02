import { Tag, Input, Collapse, Modal } from 'antd';
import { Main, Text, Button, Space } from 'components';
import React, { useEffect, useState } from 'react';
import { ArrowLeftOutlined } from '@ant-design/icons';
import DATA, { IData } from 'data';
import getRandomError from 'const/errors';
import { Redirect } from 'react-router-dom';
import ROUTES from 'const/routes';
import { setCompletedStorage } from 'localStorage/completed';
import { setInfoStorage } from 'localStorage/info';

const { Panel } = Collapse;

const ListPage: React.FC = () => {
  const [isRedirect, setIsRedirect] = useState<boolean>(false);
  const [errorTitle, setErrorTitle] = useState<string>('');
  const [task, setTask] = useState<IData>();
  const [answer, setAnswer] = useState<string>('');

  useEffect(() => {
    const id = Number(window.location.pathname.split('/').pop());
    const currentTask = DATA.find(el => el.id === id);
    setTask(currentTask);
  }, [setTask]);

  const goBack = () => {
    window.location.href = '/list';
  };

  const onAnswer = () => {
    if (!answer) {
      setErrorTitle('Напиши свой ответ');
    } else if (task?.answer.some(a => a === answer)) {
      setErrorTitle('');
      setCompletedStorage(task?.id);
      success();
    } else {
      setInfoStorage('error', 1);
      setInfoStorage('answer', answer);
      setErrorTitle(getRandomError());
    }
  };

  const success = () => {
    Modal.success({
      centered: true,
      title: 'Молодец, это правильный ответ!',
      content: task?.successText,
      onOk: () => setIsRedirect(true),
      okText: 'Прекрасно',
    });
  };

  return (
    <>
      {isRedirect ? (
        <Redirect to={ROUTES.LIST} />
      ) : (
        <Main>
          <Button
            icon={<ArrowLeftOutlined />}
            onClick={goBack}
            type='link'
            style={{ padding: 0 }}
          >
            Назад
          </Button>
          <Space direction='vertical' size='middle'>
            <Tag color='geekblue'>{task?.title}</Tag>
            <Text>{task?.description}</Text>
            <Input
              placeholder='Напиши свой ответ'
              onChange={e => setAnswer(e.target.value.toLowerCase())}
              onPressEnter={onAnswer}
            />
            {errorTitle && <Tag color='error'>{errorTitle}</Tag>}
            <Button size='middle' onClick={onAnswer}>
              Ответить
            </Button>
            <Collapse
              onChange={keys => {
                if (keys.length) setInfoStorage('help', 1);
              }}
            >
              <Panel header='Подсказка' key='1'>
                {task?.help}
              </Panel>
            </Collapse>
          </Space>
        </Main>
      )}
    </>
  );
};

export default ListPage;
