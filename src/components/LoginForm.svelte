<script lang="ts">
	import { browser } from '$app/env';
	import { userStore } from '@/stores/user';

	import { onMount } from 'svelte';

	import { writable } from 'svelte/store';

	import FormGroup from './FormGroup.svelte';

	interface LoginForm {
		email: string;
		password: string;
	}

	let loginForm = writable<LoginForm>({
		email: '',
		password: ''
	});

	function handleSubmit() {
		alert(JSON.stringify($loginForm));
	}

	onMount(() => {
		console.log(browser, $userStore);
	});
</script>

<div class="w-full max-w-md bg-white shadow rounded-lg py-8 px-10">
	<h1 class="text-center mb-5">Simple todos</h1>
	<form class="space-y-5" on:submit|preventDefault={handleSubmit}>
		<FormGroup label="Email">
			<input
				class="form-control"
				type="email"
				placeholder="Enter a valid email address"
				bind:value={$loginForm.email}
				required
				maxlength="128"
			/>
		</FormGroup>
		<FormGroup label="Password">
			<input
				class="form-control"
				type="password"
				placeholder="Enter your password"
				bind:value={$loginForm.password}
				required
				maxlength="255"
			/>
		</FormGroup>
		<button class="btn btn-block" type="submit">Login</button>
	</form>
</div>
