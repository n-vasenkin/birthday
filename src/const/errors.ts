const ERRORS = [
  'Попробуй ещё раз',
  'Не совсем верно',
  'Хороший вариант, но не совсем верный',
  'Ого, не ожидал такого ответа',
  'Попробуй снова',
  'Попробуй другой вариант',
];

const getRandomError = () => ERRORS[Math.floor(Math.random() * ERRORS.length)];

export default getRandomError;
