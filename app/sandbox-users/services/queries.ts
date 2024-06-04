import { useQuery } from "@tanstack/react-query"
import { Option } from "../types/option"
import axios from "axios"

const BACKEND_HOST = 'http://localhost:8080';

export function useStates() {
	return useQuery({
		queryKey: ['states'],
		queryFn: () =>
			axios
				.get<Option[]>(`${BACKEND_HOST}/states`)
				.then((res) => res.data),
	});
}

export function useLanguages() {
	return useQuery({
		queryKey: ['languages'],
		queryFn: () =>
			axios
				.get<Option[]>(`${BACKEND_HOST}/languages`)
				.then((res) => res.data),
	});
}

export function useGenders() {
	return useQuery({
		queryKey: ['genders'],
		queryFn: () =>
			axios
				.get<Option[]>(`${BACKEND_HOST}/genders`)
				.then((res) => res.data),
	});
}

export function useSkills() {
	return useQuery({
		queryKey: ['skills'],
		queryFn: () =>
			axios
				.get<Option[]>(`${BACKEND_HOST}/skills`)
				.then((res) => res.data),
	});
}