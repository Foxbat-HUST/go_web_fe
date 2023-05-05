import { type User } from '@/model/user'
import { BaseApi } from './baseApi'

export interface AuthUserResponse extends User {
  token: string
}

export class AuthApi extends BaseApi {
  private static instance?: AuthApi
  private constructor() {
    super()
  }

  public static getInstance(): AuthApi {
    if (!AuthApi.instance) {
      AuthApi.instance = new AuthApi()
    }

    return AuthApi.instance
  }

  public login(email: string, password: string): Promise<any> {
    return this.$post<{}>('/auth/login', {
      email: email,
      password: password
    })
  }

  public authInit(): Promise<AuthUserResponse> {
    return this.$get<AuthUserResponse>('auth/init').then((val) => val.data)
  }
}
