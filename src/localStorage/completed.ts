const COMPLETED_STORAGE = 'completed';

export const checkCompletedStorage = () =>
  JSON.parse('' + localStorage.getItem(COMPLETED_STORAGE));

export const setCompletedStorage = (id: number) => {
  const currentCompleted = checkCompletedStorage();
  const newArray = !currentCompleted ? [id] : [...currentCompleted, id];
  localStorage.setItem(COMPLETED_STORAGE, JSON.stringify(newArray));
};
