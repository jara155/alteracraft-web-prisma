<script>
  import { fade, fly } from "svelte/transition";

    export let message = "";

    export let isVisible = false;

    setTimeout(() => {
        isVisible = false;
    }, 2000);
</script>

<main>
    <h2>Chyba</h2>
    <span>{message}</span>
</main>

<style>
    main {
        position: fixed;
        top: 0;
        width: fit-content;
        border-radius: 12px;
        padding: .5rem;
        background-color: #29292c;
    }

    h2 {
        color: red;
        text-align: center;
    }
</style>