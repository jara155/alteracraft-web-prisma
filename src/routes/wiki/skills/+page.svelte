
<main>

    <h1>Skills</h1>

    <div class="list">
        <div class="rounded_card">
            <h2>Příkaz</h2>
            <span>/skilltree</span>
        </div>
        <div class="rounded_card">
            <h2>Příkaz</h2>
            <span>/skilltree</span>
        </div>
        <div class="rounded_card">
            <h2>Příkaz</h2>
            <span>/skilltree</span>
        </div>
        <div class="rounded_card">
            <h2>Příkaz</h2>
            <span>/skilltree</span>
        </div>
    </div>

    <div class="container">
        <h2>Popis</h2>
        <p>
            V Minecraftu, oblíbené sandboxové hře, je spousta dovedností, které můžete rozvíjet a využívat při hraní. Tyto dovednosti vám umožňují efektivněji těžit suroviny, stavět kreativní konstrukce, bojovat s nepřáteli a více. Zde je seznam několika důležitých dovedností v Minecraftu:
        </p>
    </div>

    <div class="container">
        <h2>Členění</h2>
        <div class="line-container">
            <span class="line">
                <span class="bold-text">Těžba (Mining):</span> Těžba je základní dovedností, která vám umožňuje získávat suroviny z podzemí. Můžete těžit drahokamy, železo, uhlí, zlato, redstone a další vzácné materiály.
            </span>

            <span class="line">
                <span class="bold-text">Stavitelství (Building):</span> Schopnost kreativně stavět a designovat je důležitá pro vytváření domů, měst, soch a dalších staveb. Používejte různé bloky a dekorace, abyste vytvořili unikátní prostředí.
            </span>

            <span class="line">
                <span class="bold-text">Farming:</span> Farming je dovednost pěstování plodin, chování zvířat a výroby potravin. Můžete pěstovat plodiny jako pšenici, mrkev, brambory a kakaové boby, a také chovat dobytek a další zvířata.
            </span>


        </div>
    </div>

</main>

<style>
    .list {
        display: grid;
        grid-template-columns: repeat(2, 16rem);
        justify-content: center;
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

    .rounded_card {
        width: 15rem;
        min-height: 80px;
        padding: 16px;
        margin-bottom: 15px;
        background-color: #29292c;
        color: rgb(246, 247, 252);
        border-radius: 12px;
    }

    .container {
        width: 50rem;
        margin: auto;
        text-align: center;
        margin-block: 15px;
    }

    p,
    span {
        font-weight: bold;
    }

    h1 {
        margin-bottom: 10px;
    }
    
    h2 {
        text-align: center;
    }
</style>