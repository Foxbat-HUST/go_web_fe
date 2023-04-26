import {type AxiosInstance, type AxiosResponse } from 'axios'
import { HttpFactory } from './httpFactory'
import { useAuthStore } from '@/stores/auth'
export class BaseApi {
  private http: AxiosInstance = HttpFactory.getHttpInstance()
  protected Post<T = any>(url: string, payload: any): Promise<AxiosResponse<T>> {
    const authStore = useAuthStore()
    return this.http.post<T>(url, payload, {headers: {'Authorization': `Bearer ${authStore.token}`}})
  }

  protected Get<T = any>(url: string): Promise<AxiosResponse<T>> {
    const authStore = useAuthStore()
    return this.http.get<T>(url,{headers: {'Authorization': `Bearer ${authStore.token}`}})
  }
}
