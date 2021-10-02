import { Col, Progress, Row } from 'antd';
import { Main, Overflow, Space } from 'components';
import DATA from 'data';
import { checkCompletedStorage } from 'localStorage/completed';
import React from 'react';
import { Link } from 'react-router-dom';
import { Circle, StatusPanel } from './styled';
import TheEnd from './TheEnd';

const ListPage: React.FC = () => {
  const progress = () => {
    const completedCount = checkCompletedStorage()?.length;
    if (!completedCount) return 0;
    return Number(((completedCount * 100) / DATA.length).toFixed());
  };

  return (
    <Main>
      <StatusPanel>
        <h1>Список вопросов</h1>
        <Progress percent={progress()} />
      </StatusPanel>
      {progress() === 100 ? (
        <TheEnd />
      ) : (
        <Space direction='vertical' size='middle'>
          {DATA.map(({ id, title }) => {
            const completed = checkCompletedStorage()?.some((uid: any) => uid === id);
            return (
              <Row
                gutter={[16, 8]}
                align='middle'
                key={id}
                style={{ flexFlow: 'nowrap' }}
              >
                <Col>
                  <Circle completed={completed}>{id}</Circle>
                </Col>
                <Overflow style={{ color: '#52c41a' }}>
                  {completed ? (
                    title
                  ) : (
                    <Link to={`/task/${id}`}>
                      <Overflow>{title}</Overflow>
                    </Link>
                  )}
                </Overflow>
              </Row>
            );
          })}
        </Space>
      )}
    </Main>
  );
};

export default ListPage;
