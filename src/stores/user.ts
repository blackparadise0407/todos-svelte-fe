import { writable } from 'svelte/store';

interface User {
	id: string;
	email: string;
	username: string;
}

export const userStore = writable<User>({
	id: crypto.randomUUID(),
	email: 'khoa@gmail.com',
	username: 'khoa'
});
