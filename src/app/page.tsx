'use client';
import { FormEvent, useState } from 'react';

export default function Home() {
	const [ prompt, setPrompt ] = useState('');

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const response = await fetch('/api/generate', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				prompt
			})
		});
		const data = await response.json();
		console.log(data);
	};

	return (
		<div>
			<h1>Open IA</h1>
			<form onSubmit={handleSubmit}>
				<input onChange={(e) => setPrompt(e.target.value)} type="text" />
				<button>Generate</button>
			</form>
		</div>
	);
}
