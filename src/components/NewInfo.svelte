
<script>
    export let date;
    export let title;
    export let desc;
    export let image;
</script>

<main class="n_karta">

    <h3 class="cas">{date}</h3> 
    <h3 class="nheader">{title}</h3> 
    <div class="body_karta">
        {desc}
    </div>
    <img id="news" src="imgs/{image}" alt="{title} image">

</main>