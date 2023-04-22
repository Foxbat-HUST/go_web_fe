import axios, { Axios, type AxiosInstance } from 'axios'
import { HttpFactory } from './httpFactory'
export class BaseApi {
  private http: AxiosInstance = HttpFactory.getHttpInstance()
}
