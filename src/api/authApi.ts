import { UserType, type User } from '@/model/user'
import { BaseApi } from './baseApi'

export interface AuthUserResponse {
  token: string
  user: User
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

  public getAuthUser(): Promise<AuthUserResponse> {
    return Promise.resolve<AuthUserResponse>({
      token: 'abc',
      user: {
        id: 1,
        age: 29,
        email: 'anpq@gmail.com',
        name: 'pham quoc an',
        type: UserType.Admin
      }
    })
  }
}
