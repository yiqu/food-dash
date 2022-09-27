export const mapToDataWithId = (res) => {
  return {
    ...res.data(),
    id: res.id
  };
};

export const convertDataToCollection = (dataObject) => {
  const keys = Object.keys(dataObject ?? {});
  const res = keys.map((key) => {
    return {
      id: key,
      amount: dataObject[key].data.amount,
      meal: dataObject[key].data.meal
    };
  });
  return res;
};