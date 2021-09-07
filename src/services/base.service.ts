import axios from 'axios';
import { cleanObject, urlObjectParams, ObjectType, objValueTrim } from '../utils';

export default class BaseService {
  // 提供get请求方法
  static async get<T>(url: string, params?: ObjectType): Promise<T> {
    if (params) {
      // 先去除左右空格，然后去除空对象，最后转换为字符类型
      return await axios.get(`${url}?${urlObjectParams(cleanObject(objValueTrim(params)))}`);
    } else {
      return await axios.get(url);
    }
  }

  // 提供post请求
  static async post<T>(url: string, postData: ObjectType): Promise<T> {
    return await axios.post(url, objValueTrim(postData));
  }

  // 提供patch请求
  static async patch<T>(url: string, id: number | string, postData?: ObjectType): Promise<T> {
    return await axios.patch(`${url}/${id}`, objValueTrim(postData ?? {}));
  }

  // 提供delete请求
  static async delete<T>(url: string, id: number | string): Promise<T> {
    return await axios.delete(`${url}/${id}`);
  }
}
