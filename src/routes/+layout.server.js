
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const load = async ({ locals}) => {

    return {
        user: locals.user,
        playersCount: await prisma.serverInfo.findFirst({
            where: {
                info: "playersCount"
            }
        }),
        players: await prisma.serverInfo.findUnique({
            where: {
                info: "players"
            }
        }),
        status: await prisma.serverInfo.findFirst({
            where: {
                info: "status"
            },
            select: {
                data: true,
            },
        })
    }


}