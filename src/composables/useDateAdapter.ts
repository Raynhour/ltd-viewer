import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)

export default function useDateAdapter(date: dayjs.ConfigType) {
  const adapter = dayjs(date)

  function daysAgo() {
    return adapter.fromNow()
  }

  return { daysAgo }
}
