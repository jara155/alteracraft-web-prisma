
<script>
    import { page } from '$app/stores';
</script>

<main>

    <h1>{$page.status}</h1>

    <h2>Něco se nepovedlo</h2>

    <a href="/">
        <p>Zpět domů</p>
    </a>

</main>

<style>

    main {
        display: grid;
        align-items: center;
        transform: translateY(55%);
    }

    h1 {
        font-size: 100px;
        margin-bottom: 1rem;
    }

    h2 {
        text-align: center;
        margin-bottom: .5rem;
    }

    a {
        text-align: center;
        font-weight: normal;
        color: white;
    }
</style>