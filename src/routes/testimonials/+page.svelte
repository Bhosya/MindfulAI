<script>
	let testimonials = [
		{
			text: "MindfulAI has been a game-changer for me. Having someone to talk to anytime, without judgment, has helped me through some tough times.",
			author: "Sarah M.",
			location: "New York, USA"
		},
		{
			text: "I was skeptical about AI therapy at first, but the conversations feel so natural and understanding. It's been incredibly helpful.",
			author: "James R.",
			location: "London, UK"
		},
		{
			text: "As someone who struggles with traditional therapy settings, this platform has been perfect for me. I can open up at my own pace.",
			author: "Emily K.",
			location: "Toronto, Canada"
		},
		{
			text: "The guidance I've received has helped me develop better coping mechanisms. I'm grateful for this resource.",
			author: "Michael P.",
			location: "Sydney, Australia"
		},
		{
			text: "Having 24/7 support has been invaluable. It's comforting to know there's always someone there to listen.",
			author: "Lisa T.",
			location: "Berlin, Germany"
		}
	];
</script>

<svelte:head>
	<title>User Testimonials - MindfulAI</title>
	<meta name="description" content="Read what our users say about their experience with MindfulAI" />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<h1 class="text-4xl font-bold text-gray-900 mb-8">User Testimonials</h1>
	
	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		{#each testimonials as testimonial}
			<div class="card">
				<p class="text-gray-600 mb-4">"{testimonial.text}"</p>
				<div class="flex items-center justify-between">
					<p class="font-medium">{testimonial.author}</p>
					<p class="text-sm text-gray-500">{testimonial.location}</p>
				</div>
			</div>
		{/each}
	</div>
</div>