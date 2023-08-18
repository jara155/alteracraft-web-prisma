import adapter from "@sveltejs/adapter-static"; 
// was "@sveltejs/adapter-auto"

const dev = "production" === "development";

/** @type {import(""@sveltejs/kit").Config} */
const config = {
    kit: {
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// ignore deliberate link to shiny 404 page
				if (path === '/not-found' && referrer === '/blog/how-we-built-our-404-page') {
				return;
				}
		
				// otherwise fail the build
				// throw new Error(message);
			}
		},
        adapter: adapter({
            pages: "docs",
            assets: "docs"
        }),
        paths: {
            // change below to your repo name
            base: dev ? "" : "/alteracraft-web-prisma",
        },
        // hydrate the <div id="svelte"> element in src/app.html
        // target: "#svelte"
    }
};

export default config;