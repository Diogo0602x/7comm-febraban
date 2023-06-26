const formatCurrency = (amount: number | string): string => {
  const parsedAmount = typeof amount === 'string' ? parseFloat(amount) : amount

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(parsedAmount)
}

export default formatCurrency
