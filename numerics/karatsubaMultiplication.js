function normalize(a) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] < 0) {
      a[i+1] -= Math.floor(Math.abs(a[i])/10)+1;
      a[i] = 10 - (Math.abs(a[i]) % 10);
    } else {
      if (a[i] > 9) {
        if (i === a.length-1) a[i+1] = 0;
        a[i+1] += Math.floor(a[i]/10);
      }
      a[i] = a[i] % 10;
    }
  }
}

// normal O(n^2) multiplication
function multiply(a, b) {
  let c = new Array(a.length + b.length + 1);
  for (let i = 0; i < c.length; i++) {
    c[i] = 0;
  }

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      c[i+j] += a[i] * b[j];
    }
  }

  normalize(c);

  return c;
}

function karatsuba(a, b) {
  if (a.length < b.length) {
    return karatsuba(b, a);
  }
  if (!a || !b) {
    return [0];
  }
  if (a.length < 2 && b.length <2) {
    let ret = new Array(1).fill(a[0] * b[0]);
    normalize(ret);
    return ret;
  }
  normalize(a);
  normalize(b);

  let a0 = a.slice(0, Math.floor(a.length/2));
  let a1 = a.slice(Math.floor(a.length/2));
  let b0 = b.slice(0, Math.floor(a.length/2));
  let b1 = b.slice(b0.length).concat(new Array(a.length-b.length).fill(0));

  let z0 = karatsuba(a0, b0);
  let z2 = karatsuba(a1, b1);

  let sumofa = add(a0, a1);
  let sumofb = add(b0, b1);
  let z1 = sub(sub(karatsuba(sumofa, sumofb), z0), z2);

  z2 = (new Array(a0.length*2).fill(0)).concat(z2);
  z2 = add(z2, z0);
  z1 = (new Array(a0.length).fill(0)).concat(z1);
  z2 = add(z2, z1);
  normalize(z2);
  for (let i = z2.length-1; i > 0; i--) {
    if (z2[i] === 0) z2.pop();
    else break;
  }

  return z2;
}

function add(a, b) {
  if (a.length < b.length) return add(b, a)
  let ret = new Array(a.length);
  for (let i = 0; i < a.length;  i++) {
    ret[i] = (b[i]) ? a[i] + b[i] : a[i];
  }

  return ret;
}

function sub(a, b) {
  if (a.length < b.length) return sub(b, a);
  let ret = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    ret[i] = (b[i]) ? a[i] - b[i] : a[i];
  }
  normalize(ret);

  return ret;
}
