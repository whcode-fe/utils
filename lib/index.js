function l(t, e) {
  !t || !e || localStorage.setItem(t, JSON.stringify(e));
}
function f(t) {
  if (!t)
    return null;
  const e = localStorage.getItem(t);
  if (e !== null)
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
  else
    return null;
}
function p(t) {
  const e = document.createElement("a");
  e.setAttribute("href", t), e.setAttribute("target", "_blank"), e.setAttribute("id", "camnpr"), document.body.appendChild(e), e.click();
}
function u(t, e, n) {
  n === void 0 && (n = 365);
  const r = new Date();
  r.setTime(r.getTime() + n * 24 * 60 * 60 * 1e3);
  const i = "expires=" + r.toUTCString();
  document.cookie = t + "=" + e + "; " + i;
}
function g(t) {
  const e = t + "=", n = document.cookie.split(";");
  for (let r = 0; r < n.length; r++) {
    let i = n[r];
    for (; i.charAt(0) == " "; )
      i = i.substring(1);
    if (i.indexOf(e) != -1)
      return i.substring(e.length, i.length);
  }
  return "";
}
function h(t) {
  u(t, "", -1);
}
function b(t, e, n = []) {
  !c(t) || !c(e) || Object.keys(t).forEach(function(r) {
    e[r] !== void 0 && !n.includes(r) && (t[r] = e[r]);
  });
}
function d(t, e, n = "prop", r = "content") {
  t.forEach(function(i) {
    i.hasOwnProperty(n) && (a(r) ? r.forEach(function(o) {
      i.hasOwnProperty(o) && (i[o] = e[i[n]]);
    }) : i.hasOwnProperty(r) && (i[r] = e[i[n]]));
  });
}
function S(t, e = !0) {
  t === void 0 && (t = 16), e === void 0 && (e = !0);
  const n = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", r = n.length;
  let i = "";
  for (let o = 0; o < t; o++)
    i += n.charAt(Math.floor(Math.random() * r));
  return e ? new Date().getTime() + i : i;
}
function O(t) {
  return Object.prototype.toString.call(t).slice(8, -1) === "String";
}
function y(t) {
  return Object.prototype.toString.call(t).slice(8, -1) === "Null";
}
function N(t) {
  return Object.prototype.toString.call(t).slice(8, -1) === "Undefined";
}
function a(t) {
  return Object.prototype.toString.call(t).slice(8, -1) === "Array";
}
function c(t) {
  return Object.prototype.toString.call(t).slice(8, -1) === "Object";
}
function m(t) {
  return Object.prototype.toString.call(t).slice(8, -1) === "Number";
}
function k(t) {
  return t.slice(0, 1) === "_" && (t = t.slice(1)), t.replace(/([^_])_+([^_])/g, function(e, n, r) {
    return n + r.toUpperCase();
  });
}
const s = (t, e, n) => {
  for (let r in t)
    if (!e || !e.includes(r)) {
      if (n && n[r]) {
        t[r] = n[r];
        return;
      }
      switch (typeof t[r]) {
        case "string":
          t[r] = "";
          break;
        case "number":
          t[r] = null;
          break;
        case "object":
          t[r] instanceof Array ? t[r] = [] : s(t[r], e);
          break;
        case "boolean":
          t[r] = !0;
          break;
      }
    }
  return t;
}, w = (t) => JSON.parse(JSON.stringify(t));
export {
  b as allGive,
  d as arrayGive,
  h as clearCookie,
  w as deepClone,
  g as getCookie,
  f as getStorage,
  a as isArray,
  y as isNull,
  m as isNumber,
  c as isObject,
  O as isString,
  N as isUndefined,
  s as objInit,
  p as openNewtab,
  S as randomName,
  u as setCookie,
  l as setStorage,
  k as underlineToHump
};
//# sourceMappingURL=index.js.map
