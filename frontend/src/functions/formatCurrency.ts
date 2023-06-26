const formatCurrency = (amount: number | string): string => {
  // Parse the amount to float if it's a string
  const parsedAmount = typeof amount === 'string' ? parseFloat(amount) : amount
  // Format the number to BRL
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(parsedAmount)
}

export default formatCurrency
