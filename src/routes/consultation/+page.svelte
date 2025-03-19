<script>
	import { afterUpdate } from 'svelte';
	import { askAI } from '../../lib/api.js';
	import { marked } from 'marked';

	let messages = [];
	let newMessage = '';
	let isTyping = false;
	let chatContainer;

	async function sendMessage() {
		const trimmedMessage = newMessage.trim();
		if (!trimmedMessage) return;

		messages = [...messages, { text: trimmedMessage, isUser: true }];
		newMessage = '';
		isTyping = true;
		scrollToBottom();

		try {
			const response = await askAI(trimmedMessage);
			messages = [
				...messages,
				{ text: response?.result || "Sorry, I couldn't understand.", isUser: false }
			];
		} catch (error) {
			messages = [...messages, { text: 'Error communicating with AI.', isUser: false }];
		} finally {
			isTyping = false;
			scrollToBottom();
		}
	}

	function handleKeydown(event) {
		if (event.key === 'Enter' && !event.shiftKey) {
			event.preventDefault();
			sendMessage();
		}
	}

	function scrollToBottom() {
		chatContainer?.scrollTo({ top: chatContainer.scrollHeight, behavior: 'smooth' });
	}

	afterUpdate(scrollToBottom);
</script>

<svelte:head>
	<title>AI Consultation - MindfulAI</title>
	<meta name="description" content="Start your AI-powered mental health consultation" />
</svelte:head>

<div class="max-w-4xl mx-auto py-3 sm:py-8">
	<div class="card min-h-[600px] flex flex-col">
		<div class="flex items-center space-x-4 p-4 border-b">
			<div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center">
				<span class="text-xl">💖</span>
			</div>
			<div>
				<h2 class="font-semibold">MindfulAI Assistant</h2>
				<p class="text-sm text-gray-500">Always here to listen and support</p>
			</div>
		</div>

		<div
			class="flex-1 overflow-y-auto p-4 space-y-4 max-h-[56dvh] sm:max-h-[45dvh]"
			bind:this={chatContainer}
		>
			{#if messages.length === 0}
				<div class="text-center text-gray-500 mt-8">
					<p class="text-xl mb-4">👋 Welcome to your safe space</p>
					<p>Share what's on your mind, and I'll be here to listen and support you.</p>
				</div>
			{/if}

			{#each messages as message}
				<div class={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
					<div
						class={`max-w-[80%] rounded-lg p-3 ${
							message.isUser
								? 'bg-primary-500 text-white rounded-br-none'
								: 'bg-gray-100 text-gray-800 rounded-bl-none'
						}`}
					>
						{@html marked(message.text)}
					</div>
				</div>
			{/each}

			{#if isTyping}
				<div class="flex justify-start">
					<div class="bg-gray-100 rounded-lg p-3 rounded-bl-none">
						<div class="flex space-x-2">
							{#each [0, 1, 2] as i}
								<div
									class="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
									style="animation-delay: {i * 0.2}s"
								></div>
							{/each}
						</div>
					</div>
				</div>
			{/if}
		</div>

		<div class="border-t pt-4 sm:p-4">
			<div class="flex space-x-2 sm:space-x-4">
				<textarea
					bind:value={newMessage}
					on:keydown={handleKeydown}
					placeholder="Tell your feelings.."
					class="flex-1 resize-none rounded-lg border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-primary-300"
					rows="2"
				></textarea>
				<button
					on:click={sendMessage}
					class="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors hidden sm:block"
					>Send</button
				>
				<button
					on:click={sendMessage}
					class="bg-primary-500 text-white px-4 py-2 rounded-lg hover:bg-primary-600 transition-colors block sm:hidden"
					>➤</button
				>
			</div>
			<p class="text-xs text-gray-500 mt-2">Press Enter to send. Shift + Enter for new line.</p>
		</div>
	</div>

	<div class="mt-8 text-center text-sm text-gray-500">
		<p>
			If you're experiencing a crisis or need immediate help, please call 988 for the Suicide and
			Crisis Lifeline.
		</p>
		<p class="mt-2">
			This is an AI assistant and not a replacement for professional medical advice.
		</p>
	</div>
</div>

<style>
	@media (max-width: 640px) {
		textarea {
			max-height: 2.6rem;
			height: auto;
		}
	}
</style>
