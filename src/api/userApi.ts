import { type User } from '@/model/user'
import { BaseApi } from '@/api/baseApi'
import { type PageOption } from '@/api/common'

export interface UserPageData {
  users: Array<User>
  count: number
}

export class UserApi extends BaseApi {
  private static instance?: UserApi
  private constructor() {
    super()
  }

  public static getInstance(): UserApi {
    if (!UserApi.instance) {
      UserApi.instance = new UserApi()
    }

    return UserApi.instance
  }

  public list(options?: PageOption): Promise<UserPageData> {
    let queryParam = ''
    if (options) {
      queryParam = `?p=${options.pageIndex}&l=${options.itemPerPage}`
    }
    return this.$get<UserPageData>(`api/v1/users${queryParam}`).then((res) => res.data)
  }

  public delete(id: number): Promise<void> {
    return this.$delete<void>(`api/v1/users/${id}`).then((res) => res.data)
  }

  public get(id: string): Promise<User> {
    return this.$get<User>(`api/v1/users/${id}`).then((res) => res.data)
  }
}
