
<script>
    export let onDesktop;
    import { page } from '$app/stores';
    import PlayerCard from './PlayerCard.svelte';

    export let data;

    let { user } = data;
    let { status: { data: serverStatus }, playersCount: { data: playersCount}} = data;

    let route;

    $: route = $page.url.pathname;
</script>


<nav class="nav">
    <a class="altera-logo" href="/">
        <img class="logo" alt="altera-logo" src="imgs/Logo.png">
    </a>
    
    <div class="ipcont">
        {#if serverStatus == "OFFLINE"}
            <h3 style="font-size: 25px;">{serverStatus}</h3>
        {:else}
            <a style="font-size: 25px;" href="/playerss">{serverStatus}: {playersCount}</a>
            <div style="display: flex; width: fit-content; margin: auto;">
                <h3 style="font-weight: normal;">play.alteracraft.eu</h3>
                <i on:click={() => navigator.clipboard.writeText("play.alteracraft.eu")} style="margin-left: .2rem;" class="ip-adress fa-regular fa-copy"></i>
            </div>
        {/if}
    </div>

    <div class="separator"></div>

    <div class="navbar-links">
        
        <ul>
            {#if !onDesktop}
                <div class="navigation-item" style="margin-top: .25rem; margin-bottom: 1rem;">
                    <PlayerCard {user} />
                </div>
            {/if}

            {#if onDesktop}    
                <li>
                    <a class="navigation-item" class:active={route === "/"} href="/">
                        <span class="ikonka-menu">
                            <i class="fa-solid fa-house" style="color: #ffffff;"></i>
                        </span>
                        <span class="text-menu">Domů</span>
                    </a>
                </li>
            {:else}
                <li>
                    <a class="navigation-item" class:active={route === "/"} href="/">
                        <span class="ikonka-menu">
                            <i class="fa-solid fa-house" style="color: #ffffff;"></i>
                        </span>
                        <span class="text-menu">Novinky</span>
                    </a>
                </li>
            {/if}

            <li>
                <a class="navigation-item" href="http://185.137.94.42:25656/" target="_blank">
                    <span class="ikonka-menu">
                        <i class="fa-solid fa-earth-europe" style="color: #ffffff;"></i>
                    </span>
                    <span class="text-menu">Dynmapa</span>
                    <span class="ikonka-menu">
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </span>
                </a>
            </li>

            <li>
                <a class="navigation-item" class:active={route.includes("/wiki")} href="/wikii">
                    <span class="ikonka-menu">
                        <i class="fa-solid fa-flask-vial" style="color: #ffffff;"></i>
                    </span>
                    <span class="text-menu">Wiki</span>
                </a>
            </li>

            <li>
                <a class="navigation-item" class:active={route === "/shop"} href="/shop">
                    <span class="ikonka-menu">
                        <i class="fa-solid fa-store" style="color: #ffffff;"></i>
                    </span>
                    <span class="text-menu">Obchod</span>
                </a>
            </li>

            <li>
                <a class="navigation-item" class:active={route === "/partners"} href="/partners">
                    <span class="ikonka-menu">
                        <i class="fa-solid fa-hashtag" style="color: #ffffff;"></i>
                    </span>
                    <span class="text-menu">Partneři</span>
                </a>
            </li>

            <li>
                <a class="navigation-item" class:active={route === "/pravidla"}  href="/pravidla">
                    <span class="ikonka-menu">
                        <i class="fa-solid fa-book-open" style="color: #ffffff;"></i>
                    </span>
                    <span class="text-menu">Pravidla</span>
                </a>
            </li>

            <li>
                <a class="navigation-item" class:active={route === "/ateam"} href="/ateam">
                    <span class="ikonka-menu">
                        <i class="fa-solid fa-users-gear" style="color: #ffffff;"></i>
                    </span>
                    <span class="text-menu">A-Team</span>
                </a>
            </li>
        </ul>
    </div>

    <div class="separator"></div>

    {#if onDesktop}
        <footer>
            <p>© AlteraCraft 2023</p> 
            <p style="font-size: 15px; font-style: italic; color: #F94C85;">Made with &lt;3</p>
        </footer>
    {/if}
    
    <div class="socky">
        <button class="instagram" onclick=" window.open('https://www.instagram.com/alteracraft.eu/','_blank')">
            <i class="fa-brands fa-instagram fa-2xl" style="color: #ffffff;"></i>
        </button>
        <button class="tiktok" onclick="window.open('https://www.tiktok.com/@alteracraft', '_blank')">
            <i class="fa-brands fa-tiktok fa-2xl" style="color: #ffffff;"></i>
        </button>
        <button class="discord" onclick=" window.open('https://discord.gg/QbQmRhFGeD','_blank')">
            <i class="fa-brands fa-discord fa-2xl" style="color: #ffffff;"></i>
        </button>
    </div>

</nav>


<style>
    .altera-logo {
        text-align: center;
    }

    a:hover {
        transition: .2s;
        color: #8fd8ff;
    }

    .navigation-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-radius: 10px;
        width: 90%;
        margin: auto;
        padding: 0;
        margin-bottom: .2rem;
    }

    .separator {
        margin: .5rem;
    }

    .navbar-links:last-child {
        margin-bottom: 0;
    }

    footer {
        margin-top: .25rem;
    }

    .socky {
        margin-top: .7rem;
    }

    @media (max-width: 700px) {
        .nav {
            max-width: 300vh;
        }

        .logo {
            padding-top: 1.3rem;
        }

        .navbar-links {
            display: flex;
            margin-top: .25rem;
            justify-items: center;
        }

        .separator {
            margin: 0;
        }

        .socky {
            margin-top: 10px;
            margin-bottom: 0;
        }

        footer {
            position: sticky;
            top: 100%;
            margin-bottom: 10px;
        }

        .navigation-item {
            background-color: rgb(29, 29, 31);
            width: 82%;
            padding-right: .5rem;
        }
    }

</style>