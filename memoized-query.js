
const MemoizedQueryModule = () => {
  const cache = [];

  findById = (str) => {
    for (let i = 0; i < cache.length; i++) {
      if (cache[i].query === str) {
        console.log('cached', cache[i].element, cache);
        return cache[i].element;
      }
    }

    let element = document.getElementById(`${str}`);
    let newCacheItem = {
      query: str,
      element: element
    }

    cache.push(newCacheItem);
    console.log('uncached', element, cache);
    return element;
  };

  findByCSSSelector = (str) => {
    for (let i = 0; i < cache.length; i++) {
      if (cache[i].query === str) {
        console.log('cached', cache[i].element, cache);
        return cache[i].element;
      }
    }

    let element = document.getElementById(`${str}`);
    let newCacheItem = {
      query: str,
      element: element
    }

    cache.push(newCacheItem);
    console.log('uncached', element, cache);
    return element;
  };

  return {
    findById,
    findByCSSSelector
  }
};