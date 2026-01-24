import { incrementCounter, getCounter } from '../utils/counter'

export default defineEventHandler(() => {
  incrementCounter()
  return { count: getCounter() }
})