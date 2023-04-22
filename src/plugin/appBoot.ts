import type { App } from 'vue'
import { Axios } from 'axios'
import { HttpFactory } from '@/api/httpFactory'

export default function appBoot(app: App): void {
  HttpFactory.init()
}
