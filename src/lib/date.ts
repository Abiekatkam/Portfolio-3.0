import React from 'react'
import { parseISO, format } from 'date-fns'

interface DateDisplayProps {
  dateString: string
  dateFormat?: string
}

const DateDisplay: React.FC<DateDisplayProps> = ({
  dateString,
  dateFormat = 'LLL yyyy',
}) => {
  const date = parseISO(dateString);

  return React.createElement('time', { dateTime: dateString }, format(date, dateFormat))
}

export default DateDisplay
