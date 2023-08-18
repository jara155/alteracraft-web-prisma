import { redirect } from "@sveltejs/kit"

export const POST = async ({ cookies, locals }) => {
	cookies.delete("session");
	locals.user = null;
	throw redirect(303, "/")
}