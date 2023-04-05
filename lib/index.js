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
  var n = new Date();
  n.setTime(n.getTime() + i * 24 * 60 * 60 * 1e3);
  var e = "expires=" + n.toUTCString();
  document.cookie = t + "=" + r + "; " + e;
}
function p(t) {
  for (var r = t + "=", i = document.cookie.split(";"), n = 0; n < i.length; n++) {
    for (var e = i[n]; e.charAt(0) == " "; )
      e = e.substring(1);
    if (e.indexOf(r) != -1)
      return e.substring(r.length, e.length);
  }
  return "";
}
function g(t) {
  c(t, "", -1);
}
function d(t, r) {
  !a(t) || !a(r) || Object.keys(t).forEach(function(i) {
    r[i] !== void 0 && (t[i] = r[i]);
  });
}
function v(t, r, i, n) {
  i === void 0 && (i = "prop"), n === void 0 && (n = "content"), t.forEach(function(e) {
    e.hasOwnProperty(i) && (u(n) ? n.forEach(function(o) {
      e.hasOwnProperty(o) && (e[o] = r[e[i]]);
    }) : e.hasOwnProperty(n) && (e[n] = r[e[i]]));
  });
}
function b(t, r = !0) {
  t === void 0 && (t = 16), r === void 0 && (r = !0);
  for (var i = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", n = i.length, e = "", o = 0; o < t; o++)
    e += i.charAt(Math.floor(Math.random() * n));
  return r ? new Date().getTime() + e : e;
}
function h(t) {
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
function j(t) {
  return Object.prototype.toString.call(t).slice(8, -1) === "Number";
}
export {
  d as allGive,
  v as arrayGive,
  g as clearCookie,
  p as getCookie,
  l as getStorage,
  u as isArray,
  S as isNull,
  j as isNumber,
  a as isObject,
  h as isString,
  O as isUndefined,
  s as openNewtab,
  b as randomName,
  c as setCookie,
  f as setStorage
};
//# sourceMappingURL=index.js.map
