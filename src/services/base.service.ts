import axios from 'axios';
import { ObjectType, objCleanEmpty, objValueTrim } from '../utils';

export default class BaseService {
  // 提供get请求方法
  static async get<T>(url: string, params: ObjectType = {}, clearEmptyParams = true): Promise<T> {
    params = clearEmptyParams ? objCleanEmpty(objValueTrim(params)) : params;
    return await axios.request({
      method: 'GET',
      url,
      params,
    });
  }

  // 提供post请求
  static async post<T>(url: string, postData: ObjectType, clearEmptyData = true): Promise<T> {
    postData = clearEmptyData ? objCleanEmpty(objValueTrim(postData)) : objValueTrim(postData);
    return await axios.post(url, postData);
  }

  // 提供patch请求
  static async patch<T>(
    url: string,
    id: number | string,
    postData: ObjectType = {},
    clearEmptyData = true
  ): Promise<T> {
    postData = clearEmptyData ? objCleanEmpty(objValueTrim(postData)) : objValueTrim(postData);
    return await axios.patch(`${url}/${id}`, objValueTrim(postData ?? {}));
  }

  // 提供put方法
  static async put<T>(
    url: string,
    id: number | string,
    postData: ObjectType = {},
    clearEmptyData = true
  ): Promise<T> {
    postData = clearEmptyData ? objCleanEmpty(objValueTrim(postData)) : objValueTrim(postData);
    return await axios.put(`${url}/${id}`, objValueTrim(postData ?? {}));
  }

  // 提供delete请求
  static async delete<T>(url: string, id: number | string): Promise<T> {
    return await axios.delete(`${url}/${id}`);
  }
}
