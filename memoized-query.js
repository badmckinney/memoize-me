
const MemoizedQueryModule = () => {
  const cache = {};

  findById = (str) => {
    if (str in cache) {
      return cache[str];
    }

    cache[str] = document.getElementById(str);
    return cache[str];
  };

  findByCSSSelector = (str) => {
    if (str in cache) {
      return cache[str];
    }

    cache[str] = document.querySelector(str);
    return cache[str];
  };

  return {
    findById,
    findByCSSSelector
  }
};