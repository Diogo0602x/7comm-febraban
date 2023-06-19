const printPrice = (
  value: any,
  currencyCode?: string,
  locale?: any,
): string => {
  if (typeof value !== 'string') {
    return new Intl.NumberFormat(locale || 'pt-BR', {
      style: 'currency',
      currency: currencyCode || 'BRL',
    }).format(value)
  }

  const range = value.split('-')
  if (range.length === 1) {
    return new Intl.NumberFormat(locale || 'pt-BR', {
      style: 'currency',
      currency: currencyCode || 'BRL',
    }).format(parseFloat(value))
  }

  const formattedRange = range
    .map((val) =>
      new Intl.NumberFormat(locale || 'pt-BR', {
        style: 'currency',
        currency: currencyCode || 'BRL',
      }).format(parseFloat(val.trim())),
    )
    .join(' - ')

  return formattedRange
}

export { printPrice }
