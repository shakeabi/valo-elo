<script>
  export let displayNotes;
  export let text = `
  <h4 style="text-align: center; margin: 5px auto;"> Read the following before use </h4>

  1. This web-app (unofficial) was made to help people determine their ELO in <b>Valorant</b>. (accurate AFAIK)

  2. The username and password are required to fetch data from the RIOT servers (would love to hear if you've found a way to not require these). However, neither of them are <b>stored in the server</b>. 

  3. I highly recommend you to change your password to something that you're not using in other services like email, social media etc., so that in the event of highly unlikely data leak, the other services do not get affected.
  
  4. The source code is available <a href="https://github.com/shakeabi/valo-elo" target="_blank">here</a> (frontend) and <a href="https://github.com/shakeabi/valo-elo-backend" target="_blank">here</a> (backend). [Feel free to raise an issue <a href="https://github.com/shakeabi/valo-elo/issues/new" target="_blank">here</a> if you find any bugs]
  
  5. Change regions and try again if you're request is unsuccessful.

  6. Read more & credits: <a href="https://github.com/shakeabi/valo-elo#credits-and-tech-used" target="_blank">Link</a>

  7. Happy Gaming :)

  <br/>
  `;
</script>

<div id="modal-container">
  <div id="modal-box">
    <h2>Notes</h2>
    <p id="modal-content">{@html text}</p>
    <button class="modal-button" on:click={e=>{displayNotes=false;localStorage.setItem("displayNotes", false);}}>Don't Show Again</button><br/>
    <button class="modal-button" on:click={e=>{displayNotes=false;}}>Close</button>
  </div>
</div>

<style>
  #modal-container{
    width: 100vw;
    height: 100vh;
    position: fixed;
    margin: 0;
    top: 0;
    left: 0;
    background: #000000a6;
    z-index: 100;
  }

  #modal-box{
    width: 30vw;
    max-width: 500px;
    position: absolute;
    top: 50%;
    left: 50%;
    max-height: 60vh;
    overflow: auto;
    background: var(--red);
    padding: 15px;
    transform: translate(-50%, -50%);
  }

  #modal-content{
    font-family: Roboto;
    text-align: justify;
    white-space: pre-line;
  }

  .modal-button{
    width: 90%;
    background: var(--green);
    color: var(--white);
    border: none;
    padding: 10px;
    cursor: pointer;
  }

  @media screen and (max-width:600px){
    #modal-box{
      width: 80vw;
    }
  }
</style>
