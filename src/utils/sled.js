export const getAllSledData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => res.jason())
      .then((data) => resolve(data));
  });
};
