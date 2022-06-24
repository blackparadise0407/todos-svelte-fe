<script>
	export let label = '';
	export let error = '';
</script>

<div class="form-group my-2 space-y-1">
	<!-- svelte-ignore a11y-label-has-associated-control -->
	<label class="text-sm font-medium" htmlfor={label}>{label}</label>
	<slot />
	{#if error}
		<p>{error}</p>
	{/if}
</div>
