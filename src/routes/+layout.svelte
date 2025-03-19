<script>
	import '../app.css';
	import { Toaster } from 'svelte-french-toast';
	import { onMount } from 'svelte';

	let currentPage = '';
	let isMenuOpen = false;

	// Dapatkan path saat ini
	onMount(() => {
		currentPage = window.location.pathname;
	});

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<div class="min-h-screen">
	<nav class="bg-white/80 backdrop-blur-sm shadow-sm">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between h-16 items-center">
				<!-- Logo -->
				<div class="flex-shrink-0">
					<a href="/" class="flex items-center">
						<span class="text-2xl font-bold text-primary-500">MindfulAI</span>
					</a>
				</div>

				<!-- Desktop Menu -->
				<div class="hidden sm:flex sm:space-x-8 z-40">
					<a
						href="/"
						class="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md font-medium transition-colors"
						>Home</a
					>
					<a
						href="/articles"
						class="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md font-medium transition-colors"
						>Articles</a
					>
					<a
						href="/testimonials"
						class="text-gray-700 hover:text-primary-500 px-3 py-2 rounded-md font-medium transition-colors"
						>Testimonials</a
					>
				</div>

				<!-- Tombol Start Consultation (hilang jika di /consultation & mobile) -->
				{#if currentPage !== '/consultation'}
					<div class="hidden sm:block">
						<a href="/consultation" class="btn-primary">Start Consultation</a>
					</div>
				{/if}

				<!-- Hamburger Button (Mobile) -->
				<button on:click={toggleMenu} class="sm:hidden text-gray-700 focus:outline-none w-7">
					☰
				</button>
			</div>
		</div>

		<!-- Mobile Menu (Dropdown) -->
		{#if isMenuOpen}
			<div class="sm:hidden bg-white shadow-md w-full left-0 top-16">
				<a href="/" on:click={toggleMenu} class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Home</a>
				<a href="/articles" on:click={toggleMenu} class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Articles</a>
				<a href="/testimonials" on:click={toggleMenu} class="block px-4 py-2 text-gray-700 hover:bg-gray-100"
					>Testimonials</a
				>
			</div>
		{/if}
	</nav>

	<main>
		<slot />
	</main>

	<footer class="bg-white/80 backdrop-blur-sm mt-20">
		<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div>
					<h3 class="text-lg font-semibold text-gray-900 mb-4">About MindfulAI</h3>
					<p class="text-gray-600">
						Providing compassionate AI-powered mental health support, available 24/7 for when you
						need someone to talk to.
					</p>
				</div>
				<div>
					<h3 class="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
					<ul class="space-y-2">
						<li>
							<a href="/about" class="text-gray-600 hover:text-primary-500">About Us</a>
						</li>
						<li>
							<a href="/privacy" class="text-gray-600 hover:text-primary-500">Privacy Policy</a>
						</li>
						<li>
							<a href="/terms" class="text-gray-600 hover:text-primary-500">Terms of Service</a>
						</li>
					</ul>
				</div>
				<div>
					<h3 class="text-lg font-semibold text-gray-900 mb-4">Contact</h3>
					<p class="text-gray-600">
						Need immediate help?<br />
						Emergency: 911<br />
						Crisis Hotline: 988
					</p>
				</div>
			</div>
			<div class="mt-8 pt-8 border-t border-gray-200">
				<p class="text-center text-gray-500">© 2025 MindfulAI. All rights reserved.</p>
			</div>
		</div>
	</footer>
</div>

<Toaster />
