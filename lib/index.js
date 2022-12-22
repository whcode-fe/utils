function l(t, e) {
  !t || !e || localStorage.setItem(t, JSON.stringify(e));
}
function u(t) {
  if (!t)
    return null;
  var e = localStorage.getItem(t);
  if (e !== null)
    try {
      var r = JSON.parse(e);
      return r;
    } catch {
      return e;
    }
  else
    return null;
}
function f(t) {
  var e = document.createElement("a");
  e.setAttribute("href", t), e.setAttribute("target", "_blank"), e.setAttribute("id", "camnpr"), document.body.appendChild(e), e.click();
}
function c(t, e, r) {
  r === void 0 && (r = 365);
  var i = new Date();
  i.setTime(i.getTime() + r * 24 * 60 * 60 * 1e3);
  var n = "expires=" + i.toUTCString();
  document.cookie = t + "=" + e + "; " + n;
}
function s(t) {
  for (var e = t + "=", r = document.cookie.split(";"), i = 0; i < r.length; i++) {
    for (var n = r[i]; n.charAt(0) == " "; )
      n = n.substring(1);
    if (n.indexOf(e) != -1)
      return n.substring(e.length, n.length);
  }
  return "";
}
function g(t) {
  c(t, "", -1);
}
function p(t, e) {
  !a(t) || !a(e) || Object.keys(t).forEach(function(r) {
    e[r] !== void 0 && (t[r] = e[r]);
  });
}
function b(t, e = !0) {
  t === void 0 && (t = 16), e === void 0 && (e = !0);
  for (var r = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", i = r.length, n = "", o = 0; o < t; o++)
    n += r.charAt(Math.floor(Math.random() * i));
  return e ? new Date().getTime() + n : n;
}
function d(t) {
  return Object.prototype.toString.call(t).slice(8, -1) === "String";
}
function v(t) {
  return Object.prototype.toString.call(t).slice(8, -1) === "Null";
}
function S(t) {
  return Object.prototype.toString.call(t).slice(8, -1) === "Undefined";
}
function h(t) {
  return Object.prototype.toString.call(t).slice(8, -1) === "Array";
}
function a(t) {
  return Object.prototype.toString.call(t).slice(8, -1) === "Object";
}
function m(t) {
  return Object.prototype.toString.call(t).slice(8, -1) === "Number";
}
export {
  p as allGive,
  g as clearCookie,
  s as getCookie,
  u as getStorage,
  h as isArray,
  v as isNull,
  m as isNumber,
  a as isObject,
  d as isString,
  S as isUndefined,
  f as openNewtab,
  b as randomName,
  c as setCookie,
  l as setStorage
};
//# sourceMappingURL=index.js.map
