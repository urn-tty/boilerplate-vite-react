import useSWR from 'swr'

export const useSWRCountState = (
  initialCount: number,
): [number, (count: number) => void] => {
  const { data: count, mutate: setCount } = useSWR('count', null, {
    fallbackData: initialCount,
  })
  return [count as number, setCount]
}