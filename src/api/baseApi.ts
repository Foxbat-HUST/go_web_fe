import { HttpFactory } from './httpFactory'
import { useAuthStore } from '@/stores/auth'
import { type AxiosInstance, type AxiosResponse } from 'axios'

export class BaseApi {
  private http: AxiosInstance = HttpFactory.getHttpInstance()
  protected $post<T = any>(url: string, payload: any): Promise<AxiosResponse<T>> {
    const authStore = useAuthStore()
    return this.http.post<T>(url, payload, {
      headers: { Authorization: `Bearer ${authStore.token}` }
    })
  }

  protected $get<T = any>(url: string): Promise<AxiosResponse<T>> {
    const authStore = useAuthStore()
    return this.http.get<T>(url, { headers: { Authorization: `Bearer ${authStore.token}` } })
  }

  protected $delete<T = any>(url: string): Promise<AxiosResponse<T>> {
    const authStore = useAuthStore()
    return this.http.delete<T>(url, { headers: { Authorization: `Bearer ${authStore.token}` } })
  }

  protected $put<T = any>(url: string, payload: any): Promise<AxiosResponse<T>> {
    const authStore = useAuthStore()
    return this.http.put<T>(url, payload, {
      headers: { Authorization: `Bearer ${authStore.token}` }
    })
  }
}
