function pick(obj, keys) {
    const result = {};
    keys instanceof Array ? (keys = keys) : (keys = new Array(keys));
    for (let each of keys) {
      if (obj.hasOwnProperty(each)) {
        result[each] = obj[each];
      }
    }
    return result;
  };

function omit(obj, keys) {
    const result = {
      ...obj,
    };
    keys instanceof Array ? (keys = keys) : (keys = new Array(keys));
    for (let each of keys) {
      if (obj.hasOwnProperty(each)) {
        delete result[each];
      }
    }
    return result;
  };