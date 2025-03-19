<script>
	import { onMount } from 'svelte';
	import toast from 'svelte-french-toast';

	let features = [
		{
			title: '24/7 Availability',
			description: 'Access support whenever you need it, day or night.',
			icon: '🌙'
		},
		{
			title: 'Complete Privacy',
			description: 'Your conversations are private and secure.',
			icon: '🔒'
		},
		{
			title: 'Personalized Support',
			description: 'AI-powered guidance tailored to your needs.',
			icon: '💝'
		}
	];

	onMount(() => {
		toast.success('Welcome to MindfulAI', {
			icon: '👋',
			style: 'border-radius: 200px; background: #fff; color: #333;'
		});
	});
</script>

<svelte:head>
	<title>MindfulAI - Your Safe Space for Healing & Growth</title>
	<meta
		name="description"
		content="Experience supportive conversations and guidance from our AI-powered mental health platform"
	/>
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<!-- Hero Section -->
	<div class="text-center mb-16 relative">
		<!-- Decorative corner illustrations -->
		<div
			class="absolute top-0 left-0 w-24 h-24 opacity-20 transform -translate-x-1/2 -translate-y-1/2"
		>
			<img src="https://illustrations.popsy.co/amber/flower.svg" alt="" class="w-full h-full" />
		</div>
		<div
			class="absolute top-0 right-0 w-24 h-24 opacity-20 transform translate-x-1/2 -translate-y-1/2"
		>
			<img src="https://illustrations.popsy.co/amber/flower.svg" alt="" class="w-full h-full" />
		</div>

		<h1
			class="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-8 animate-fade-in leading-tight"
		>
			Your Safe Space for<br />Healing & Growth
		</h1>
		<p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
			Experience supportive conversations and guidance from our AI-powered platform, designed to
			help you navigate life's challenges with compassion and understanding.
		</p>
		<div class="flex justify-center space-x-4">
			<a
				href="/consultation"
				class="btn-primary transform hover:scale-105 transition-transform duration-300 ease-in-out"
			>
				Start Free Consultation
			</a>
		</div>

		<div class="mt-12 animate-float flex justify-center">
			<img
				src="https://static.vecteezy.com/system/resources/thumbnails/034/601/628/small_2x/ai-generated-meditation-free-png.png"
				alt="Person meditating"
				class="w-full max-w-sm sm:max-w-md md:max-w-lg"
			/>
		</div>
	</div>

	<!-- Features Section -->
	<div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
		{#each features as feature}
			<div class="card hover:scale-105 transition-transform duration-300">
				<div class="text-4xl mb-4">{feature.icon}</div>
				<h3 class="text-xl font-semibold mb-2">{feature.title}</h3>
				<p class="text-gray-600">{feature.description}</p>
			</div>
		{/each}
	</div>

	<!-- How It Works Section -->
	<div class="mb-16">
		<h2 class="text-3xl font-bold text-center mb-12">How It Works</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
			<div class="card">
				<img
					src="https://plus.unsplash.com/premium_photo-1664378616928-dc6842677183?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
					alt="Therapy illustration"
					class="w-full h-auto"
				/>
			</div>
			<div class="space-y-6">
				<div class="flex items-start">
					<div
						class="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary-100 text-primary-600"
					>
						1
					</div>
					<div class="ml-4">
						<h3 class="text-lg font-medium">Start a Conversation</h3>
						<p class="mt-2 text-gray-600">
							Begin your journey with a simple hello. Our AI is here to listen without judgment.
						</p>
					</div>
				</div>
				<div class="flex items-start">
					<div
						class="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary-100 text-primary-600"
					>
						2
					</div>
					<div class="ml-4">
						<h3 class="text-lg font-medium">Share Your Thoughts</h3>
						<p class="mt-2 text-gray-600">
							Express yourself freely in a safe and confidential environment.
						</p>
					</div>
				</div>
				<div class="flex items-start">
					<div
						class="flex-shrink-0 flex items-center justify-center h-8 w-8 rounded-full bg-primary-100 text-primary-600"
					>
						3
					</div>
					<div class="ml-4">
						<h3 class="text-lg font-medium">Receive Guidance</h3>
						<p class="mt-2 text-gray-600">
							Get personalized support and practical strategies to help you move forward.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Testimonials Preview -->
	<div class="text-center mb-16">
		<h2 class="text-3xl font-bold mb-12">What Our Users Say</h2>
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			<div class="card hover:scale-105 transition-transform duration-300">
				<p class="text-gray-600 mb-4">
					"MindfulAI helped me through a difficult time. It's like having a supportive friend
					available 24/7."
				</p>
				<p class="font-medium">- Sarah M.</p>
			</div>
			<div class="card hover:scale-105 transition-transform duration-300">
				<p class="text-gray-600 mb-4">
					"The conversations feel natural and understanding. It's amazing how helpful the AI
					guidance can be."
				</p>
				<p class="font-medium">- James R.</p>
			</div>
			<div class="card hover:scale-105 transition-transform duration-300">
				<p class="text-gray-600 mb-4">
					"I appreciate having somewhere to turn to when I need to talk, without feeling judged."
				</p>
				<p class="font-medium">- Emily K.</p>
			</div>
		</div>
		<div class="mt-8">
			<a href="/testimonials" class="text-primary-500 hover:text-primary-600 font-medium">
				Read More Testimonials →
			</a>
		</div>
	</div>

	<!-- CTA Section -->
	<div class="text-center relative">
		<!-- Decorative corner illustrations -->
		<div
			class="absolute bottom-0 left-0 w-24 h-24 opacity-20 transform -translate-x-1/2 translate-y-1/2"
		>
			<img src="https://illustrations.popsy.co/amber/plant.svg" alt="" class="w-full h-full" />
		</div>
		<div
			class="absolute bottom-0 right-0 w-24 h-24 opacity-20 transform translate-x-1/2 translate-y-1/2"
		>
			<img src="https://illustrations.popsy.co/amber/heart.svg" alt="" class="w-full h-full" />
		</div>

		<h2 class="text-3xl font-bold mb-8">Ready to Start Your Journey?</h2>
		<p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
			Take the first step towards better mental well-being with our AI-powered support system.
		</p>
		<a href="/consultation" class="btn-primary">Begin Free Consultation</a>
	</div>
</div>

<style>
	.animate-fade-in {
		animation: fadeIn 1s ease-out;
	}

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(20px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
