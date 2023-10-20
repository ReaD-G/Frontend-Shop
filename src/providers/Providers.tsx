'use client'

import '@/assets/styles/globals.scss'
import { Provider } from 'react-redux'

import AuthProvider from '@/providers/auth-provider/AuthProvider'
import { persistor, store } from '@/store/store'
import { NextUIProvider } from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
import { PersistGate } from 'redux-persist/integration/react'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export default function App({ children }: PropsWithChildren) {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<NextUIProvider>
						<AuthProvider>{children}</AuthProvider>
					</NextUIProvider>
				</PersistGate>
			</Provider>
		</QueryClientProvider>
	)
}
