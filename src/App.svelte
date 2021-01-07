<script>
	import { onMount } from 'svelte';
	import { Diamonds } from 'svelte-loading-spinners';
	import Modal from "./Modal.svelte";

	// Constants	
	const localeOptions = { month: '2-digit', day: '2-digit', hour:"2-digit", minute: "2-digit" };

	// Props
	export let serverUri;
	
	// State vars
	let loading = false;
	let displayNotes = true;
	let username;
	let password;
	let region;
	let outdata = {};
	let errormsg = "";

	// Lifecycle Functions
	onMount(async () => {
		if(localStorage.getItem("isSet")=="true"){
			username = localStorage.getItem("username");
			password = localStorage.getItem("password");
			region = localStorage.getItem("region");
			if(localStorage.getItem("displayNotes")=="false")displayNotes=false;
			btnSubmit();
		}

		console.log(`
		 
██╗   ██╗ ██████╗      ██████╗██╗   ██╗██████╗ ██╗ ██████╗ ██╗   ██╗███████╗██╗
╚██╗ ██╔╝██╔═══██╗    ██╔════╝██║   ██║██╔══██╗██║██╔═══██╗██║   ██║██╔════╝██║
 ╚████╔╝ ██║   ██║    ██║     ██║   ██║██████╔╝██║██║   ██║██║   ██║███████╗██║
  ╚██╔╝  ██║   ██║    ██║     ██║   ██║██╔══██╗██║██║   ██║██║   ██║╚════██║╚═╝
   ██║   ╚██████╔╝    ╚██████╗╚██████╔╝██║  ██║██║╚██████╔╝╚██████╔╝███████║██╗
   ╚═╝    ╚═════╝      ╚═════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝ ╚═════╝  ╚═════╝ ╚══════╝╚═╝
                                                                               
		 Wanna contribute: https://github.com/shakeabi/valo-elo`);
	});

	// Functions
	const btnSubmit = async ()=>{

		// Captures username, password and region and fetches data from the backend
		errormsg = "";
		loading = true;

		fetch(serverUri, {
			method: "POST",
			body: JSON.stringify({user: username, pass: password, region: region, hour12:false}),
			headers: {
				"Content-Type": "application/json"
			}
		}).then(res => res.json())
		.then(data => {
			if(data.success){
				localStorage.setItem("username", username);
				localStorage.setItem("password", password);
				localStorage.setItem("region", region);
				localStorage.setItem("isSet", true);

				outdata = data;

				if(outdata.compData.net<0){
					errormsg = "Check your region!";
				}
			}
			else
				errormsg = JSON.parse(data.err).data.message;
			loading = false;
		}).catch(err=> {errormsg=err; loading = false;})
	}
</script>

<svelte:window on:focus={btnSubmit}/>
<main>
	{#if displayNotes}
		<Modal bind:displayNotes/>
	{/if}
	<div><img id="mainLogo" src="main_logo.png" alt="main_logo"/></div>
	<div id="error" style="font-family: Roboto; margin-bottom: 10px;">{errormsg}</div>
	<div id="inputContainer">
		<div id="formContainer">
			<input id="username" on:input={e=>outdata={}} bind:value={username} type="text" placeholder="Username" />
			<input id="password" bind:value={password} type="password" placeholder="Password"/>
			<select id="region" bind:value={region}>
				<option value="ap" default>Asia Pacific</option>
				<option value="na">North America</option>
				<option value="eu">Europe</option>
			</select>
		</div>
		<button on:click={btnSubmit} id="submitBtn" style="width:100%; height: 40px; cursor: pointer; margin: 10px 0;" disabled={loading}>{outdata.success? "Refresh": "Submit"}</button>
		<br/>
		{#if loading}
		<div class="spinner-item">
			<Diamonds size="60" color="#ffffff" unit="px" />
		</div>
		{/if}
	</div>
	{#if outdata.success}
	<h1 id="displayname" >{outdata.accountData.displayName}<small>#{outdata.accountData.tagLine}</small></h1>
	<div id="mainContent">
			<div style="display: flex; justify-content: center; align-items: center;">
				<img src="assets/images/Badge_{outdata.compData.rankNumber}.png" style="width: 30px; height: 30px; padding: 10px;" alt=""/>
				<h2> {outdata.compData.rankText}</h2>
			</div>
			<h3 style="border-bottom: var(--white) 1px solid;">{outdata.compData.net} ELO │ {100-outdata.compData.currRP<0?"INF": 100-outdata.compData.currRP} TRU</h3>
			<div id="rankTable">
				<h3>Recent Matches</h3>
				{#each outdata.compData.delta as match, i}
					<div class="matchDataContainer">
						<div style="max-width: 70%;">
							{new Date(match.timestamp).toLocaleDateString(window.innerWidth>600? "en-IN":"en-GB", localeOptions)}
						</div>
						<div style="color:{match.diff>=0? 'lightgreen': 'orangered'}">
						 {match.diff>=0? "+": ""}{match.diff.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}
						</div>
					</div>
				{/each}
			</div>
		</div>
		<pre>*TRU: points To Rank Up</pre>
	{/if}
<footer style="margin-top: 20px;">Made with &hearts; by <a href="https://github.com/shakeabi" target="_blank">Shake</a></footer>
<img style="display:none;" src="https://hitcounter.pythonanywhere.com/count/tag.svg?url=https%3A%2F%2Fvalo-elo.netlify.app" alt="Hits">
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		width: 70vw;
		max-width: 900px;
	}

	#mainLogo{
		width: 50%;
	}

	#inputContainer{
		width: 50%;
		margin: 0 auto;
		padding: 20px;
		border: var(--white) 2px solid;
	}

	#formContainer{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	#formContainer input{
		display: block;
		width: 33%;
		font-family: Roboto;
		text-align: center;
	}

	#region{
		text-align: center;
    background: white;
		text-align-last: center;
		width: 33%;
		font-family: Roboto;
	}

	#submitBtn{
		background-color: var(--green);
		color: var(--white);
		border: none;
	}

	#rankTable{
		background: var(--green); 
		padding: 15px 15px 25px 15px;
		transition: all .1s ease-in;
	}

	#rankTable:hover{
		transform: scale(1.02);
	}

	#mainContent{
		border: var(--white) 2px solid;
		width: 50%;
		margin: 15px auto;
		padding: 20px;
	}

	.spinner-item {
		margin: 10px auto;
	  display: flex;
	  justify-content: center;
	  align-items: center;
	  position: relative;
	}

	h1 {
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	#displayname{
		overflow-x:auto; 
		width:55%; 
		margin-left:auto; 
		margin-right:auto;
	}

	.matchDataContainer{
		display: flex;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    padding-bottom: 10px;
    padding-top: 10px;
    border-bottom: white 1px solid;
	}

	@media screen and (max-width: 600px){
		#formContainer{
			flex-direction: column;
		}

		#formContainer input{
			width: 100%;
		}

		#region{
			width: 100%;
		}

		#mainContent, #inputContainer, #mainLogo{
			width: 80%;
		}

		main{
			width: 80vw;
		}

		h1{
			font-size: 2em;
		}

		#displayname{
			width: 90%;
		}
	}
</style>
