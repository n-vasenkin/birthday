const START_STORAGE = 'start';
const FINISH_STORAGE = 'finish';

export const checkStartStorage = () => localStorage.getItem(START_STORAGE);
export const setStartStorage = () => {
  const startDate = new Date();
  localStorage.setItem(START_STORAGE, '' + startDate);
};

export const checkFinishStorage = () => localStorage.getItem(FINISH_STORAGE);
export const setFinishStorage = () => {
  const finishDate = new Date();
  localStorage.setItem(FINISH_STORAGE, '' + finishDate);
};

const INFO_STORAGE = 'info';

export const checkInfoStorage = () => JSON.parse('' + localStorage.getItem(INFO_STORAGE));
export const setInfoStorage = (key: string, value: any) => {
  let info;
  if (!checkInfoStorage()) {
    info = {
      error: {
        title: 'Ошибок',
        value: 0,
      },
      help: {
        title: 'Подсказок',
        value: 0,
      },
      answer: {
        title: 'Ответы',
        value: [],
      },
    };
  } else {
    info = checkInfoStorage();
  }

  if (key !== 'answer') {
    info[key].value = ++info[key].value;
  } else {
    info[key].value = [...info[key].value, value];
  }

  localStorage.setItem(INFO_STORAGE, JSON.stringify(info));
};
