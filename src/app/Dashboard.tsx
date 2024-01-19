import { Home } from '@/types/product.interface'
import Hero from '@/ui/Hero'
import Catalog from '@/ui/catalog/Catalog'
import { isEmpty } from 'lodash'

import { FC } from 'react'

const Dashboard: FC<Home> = ({ newProducts, menProducts, womenProducts }) => {
	return (
		<>
			<Hero />
			<Catalog title="Последние Обновления" products={newProducts} />
			{!isEmpty(womenProducts) && (
				<Catalog title="Женские Украшения" products={womenProducts} />
			)}
			{!isEmpty(menProducts) && (
				<Catalog title="Мужские Украшения" products={menProducts} />
			)}
		</>
	)
}

export default Dashboard
