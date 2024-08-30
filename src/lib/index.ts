import type {Option} from '../components/custom-select/types'

export function mockAPIRequest<T>(option: string) {
	return new Promise<Option<T>>((res) => {
		setTimeout(() => res({value: option as T, label: option}), 3000)
	})
}