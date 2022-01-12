module.exports = function reverse(n) {
  if (n < 0) n = -n;
  var s = n.toString();
  let len = s.length;
  const lenHalf = (len / 2) >> 0;
  len -= 1;

  var s1 = "";
  var res = s.split("");
  for (let i = 0; i < lenHalf; i++) {
    res[i] = s[len - i];
    res[len - i] = s[i];
  }
  return Number(res.join(""));
};
