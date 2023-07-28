export function getHeadings(source: string) {
  const headingLines = source
    .split('\n')
    .filter((line) => {
      return line.match(/^###*\s/)
    })

  return headingLines.map((raw) => {
    const text = raw.replace(/^###*\s/, '')
    const level = raw.slice(0, 3) === '###' ? 3 : 2

    return { text, level }
  })
}
