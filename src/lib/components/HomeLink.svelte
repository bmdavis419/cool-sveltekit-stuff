<script>
	export let linkText = '';
	export let linkPath = '';
</script>

<a href={linkPath} class="variant-ghost-primary p-4 hover:variant-ghost-secondary">
	<h1 class="text-lg font-semibold">{linkText}</h1>
</a>
