import { defineEventHandler, readBody } from "h3";

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    firstName?: string;
    lastName?: string;
    email?: string;
    message?: string;
  }>(event);
  // Here you could forward to EmailJS/Firebase/SMTP provider
  // For now we just simulate success
  if (!body?.email || !body?.message) {
    return { ok: false, error: "Email and message are required" };
  }
  // Log for server visibility (dev only)
  if (process.env.NODE_ENV !== "production") {
    console.log("Contact form submission:", body);
  }
  return { ok: true };
});
