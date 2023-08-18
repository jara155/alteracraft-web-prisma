import { PrismaClient } from '@prisma/client'
import { error, invalid, redirect } from "@sveltejs/kit"
const prisma = new PrismaClient()
import bcrypt from 'bcryptjs';

export const actions = {
  login: async ({ request, cookies }) => {
    let formData = await request.formData();

    // Finds if user exists
    let player = await prisma.auth.findFirst({
      where: {
        name: formData.get("username")
      }
    })

    // User didnt exists
    if(player == null) return error(400, {
      error: true,
      message: "Hráč neexistuje"
    });
    
    let isSamePassword = await bcrypt.compare(formData.get("password"), player.password);

    if(isSamePassword) {
      cookies.set("session", player.uuid, {
        path: "/",
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 30, // 1 month
      })

      // const redirectTo = event.url.searchParams.get("redirectTo");
      // if(redirectTo) throw redirect("302", "/"+redirectTo.slice(1))
      // throw redirect("302", "");
    }
  }
}