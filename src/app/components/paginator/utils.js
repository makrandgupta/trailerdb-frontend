export default {
  mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
  },
  getUrlParams(url) {
    const hashes = url.slice(url.indexOf('?') + 1).split('&');
    return hashes.map((hash) => {
      const params = {};
      const [key, val] = hash.split('=');
      params[key] = decodeURIComponent(val);
      return params;
    });
  },
  getNestedValue(obj, path) {
    const originalPath = path;
    path = path.split('.');
    let res = obj;
    for (let i = 0; i < path.length; i += 1) {
      res = res[path[i]];
    }
    if (typeof res === 'undefined') {
      res = `[VuePaginator] Response doesn't contain key ${originalPath}!`;
    }
    return res;
  },
};
