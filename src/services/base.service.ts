import axios from 'axios';
import { Cacheables } from 'cacheables';
import { MAX_AGE } from 'src/constants';
import { ObjectType, objCleanEmpty, objValueTrim } from '../utils';

const cache = new Cacheables({
  logTiming: false,
  log: false,
});

export default class BaseService {
  // 提供get请求方法
  static async get<T>(
    url: string,
    params: ObjectType = {},
    clearEmptyParams = true,
    isCache = true
  ): Promise<T> {
    params = clearEmptyParams ? objCleanEmpty(objValueTrim(params)) : params;
    return cache.cacheable(
      () =>
        axios.request({
          method: 'GET',
          url,
          params,
        }),
      BaseService.cacheKey('GET', url),
      {
        cachePolicy: 'max-age',
        maxAge: isCache ? MAX_AGE : 0,
      }
    );
  }

  // 提供post请求
  static async post<T>(
    url: string,
    postData: ObjectType,
    clearEmptyData = true,
    isCache = true
  ): Promise<T> {
    postData = clearEmptyData ? objCleanEmpty(objValueTrim(postData)) : objValueTrim(postData);
    return cache.cacheable(() => axios.post(url, postData), BaseService.cacheKey('POST', url), {
      cachePolicy: 'max-age',
      maxAge: isCache ? MAX_AGE : 0,
    });
  }

  // 提供patch请求
  static async patch<T>(
    url: string,
    id: number | string,
    postData: ObjectType = {},
    clearEmptyData = true,
    isCache = true
  ): Promise<T> {
    postData = clearEmptyData ? objCleanEmpty(objValueTrim(postData)) : objValueTrim(postData);
    return cache.cacheable(
      () => axios.patch(`${url}/${id}`, objValueTrim(postData ?? {})),
      BaseService.cacheKey('PATCH', `${url}/${id}`),
      {
        cachePolicy: 'max-age',
        maxAge: isCache ? MAX_AGE : 0,
      }
    );
  }

  // 提供put方法
  static async put<T>(
    url: string,
    id: number | string,
    postData: ObjectType = {},
    clearEmptyData = true,
    isCache = true
  ): Promise<T> {
    postData = clearEmptyData ? objCleanEmpty(objValueTrim(postData)) : objValueTrim(postData);
    return cache.cacheable(
      () => axios.put(`${url}/${id}`, objValueTrim(postData)),
      BaseService.cacheKey('PUT', `${url}/${id}`),
      {
        cachePolicy: 'max-age',
        maxAge: isCache ? MAX_AGE : 0,
      }
    );
  }

  // 提供delete请求
  static async delete<T>(url: string, id: number | string, isCache = true): Promise<T> {
    return cache.cacheable(
      () => axios.delete(`${url}/${id}`),
      BaseService.cacheKey('DELETE', `${url}/${id}`),
      {
        cachePolicy: 'max-age',
        maxAge: isCache ? MAX_AGE : 0,
      }
    );
  }

  private static cacheKey(method: string, url: string): string {
    return `${method}_${url}`;
  }
}
