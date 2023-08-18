<script>

  import { fade } from "svelte/transition";

</script>


<main>
    <img class="kategorie" src="imgs/partners.png" alt="partners-logo" in:fade={{delay: 100}}/>

    <div class="container">
    
        <p in:fade={{delay: 120}}>
            Máš zájem o partnera? Vytvoř si ticket na <a target="_blank" href="https://discord.com/invite/QbQmRhFGeD">discord serveru</a> a domluvíme se.
        </p>
    </div>

    <div class="container">
        <h1 in:fade={{delay: 400}}>Naši partneři</h1>
        <p class="line-container" in:fade={{delay: 400}}>
            <span class="line"></span>
        </p>
    </div>


</main>

<style>

    p {
        font-size: 19px;
        text-align: center;
        margin-bottom: 1.25rem;
        padding-inline: .5rem;
        font-weight: bold;
    }

    .line-container {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .line {
        padding-left: 1.5rem;
        margin-bottom: .3rem;
        font-size: 19px;
        text-align: left;
        font-weight: bold;
    }

</style>