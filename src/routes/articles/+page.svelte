<script>
	let articles = [
		{
			title: 'Understanding Anxiety',
			excerpt: 'Learn about common anxiety triggers and coping mechanisms.',
			date: '2025-01-15'
		},
		{
			title: 'The Power of Mindfulness',
			excerpt: 'Discover how mindfulness can improve your mental well-being.',
			date: '2025-01-10'
		},
		{
			title: 'Building Healthy Relationships',
			excerpt: 'Tips for maintaining strong, positive relationships in your life.',
			date: '2025-01-05'
		}
	];
</script>

<svelte:head>
	<title>Mental Health Articles - MindfulAI</title>
	<meta name="description" content="Read our collection of mental health articles and resources" />
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<h1 class="text-4xl font-bold text-gray-900 mb-8">Mental Health Articles</h1>
	
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each articles as article}
			<div class="card">
				<h2 class="text-xl font-semibold mb-2">{article.title}</h2>
				<p class="text-gray-600 mb-4">{article.excerpt}</p>
				<p class="text-sm text-gray-500">{new Date(article.date).toLocaleDateString()}</p>
			</div>
		{/each}
	</div>
</div>