import qs from 'qs';
import { ObjectType } from './obj-type';
// eslint-disable-next-line
export const isFalsy = (value: unknown) => (value === 0 ? false : !value);

// 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object: ObjectType): Record<string, unknown> => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

/**
 * @Author: 水痕
 * @Date: 2021-06-29 08:09:23
 * @LastEditors: 水痕
 * @Description: 将对象转行为字符串
 * @param {object} data
 * @return {*}
 */
export const object2str = (data: ObjectType): string => {
  return qs.stringify(data);
};

/**
 * @Author: 水痕
 * @Date: 2021-06-29 08:11:30
 * @LastEditors: 水痕
 * @Description: 将对象参数转行为字符串参数
 * @param {ObjectType} data
 * @return {*}
 */
export const urlObjectParams = (data: ObjectType): string => {
  return object2str(cleanObject(data));
};

/**
 * @Author: 水痕
 * @Date: 2021-08-11 12:45:40
 * @LastEditors: 水痕
 * @Description: 去除参数中的空格字符比如"xxx   " --> "xxx"
 * @param {ObjectType} obj
 * @param {*} isReturnArray
 * @return {*}
 */
export const objValueTrim = (obj: ObjectType, isReturnArray: boolean = true): ObjectType => {
  const newObj: ObjectType = {};
  for (const key in obj) {
    if (Array.isArray(obj[key]) && isReturnArray) {
      newObj[key] = obj[key].toString();
    } else {
      newObj[key] = Number.isFinite(obj[key])
        ? obj[key].toString().trim()
        : obj[key]
        ? obj[key].toString().trim()
        : '';
    }
  }
  return newObj;
};

// 过滤数据中的空
export const objCleanEmpty = (obj: ObjectType): ObjectType => {
  const newParams: ObjectType = {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      const element = obj[key];
      if (element !== null && element !== '') {
        newParams[key] = element;
      }
    }
  }
  return newParams;
};
