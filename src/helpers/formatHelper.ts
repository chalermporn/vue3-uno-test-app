const currentLocale = (new Intl.NumberFormat()
).resolvedOptions().locale

export const currencyUSD = (e?: number): string => e ? `${e.toLocaleString(currentLocale, { style: 'currency', currency: 'USD', minimumFractionDigits: 0, maximumFractionDigits: 2 })}` : '-'

export const currencyTHB = (e?: number): string => e ? `${e.toLocaleString('th-TH', { style: 'currency', currency: 'THB', minimumFractionDigits: 0, maximumFractionDigits: 2 })}` : '-' 