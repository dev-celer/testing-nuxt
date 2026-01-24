import { getCounter } from '../utils/counter'

export default defineEventHandler(() => {
  return { count: getCounter() }
})