function f(t, r) {
  !t || !r || localStorage.setItem(t, JSON.stringify(r));
}
function l(t) {
  if (!t)
    return null;
  var r = localStorage.getItem(t);
  if (r !== null)
    try {
      var n = JSON.parse(r);
      return n;
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
function c(t, r, n) {
  n === void 0 && (n = 365);
  var i = new Date();
  i.setTime(i.getTime() + n * 24 * 60 * 60 * 1e3);
  var e = "expires=" + i.toUTCString();
  document.cookie = t + "=" + r + "; " + e;
}
function p(t) {
  for (var r = t + "=", n = document.cookie.split(";"), i = 0; i < n.length; i++) {
    for (var e = n[i]; e.charAt(0) == " "; )
      e = e.substring(1);
    if (e.indexOf(r) != -1)
      return e.substring(r.length, e.length);
  }
  return "";
}
function g(t) {
  c(t, "", -1);
}
function b(t, r) {
  !a(t) || !a(r) || Object.keys(t).forEach(function(n) {
    r[n] !== void 0 && (t[n] = r[n]);
  });
}
function h(t, r, n = "prop", i = "content") {
  t.forEach(function(e) {
    e.hasOwnProperty(n) && (u(i) ? i.forEach(function(o) {
      e.hasOwnProperty(o) && (e[o] = r[e[n]]);
    }) : e.hasOwnProperty(i) && (e[i] = r[e[n]]));
  });
}
function d(t, r = !0) {
  t === void 0 && (t = 16), r === void 0 && (r = !0);
  for (var n = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", i = n.length, e = "", o = 0; o < t; o++)
    e += n.charAt(Math.floor(Math.random() * i));
  return r ? new Date().getTime() + e : e;
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
export {
  b as allGive,
  h as arrayGive,
  g as clearCookie,
  p as getCookie,
  l as getStorage,
  u as isArray,
  S as isNull,
  y as isNumber,
  a as isObject,
  v as isString,
  O as isUndefined,
  s as openNewtab,
  d as randomName,
  c as setCookie,
  f as setStorage
};
//# sourceMappingURL=index.js.map
