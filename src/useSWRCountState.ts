import useSWR from 'swr'

export const useSWRCountState = (initialCount: number) => {
  const { data: count, mutate: setCount } = useSWR('count', null, {
    fallbackData: initialCount,
  })
  const test = (count: number) => {
    setCount(10 * count)
  }
  return { count, setCount, test }
}
