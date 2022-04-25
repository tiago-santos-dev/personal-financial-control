export const CurrencyBRLFormat = (amount: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount);

export const DateTimeFormat = (date: string) =>
  new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric',
    hour12: false,
    timeZone: 'America/Sao_Paulo'
  }).format(
    new Date(date)
  )