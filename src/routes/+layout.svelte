<script>
  import NavigationBar from "../components/NavigationBar.svelte";
  import { page } from '$app/stores';
  import { fly } from "svelte/transition";
  import PlayerCard from "../components/PlayerCard.svelte";

  let screenHeight;
	let screenWidth;

  export let data = [];
  let {user} = data;
</script>

<svelte:window bind:innerHeight={screenHeight} bind:innerWidth={screenWidth} />

{#if screenHeight < 850 && screenWidth < 700 && $page.url.pathname == "/"}
  <main>
    <NavigationBar {data} />
  </main>
{:else if screenHeight < 900 && screenWidth < 700}
  <main>
    {#if $page.status != "404" || $page.status != "500"}
       <a href="/">〱 Home</a>
    {/if}
    <slot></slot>
  </main>
{/if}


{#if screenHeight > 850 && screenWidth > 700}
   <main class="wrapper">
    <NavigationBar data={data} onDesktop={true} />

      <main class="content">
          <PlayerCard {user} />
          <slot></slot>
      </main>
  </main>
{/if}


<style>
  
  a {
    font-size: 20px;
    margin: .5rem;
  }

</style>
