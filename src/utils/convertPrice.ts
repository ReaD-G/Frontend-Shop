export const convertPrice = (price: number) => {
	return price.toLocaleString('be', {
		style: 'currency',
		currency: 'BYN'
	})
}
