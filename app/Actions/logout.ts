"use server";

import { logout } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function LogoutAdmin() {
    await logout();
    redirect("/Admin-login");
}
