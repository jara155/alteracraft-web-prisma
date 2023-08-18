<script>
    export let title;
    export let desc;
    export let img;
    export let page;
</script>


<a class="frame" href="wiki/{page}">
    <h2>{title}</h2>
    <p>{desc}</p>
</a>

<style>

    .frame {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 240px;
        height: 125px;
        margin-inline: 10px;
        text-align: center;
        background-image: url("");
        border-radius: 22px;
        padding-top: 20px;
        padding-bottom: 10px;
        margin: 10px 15px;
    }

    p {
        font-size: 16px;
        text-align: center;
        margin-bottom: 1.25rem;
        padding-inline: .5rem;
    }

</style>