function f(t, r) {
  !t || !r || localStorage.setItem(t, JSON.stringify(r));
}
function l(t) {
  if (!t)
    return null;
  var r = localStorage.getItem(t);
  if (r !== null)
    try {
      var i = JSON.parse(r);
      return i;
    } catch {
      return r;
    }
  else
    return null;
}
function s(t) {
  var r = document.createElement("a");
  r.setAttribute("href", t), r.setAttribute("target", "_blank"), r.setAttribute("id", "camnpr"), document.body.appendChild(r), r.click();
}
function c(t, r, i) {
  i === void 0 && (i = 365);
  var e = new Date();
  e.setTime(e.getTime() + i * 24 * 60 * 60 * 1e3);
  var n = "expires=" + e.toUTCString();
  document.cookie = t + "=" + r + "; " + n;
}
function p(t) {
  for (var r = t + "=", i = document.cookie.split(";"), e = 0; e < i.length; e++) {
    for (var n = i[e]; n.charAt(0) == " "; )
      n = n.substring(1);
    if (n.indexOf(r) != -1)
      return n.substring(r.length, n.length);
  }
  return "";
}
function g(t) {
  c(t, "", -1);
}
function d(t, r, i = []) {
  !a(t) || !a(r) || Object.keys(t).forEach(function(e) {
    r[e] !== void 0 && !i.includes(e) && (t[e] = r[e]);
  });
}
function b(t, r, i = "prop", e = "content") {
  t.forEach(function(n) {
    n.hasOwnProperty(i) && (u(e) ? e.forEach(function(o) {
      n.hasOwnProperty(o) && (n[o] = r[n[i]]);
    }) : n.hasOwnProperty(e) && (n[e] = r[n[i]]));
  });
}
function h(t, r = !0) {
  t === void 0 && (t = 16), r === void 0 && (r = !0);
  for (var i = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", e = i.length, n = "", o = 0; o < t; o++)
    n += i.charAt(Math.floor(Math.random() * e));
  return r ? new Date().getTime() + n : n;
}
function v(t) {
  return Object.prototype.toString.call(t).slice(8, -1) === "String";
}
function S(t) {
  return Object.prototype.toString.call(t).slice(8, -1) === "Null";
}
function O(t) {
  return Object.prototype.toString.call(t).slice(8, -1) === "Undefined";
}
function u(t) {
  return Object.prototype.toString.call(t).slice(8, -1) === "Array";
}
function a(t) {
  return Object.prototype.toString.call(t).slice(8, -1) === "Object";
}
function y(t) {
  return Object.prototype.toString.call(t).slice(8, -1) === "Number";
}
function N(t) {
  return t.slice(0, 1) === "_" && (t = t.slice(1)), t.replace(/([^_])_+([^_])/g, function(r, i, e) {
    return i + e.toUpperCase();
  });
}
function j(t) {
  return JSON.parse(JSON.stringify(t));
}
export {
  d as allGive,
  b as arrayGive,
  g as clearCookie,
  j as deepClone,
  p as getCookie,
  l as getStorage,
  u as isArray,
  S as isNull,
  y as isNumber,
  a as isObject,
  v as isString,
  O as isUndefined,
  s as openNewtab,
  h as randomName,
  c as setCookie,
  f as setStorage,
  N as underlineToHump
};
//# sourceMappingURL=index.js.map
