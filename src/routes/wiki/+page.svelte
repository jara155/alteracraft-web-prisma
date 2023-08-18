<script>
  import { fade } from "svelte/transition";
  import ImgButton from "../../components/ImgButton.svelte";

</script>


<main>

    <img class="kategorie" src="imgs/wiki.png" alt="">

    <div class="list">
        <ImgButton title="Skilly" desc="Vše o skillech" page="skills" />
        <ImgButton title="Mobové" desc="Vše o mobech" />
        <ImgButton title="Teleportace" desc="Vše o teleportaci" />
    </div>


</main>

<style>

    .list {
        display: grid;
        grid-template-columns: repeat(3, 17rem);
        justify-content: center;
    }

    

    
</style>