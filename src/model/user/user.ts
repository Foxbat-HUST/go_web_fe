export enum UserType {
  Admin = 'admin',
  Senior = 'senior',
  Junior = 'junior',
  None = 'none'
}

export interface User {
  id: number
  name: string
  email: string
  age: number
  type: UserType
}

export const emptyUser: User = {
  id: 0,
  name: '',
  email: '',
  age: 0,
  type: UserType.None
}
