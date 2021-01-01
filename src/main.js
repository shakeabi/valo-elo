import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		serverUri: "https://valo-ello.herokuapp.com/get-data"
	}
});

export default app;