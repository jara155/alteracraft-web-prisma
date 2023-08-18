<script>
  import { fade } from "svelte/transition";

  export let user;

</script>

{#if user}
  <main class="player-card" in:fade>
    <img class="player-image" src="https://visage.surgeplay.com/bust/128/0a737aee1a6e4d8e985c86b30927c5d6" alt="">
    <div>
      <h3>{user.name}</h3>
      <img class="rank" src="imgs/ranks/dev.png" alt="">
    </div>
    <form action="/logout" method="POST">
      <button>
        <i style="color: red;" class="fa-solid fa-right-from-bracket"></i>
      </button>
    </form>
  </main>
{:else}
  <a href="/login" class="player-card" in:fade>
    <img class="player-image" src="https://visage.surgeplay.com/bust/128/X-Steve" alt="">
    <div>
      <h3>Přihlásit se</h3>
      <span>do AlteraCraft</span>
    </div>
  </a>
  
{/if}


<style>

  .player-card {
    display: flex;
    max-width: fit-content;
    border-radius: 12px;
    margin-left: auto;
    padding-right: .5rem;
    margin-right: .5rem;
    background-color: #292929;
    align-items: center;
  }

  a {
    color: white;
  }

  form,
  button {
    width: fit-content;
    color: white;
    font-size: 31px;
    margin-inline: .7rem;
  }

  .rank {
    width: 75px;
    height: 30px;
  }

  .player-image {
    width: 65px;
    height: 65px;
    margin-right: .75rem;
    border: #1AADFF solid .5px;
    border-radius: 12px;
  }

  @media (max-width: 700px) { 
    .player-card {
      max-width: 100%;
      margin-right: 0;
      background-color: rgb(29, 29, 31);
    }
  }

</style>