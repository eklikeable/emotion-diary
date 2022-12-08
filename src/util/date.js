// getStringDate : 오늘 날짜를 2022-12-07 형식으로 받아옴
export const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};
