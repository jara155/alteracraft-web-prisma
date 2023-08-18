<script>
    import { fade } from "svelte/transition";
</script>

<main>

    <img class="kategorie" src="imgs/pravidla.png" alt="pravidla-logo" in:fade={{delay: 100}}/>

    <div class="container">
        <h1>Úvod</h1>
    
        <p in:fade={{delay: 100}}>
            Pokud dojde k porušení níže uvedených pravidel, hráč bude zaslouženě potrestán.
            Falšování důkazů je banovatelné. Poslední slovo při porušení pravidel má vždy vedení. Hráč má právo při podezření na typ, délku a důvod trestu podat odvolání.
        </p>
    
        <p in:fade={{delay: 100}}>
            Hráč napojením na server souhlasí s pravidly AlteraCraft, popřípadě Discord serveru Altera. Vedení si vyhrazuje právo na jakékoliv změny bez udání důvodu. Neznalost se neomlouvá a bude trestána.
        </p>
    </div>

    <div class="container">
        <h1 in:fade={{delay: 400}}>Altera</h1>
    
        <div class="line-container" in:fade={{delay: 400}}>
            <span class="line">
                <span class="bold-text">1)</span>
                Je přísně zakázáno jakýmkoli způsobem obcházet trest.
            </span>
            <span class="line">
                <span class="bold-text">2)</span>
                Je přísně zakázáno navádění hráčů k porušování pravidel.
            </span>
            <span class="line">
                <span class="bold-text">3)</span>
                Hráč je při nalezení jákékoliv chyby povinen chybu nahlásit odpovědným členům Altera Teamu a nesmí ji zneužívat.
            </span>
            <span class="line">
                <span class="bold-text">4)</span>
                Hráč je povinen při zjištění porušování pravidel (či zákonů) jiným hráčem, tuto věc nahlásit a doložit patřičné důkazy.
            </span>
            <span class="line">
                <span class="bold-text">5)</span>
                Je zakázáno znepříjemňování zážitku ostatním uživatelům.
            </span>
            <span class="line">
                <span class="bold-text">6)</span>
                Posílání reklamy bez předchozí domluvy je po celé Alteře zakázáno.
            </span>
            <span class="line">
                <span class="bold-text">7)</span>
                Hráč je povinen uposlechnout výzvám člena Altera Teamu.
            </span>
            <span class="line">
                <span class="bold-text">8)</span>
                Je přísně zakázáno používat modifikovaný client (Meteor, Wurst, LabyMod,...) (vyjímka official clientu)
            </span>
            <span class="line">
                <span class="bold-text">9)</span>
                Zakázáné jsou také griefing, chunk bany, autoclicker, krádeže modelů, textur a staveb.
            </span>
            <span class="line">
                <span class="bold-text">10)</span>
                Pokud hráč při obchodu s jiným hráčem utrpí újmu na majetku, má právo po předložení důkazů na jejich vrácení.
            </span>
            <span class="line">
                <span class="bold-text">11)</span>
                Zákaz jakýchkoliv sekt, republik, států či klanů.
            </span>
        </div>
    </div>

    <div class="container">
        <h1 in:fade={{delay: 800}}>Obchod</h1>
    
        <div class="line-container" in:fade={{delay: 800}}>
            <span class="line">
                <span class="bold-text">1)</span>
                Server není povinen uhradit částku za produkty v obchodě. 
            </span>
            <span class="line">
                <span class="bold-text">2)</span>
                Veškeré itemy, skiny jsou vázané na váš nick, nejsme povinni je přesunout na nový nick.
            </span>
            <span class="line">
                <span class="bold-text">3)</span>
                Veškeré problémy s výdejem itemů řešte s někým z Altera Teamu, po předložení důkazů vám je předáme.
            </span>
        </div>
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

    @media (max-width: 700px) {
        .line {
            padding-left: 0.5rem;
        }

        p {
            text-align: left;
        }
    }
</style>