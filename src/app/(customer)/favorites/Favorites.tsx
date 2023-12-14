'use client'

import { useProfile } from '@/hooks/useProfile'
import Catalog from '@/ui/catalog/Catalog'

export default function FavoritesPage() {
	const { profile } = useProfile()
	return <Catalog products={profile?.favorites || []} title="Мои Избранные" />
}
