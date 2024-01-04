/**
 * 设置localStorage数据，item值非json对象，请直接localStorage.setItem
 * @param {string} item 键名
 * @param {any} data 键值
 * @return {*}
 */
export function setStorage(item: string, data: any) {
  if (!item || !data) return;
  localStorage.setItem(item, JSON.stringify(data));
}
/**
 * 获取localStorage数据，item值非json对象，请直接localStorage.setItem
 * @param item 键名
 */
export function getStorage(item: string) {
  if (!item) return null;
  var localdata = localStorage.getItem(item);
  if (localdata !== null) {
    try {
      var formatData = JSON.parse(localdata);
      return formatData;
    } catch (e) {
      return localdata;
    }
  } else {
    return null;
  }
}

/**
 * 打开新的标签页
 * @param url 地址
 */
export function openNewtab(url: string) {
  var a = document.createElement('a');
  a.setAttribute('href', url);
  a.setAttribute('target', '_blank');
  a.setAttribute('id', 'camnpr');
  document.body.appendChild(a);
  a.click();
}

/**
 * 设置cookie
 * @param name key
 * @param value 值
 * @param exdays 过期时间 天
 */
export function setCookie(name: string, value: any, exdays?: any) {
  if (exdays === void 0) {
    exdays = 365;
  }
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = name + '=' + value + '; ' + expires;
}

/**
 * 获取cookie
 * @param  name key
 */
export function getCookie(name: string) {
  var _name = name + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1);
    if (c.indexOf(_name) != -1) return c.substring(_name.length, c.length);
  }
  return '';
}

/**
 * 清除cookie
 * @param name key
 */
export function clearCookie(name: string) {
  setCookie(name, '', -1);
}

/**
 * 遍历目标对象的每个key分别，从源对象获取数据并赋值，仅支持{}对象。
 * @param {object} target 目标对象
 * @param {object} source 源对象
 * @param {Array<string>} exclude  需要排除复制的key数组
 */
export function allGive(target: object, source: object, exclude: string[] = []) {
  if (!isObject(target) || !isObject(source)) return;
  Object.keys(target).forEach(function (key) {
    if (source[key] !== undefined && !exclude.includes(key)) {
      target[key] = source[key];
    }
  });
}

/**
 * 遍历目标数组 从源对象获取数据并赋值。
 * @param target array 目标对象
 * @param source {} 源对象
 * @param key 关联字段key
 * @param content 要修改的字段 字段名string 或数组
 */
export function arrayGive(targrt: any, sources: any, key: string = 'prop', content: any = 'content') {
  targrt.forEach(function (element) {
    if (element.hasOwnProperty(key)) {
      if (isArray(content)) {
        content.forEach(function (contentItem) {
          if (element.hasOwnProperty(contentItem)) {
            element[contentItem] = sources[element[key]];
          }
        });
      } else {
        if (element.hasOwnProperty(content)) {
          element[content] = sources[element[key]];
        }
      }
    }
  });
}

/**
 * 生成随机字符串
 * @param len 生成的字符串长度(不包含时间戳的长度)
 * @param time 是否要在生成的字符串前面加时间戳  默认为true
 */
export function randomName(len?: number, time: boolean = true) {
  if (len === void 0) {
    len = 16;
  }
  if (time === void 0) {
    time = true;
  }
  var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
  var maxPos = chars.length;
  var str = '';
  for (var i = 0; i < len; i++) {
    str += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  if (time) {
    return new Date().getTime() + str;
  } else {
    return str;
  }
}

/**
 * 是否为字符串
 * @param o 入参
 */
export function isString(o: any) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'String';
}

/**
 * 是否为null
 * @param o 入参
 */
export function isNull(o: any) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Null';
}
/**
 * 是否为undefined
 * @param o 入参
 */
export function isUndefined(o: any) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Undefined';
}

/**
 * 是否为数组
 * @param o 入参
 */
export function isArray(o: any) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Array';
}

/**
 * 是否为对象
 * @param o 入参
 */
export function isObject(o: any) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}

/**
 * 是否为数字
 * @param o 入参
 */
export function isNumber(o: any) {
  return Object.prototype.toString.call(o).slice(8, -1) === 'Number';
}

/**
 * 下划线转换驼峰
 * @param {string} str 字符串
 */
export function underlineToHump(str: string): string {
  // 如果首字母是_，执行 replace 时会多一个_，这里需要去掉
  if (str.slice(0, 1) === '_') {
    str = str.slice(1);
  }
  return str.replace(/([^_])_+([^_])/g, function ($0, $1, $2) {
    return $1 + $2.toUpperCase();
  });
}
