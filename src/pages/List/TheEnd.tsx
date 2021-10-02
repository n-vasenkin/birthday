import React, { useEffect } from 'react';
import { Space } from 'components';
import { checkFinishStorage, setFinishStorage } from 'localStorage/info';

const TheEnd: React.FC = () => {
  useEffect(() => {
    if (!checkFinishStorage()) {
      setFinishStorage();
    }
  }, []);

  return <Space direction='vertical'>Поздравляю!</Space>;
};

export default TheEnd;
