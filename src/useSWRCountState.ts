import useSWR from 'swr'

export const useSWRCountState = (
  initialCount: number,
): [number, (count: number) => void, (count: number) => void] => {
  const { data: count, mutate: setCount } = useSWR('count', null, {
    fallbackData: initialCount,
  })
  const test = (count: number) => {
    setCount(10 * count)
  }
  return [count as number, setCount, test]
}
