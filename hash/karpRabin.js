// returns start index of matched string
function karpRabin(s, t) {
  const rs = krHash(s);
  let rt = krHash(t.slice(0, s.length));
  for (let i = 0; i < t.length-s.length+1; i++) {
    console.log(rs, rt);
    if (rs === rt) return i;
    rt = rt - t.charCodeAt(i) + t.charCodeAt(i+s.length);
  }
}

function krHash(str) {
  return str.split('').reduce((acc, cur) => {
    return acc + cur.charCodeAt(0);
  }, 0);
}
