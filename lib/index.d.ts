/**
 * 设置localStorage数据，item值非json对象，请直接localStorage.setItem
 * @param {string} item 键名
 * @param {any} data 键值
 * @return {*}
 */
export declare function setStorage(item: string, data: any): void;
/**
 * 获取localStorage数据，item值非json对象，请直接localStorage.setItem
 * @param item 键名
 */
export declare function getStorage(item: string): any;
/**
 * 打开新的标签页
 * @param url 地址
 */
export declare function openNewtab(url: string): void;
/**
 * 设置cookie
 * @param name key
 * @param value 值
 * @param exdays 过期时间 天
 */
export declare function setCookie(name: string, value: any, exdays?: any): void;
/**
 * 获取cookie
 * @param  name key
 */
export declare function getCookie(name: string): string;
/**
 * 清除cookie
 * @param name key
 */
export declare function clearCookie(name: string): void;
/**
 * 遍历目标对象的每个key分别，从源对象获取数据并赋值，仅支持{}对象。
 * @param {object} target 目标对象
 * @param {object} source 源对象
 * @param {Array<string>} exclude  需要排除复制的key数组
 */
export declare function allGive(target: object, source: object, exclude?: string[]): void;
/**
 * 遍历目标数组 从源对象获取数据并赋值。
 * @param target array 目标对象
 * @param source {} 源对象
 * @param key 关联字段key
 * @param content 要修改的字段 字段名string 或数组
 */
export declare function arrayGive(targrt: any, sources: any, key?: string, content?: any): void;
/**
 * 生成随机字符串
 * @param len 生成的字符串长度(不包含时间戳的长度)
 * @param time 是否要在生成的字符串前面加时间戳  默认为true
 */
export declare function randomName(len?: number, time?: boolean): string;
/**
 * 是否为字符串
 * @param o 入参
 */
export declare function isString(o: any): boolean;
/**
 * 是否为null
 * @param o 入参
 */
export declare function isNull(o: any): boolean;
/**
 * 是否为undefined
 * @param o 入参
 */
export declare function isUndefined(o: any): boolean;
/**
 * 是否为数组
 * @param o 入参
 */
export declare function isArray(o: any): boolean;
/**
 * 是否为对象
 * @param o 入参
 */
export declare function isObject(o: any): boolean;
/**
 * 是否为数字
 * @param o 入参
 */
export declare function isNumber(o: any): boolean;
/**
 * 下划线转换驼峰
 * @param {string} str 字符串
 */
export declare function underlineToHump(str: string): string;
/**
 * 深拷贝
 * @param obj {any}
 * @returns 深拷贝后的对象
 */
export declare function deepClone(obj: any): any;
