import { PrismaClient } from '@prisma/client'
import { redirect } from '@sveltejs/kit';
const prisma = new PrismaClient()

export const handle = async ({ event, resolve }) => {
    const session = event.cookies.get('session');
    if(session === undefined) {
        if(event.url.pathname.startsWith("/shop")) {
            throw redirect(303, "/login")
            // const fromUrl = event.url.pathname + event.url.search;
            // console.log(event.url);
            // throw redirect("303", "/login?redirectTo=" + fromUrl)
        } else {
            return resolve(event);
        }
    }

    let player = await prisma.auth.findUnique({
        where: {
            uuid: session
        },
    });

    event.locals.user = {
        uuid: session,
        name: player.name,
        rank: ""
    };

    return await resolve(event);

};