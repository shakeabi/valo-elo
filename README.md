<h1 align="center">
  <img src="public/main_logo.png">
  <br>
</h1>

<h4 align="center">A website to check you ELO rating in Valorant</h4>

<h3 align="center"><a href="https://valo-elo.netlify.app/">valo-elo.netlify.app</a></h3>

## This website is not affiliated with Riot Games, this was made by Abishake inspired from RumbleMike's ValorStreamOverlay

## About
Hi y'all, this website was built after being inspired from RumbleMike's [ValorStreamOverlay](https://github.com/RumbleMike/ValorantStreamOverlay/). I felt the installation process involved was too complex for a gamer and hence made this website. This website fetches your Rank Points from RIOT Servers(unofficially) and calculates your ELO and recent ELO changes. The site requires your username and password to fetch and display the required data (Would love to hear if you've found other alternatives). Check out RumbleMikes app if you're a streamer: [ValorStreamOverlay](https://github.com/RumbleMike/ValorantStreamOverlay/).

## Notes

Neither of username nor password are **logged/stored in the server**. The autofilling of username and password from second usage is basically stored locally in your browser. You can check the source code <a href="https://github.com/shakeabi/valo-elo" target="_blank">here</a> (frontend) and <a href="https://github.com/shakeabi/valo-elo-backend" target="_blank">here</a> (backend). However, the backend is hosted in [heroku](https://dashboard.heroku.com/) (third-party hosting service). Hence, I highly recommend you to change your password to something that you're not using in other services like email, social media etc., so that in the event of highly unlikely data leak, the other services do not get affected.

If you still feel uncomfortable using the site, you can setup the site locally (frontend and backend), which is completely safe or use RumbleMike's [ValorStreamOverlay](https://github.com/RumbleMike/ValorantStreamOverlay/).

## How to use the site

Just enter username, password and region and click submit -> Voila!


## Credits and tech used
  - [valorant.js](https://github.com/Sprayxe/valorant.js/) - A nice API wrapper for valorant with oauth; Used a customised version of the same to handle requests to RIOT servers.
  - [ValorStreamOverlay](https://github.com/RumbleMike/ValorantStreamOverlay/) - A wonderful stream overlay from RumbleMike; The RP and ELO calculations are based on the algorithm used in this repo.

  - [Svelte](https://svelte.dev/) - Used to build the frontend.
  - Nodejs and Express - Used to build the backend.

# Message For Riot
Hey Riot, as explained above, this site just fetches data from the RIOT API and does not affect the game in any way. If this website is not something you approve of, please message me by creating an issue <a href="https://github.com/shakeabi/valo-elo/issues/new" target="_blank">here</a>. 
