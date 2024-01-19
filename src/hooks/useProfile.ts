import { useTypedSelector } from './useTypedSelector'

export const useProfile = () => {
	return useTypedSelector(state => state.profile)
}
