export const currencyUSD = (e?: number): string => e ? `${e.toLocaleString('th-TH', { style: 'currency', currency: 'THB', minimumFractionDigits: 0, maximumFractionDigits: 2 })}` : '-'

export const price2 = (e?: number): string => e ? `${e.toLocaleString('th-TH', { style: 'currency', currency: 'THB', minimumFractionDigits: 0, maximumFractionDigits: 2 })}` : '-' 