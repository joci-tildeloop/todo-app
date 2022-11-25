<script lang="ts">
	import type { ITag } from '$lib/types';
	import { createEventDispatcher } from 'svelte';
	import Icon from './Icon.svelte';

	export let tags: Array<ITag> = [];
	export let extendable = false;

	let newTag = '';
	let showTagInput = false;
	let extendButton: HTMLButtonElement;

	$: extendButton?.focus();

	const dispatch = createEventDispatcher<{ extend: string }>();
	const extend = (event: Event) => {
		dispatch('extend', newTag);
		showTagInput = !showTagInput;
		newTag = '';
	};
</script>

<div class="tag-container">
	<label for="tag-container">
		<Icon name="label" />
	</label>
	{#each tags as tag (tag.UUID)}
		<div class="tag">{tag.title}</div>
	{/each}
	{#if extendable}
		{#if showTagInput}
			<form on:submit|preventDefault={extend}>
				<!-- svelte-ignore a11y-autofocus -->
				<input autofocus type="text" class="modal-input-tag" bind:value={newTag} />
			</form>
		{:else}
			<button
				type="text"
				class="modal-add-tag"
				on:click={(e) => (showTagInput = true)}
				bind:this={extendButton}
			>
				Add tag
			</button>
		{/if}
	{/if}
</div>

<style>
	.tag-container {
		display: flex;
		flex-direction: row;
	}

	.tag {
		padding-right: 0.6em;
		padding-left: 0.6em;
		border-radius: 10rem;
		color: #fff !important;
		font-size: 0.8rem;
		padding-top: 0.1rem;
		padding-bottom: 0.1rem;
		white-space: nowrap;
		margin-right: 3px;
		margin-bottom: 0.2rem;
		display: inline-block;
		background-color: #818a91;
	}
</style>
