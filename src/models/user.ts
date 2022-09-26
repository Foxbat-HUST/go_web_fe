export interface User {
    id?: number
    name: string
    email: string
    type: UserType
}

export enum UserType {
    Super = "super",
    Admin = "admin",
    User = "user",
    None = "none",
}

// export const emptyUser: User = {
//     name: "",
//     email: "",
//     type: UserType.None,
// }