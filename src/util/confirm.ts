export const ConfirmSymbol = Symbol('confirm')
export type ConfirmFunctionType = (title: string, content: string) => Promise<boolean>
export interface IConfirmModel {
  confirm: ConfirmFunctionType
}
