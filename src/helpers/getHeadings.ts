export function getHeadings(source: string) {
  const headingLines = source
    .split('\n')
    .filter(line => line.match(/^###*\s/))

  const headings = headingLines.map(raw => {
    const title = raw.replace(/^###*\s/, '').trim()
    const level = raw.slice(0, 3) === '###' ? 3 : 2
    const slug = title.
      toLowerCase()
      .replace(/[^\w\sáéíóúÁÉÍÓÚñÑüÜ-]/g, '')
      .replace(/\s+/g, '-')

    return { slug, title, level }
  })

  const introductionHeading = {
    slug: 'introduccion',
    title: 'Introducción',
    level: 2
  }

  return [introductionHeading, ...headings]
}
