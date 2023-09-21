export const convertPrice = (price: number) => {
	return price.toLocaleString('ru-BY', {
		style: 'currency',
		currency: 'BYN'
	})
}
