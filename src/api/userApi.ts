import { type User } from '@/model/user'
import { BaseApi } from '@/api/baseApi'
import { type PageOption } from '@/api/common'

export interface UserPageData {
  user: Array<User>
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
    return this.Get<UserPageData>(`api/v1/users${queryParam}`).then((res) => res.data)
  }
}
