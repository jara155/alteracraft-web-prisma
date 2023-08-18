
<script>
    import { fade } from "svelte/transition";
</script>

<main>

    <h1 in:fade={{delay: 100}}>Přihlášení</h1>
    
    <form 
        method="POST" 
        action="?/login" 
        in:fade={{delay: 300}} 
    >
        <input autocomplete="off" name="username" placeholder="Herní nick" />
        <input autocomplete="off" name="password" type="password" placeholder="Herní heslo" />
        <button in:fade={{delay: 500}}>Přihlásit se</button>
    </form>
    
    
</main>


<style>

    h1 {
        margin-bottom: 1rem;
    }

    form {
        width: 25%;
        margin: auto;
    }
    
    button {
        border-radius: 12px;
        width: 100%;
        background-color: #29292c;
        color: white;
        font-size: 21px;
        margin-top: .7rem;
    }

    button:hover {
        border: green solid 2px;
    }

    input {
        border: transparent;
        border-radius: 12px;
        outline: none;
        color: white;
        background-color: #29292c;
        padding: .7rem 1.2rem;
        margin-bottom: .5rem;
        font-size: 1.1em;
        font-weight: 500;
    }

    input:-webkit-autofill {
        background-color: #29292c !important;
        background-image:none !important;
        color: white !important;
    }

    @media (max-width: 700px) {
        form {
            width: 70%;
            margin: auto;
        }
    }

</style>

