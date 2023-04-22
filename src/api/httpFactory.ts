import axios, { type AxiosInstance } from 'axios'

export class HttpFactory {
  private static instance: AxiosInstance | undefined

  public static init() {
    if (HttpFactory.instance) {
      throw new Error('does not call HttpFactory.init multiple times')
    }
    HttpFactory.instance = axios.create({
      baseURL: import.meta.env.BASE_URL
    })
  }

  public static getHttpInstance(): AxiosInstance {
    if (!HttpFactory.instance) {
      throw new Error('must call HttpFactory.init first')
    }

    return HttpFactory.instance
  }
}
