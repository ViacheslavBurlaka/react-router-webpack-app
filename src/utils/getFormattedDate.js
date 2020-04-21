export const getFormattedDate = (date) => {
  const formattedDate = date.slice(0, 10).split('-');

  // return formattedDate[1] + '/' + formattedDate[2] + '/' + formattedDate[0];

  return `${formattedDate[1]}/${formattedDate[2]}/${formattedDate[0]}`;
};
