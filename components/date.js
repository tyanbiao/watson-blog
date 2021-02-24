import { parseISO, format } from 'date-fns'

export default function Date({dateString, ...otherProps}) {
  const date = parseISO(dateString)
  return <time dateTime={dateString} {...otherProps}>{format(date, 'LLLL d, yyyy')}</time>
}