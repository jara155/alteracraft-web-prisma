<script>
  import { fade } from "svelte/transition";
//   import { players } from "../../lib/stores/server-info";

  let players = [

  ]
</script>

<main>

    <h1 in:fade={{delay: 100}}>Hráči</h1>

    <div in:fade={{delay: 300}} class="list">
        {#each players as player}
            <div class="player">
                <img class="player-icon" src="https://visage.surgeplay.com/bust/128/{player.user}" alt="{player.user} icon">
                <div class="player-details">
                    <h2>{player.user}</h2>
                    <img class="rank" src="imgs/ranks/{player.rank.toLowerCase()}.png" alt="">
                </div>
            </div>
        {/each}
    </div>

</main>

<style>

    h1 {
        margin-bottom: 1rem;
    }

    .list {
        display: grid;
        /* grid-template-columns: repeat(2, 15rem); */
        justify-content: center;
    }

    .player {
        display: flex;
        min-width: fit-content;
        height: 80px;
        border-radius: 12px;
        margin-bottom: 10px;
        background-color: #292929;
    }

    .player-details {
        margin-inline: .8rem;
        margin-top: .8rem;
    }

    h2 {
        font-size: 27px;
        color: white;
    }

    .rank {
        width: 80px;
        height: 30px;
    }

    .player-icon {
        width: 80px;
        height: 80px;
        border-left: #1AADFF solid .5px;
        border-radius: 20px;
    }
</style>