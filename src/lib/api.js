export async function askAI(question) {
	const baseUrl = 'https://fastrestapis.fasturl.cloud/aillm/superqwen';
	const sessionId = '123456';
	const style = 'empathetic';

	// Ubah prompt agar AI lebih ekspresif & terasa kayak chat
	const modifiedQuestion = `
		Kamu adalah seorang psikolog AI yang empatik. 
		Dengarkan masalah user dengan baik, validasi perasaan mereka, dan jangan langsung kasih solusi. 
		Jawab dengan gaya santai kayak ngobrol di chat. 
		Pakai kalimat pendek, maksimal 2-3 kalimat. 
		Biar lebih ekspresif, tambahin double huruf di beberapa kata (kayak "capekkk", "bingung bangettt"), 
		gunakan tanda baca buat kasih jeda (kayak "hmm...", "eh tapi..."), 
		dan bikin user ngerasa didengerin. 
		
		Sekarang, user berkata: "${question}".
	`;

	const encodedQuestion = encodeURIComponent(modifiedQuestion);
	const apiUrl = `${baseUrl}?ask=${encodedQuestion}&style=${style}&sessionId=${sessionId}&model=qwen-max-latest&mode=t2t`;

	try {
		const response = await fetch(apiUrl);
		if (!response.ok) {
			throw new Error('Gagal mengambil data dari API');
		}
		const data = await response.json();

		// Ambil hanya bagian jawaban singkat pertama
		const shortResponse = data.result.split('\n')[0];

		return { result: shortResponse };
	} catch (error) {
		console.error('Error fetching AI response:', error);
		return { error: 'Gagal mengambil data AI' };
	}
}
