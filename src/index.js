module.exports = function check(str, bracketsConfig) {
  let res = [];
  let currentConfig = '';
  for (let i = 0; i < str.length; i++) {
    if (res.length === 0) {
      res.push(str[i]);
    } else {
      bracketsConfig.forEach(el => (el.includes(res[res.length - 1]) && (currentConfig = el)));
      str[i] === currentConfig[1] ? res.pop() : res.push(str[i]);
    }
  }
  return res.length > 0 ? false : true;
}
