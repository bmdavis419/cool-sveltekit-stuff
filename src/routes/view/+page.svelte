<script>
	import { setupViewTransition } from 'sveltekit-view-transition';

	const { transition } = setupViewTransition();
</script>

<div class="variant-ghost-primary p-4 card" use:transition={'viewLink'}>
	<h1 class="card-header font-semibold text-2xl text-surface-100 pb-10">View Transitions</h1>
	<p class="card-content px-8 pb-10">
		These are a clean way to animate the flow between pages creating a super clean look/flow.
	</p>
	<footer class="card-footer">
		<a
			class="btn bg-secondary-100 text-surface-900"
			href="https://svelte.dev/blog/view-transitions"
			target="_blank">Learn More</a
		>
		<a href="/" class="btn bg-secondary-100 text-surface-900">Home</a>
	</footer>
</div>
