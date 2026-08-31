const MONTHS_PT = [
  'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
  'jul', 'ago', 'set', 'out', 'nov', 'dez',
]

function parseLocalDate(isoDate) {
  const [year, month, day] = isoDate.split('-').map(Number)
  return new Date(year, month - 1, day)
}

function formatMonthYear(date) {
  return `${MONTHS_PT[date.getMonth()]} de ${date.getFullYear()}`
}

function monthsBetween(start, end) {
  const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
  return end.getDate() >= start.getDate() ? months : months - 1
}

function formatDuration(startDate) {
  const start = parseLocalDate(startDate)
  const totalMonths = Math.max(monthsBetween(start, new Date()), 0) + 1
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  const parts = []
  if (years > 0) parts.push(`${years} ${years === 1 ? 'ano' : 'anos'}`)
  if (months > 0 || years === 0) parts.push(`${months} ${months === 1 ? 'mês' : 'meses'}`)

  return parts.join(' e ')
}

export function formatOngoingPeriod(startDate) {
  const start = parseLocalDate(startDate)
  return `${formatMonthYear(start)} - até o momento · ${formatDuration(startDate)}`
}
