export interface IData {
  id: number;
  title: string;
  description: string;
  help: string;
  answer: string[];
  successText: string;
}

const DATA: IData[] = [
  {
    id: 1,
    title: 'Пример заголовка',
    description: 'Сколько будет 2 + 2 ?',
    help: '2 * 2 = 4',
    answer: ['4', 'четыре', 'два плюс два'],
    successText: 'Пример поздравления',
  },
];

export default DATA;
