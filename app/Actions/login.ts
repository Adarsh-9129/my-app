"use server";

import { redirect } from "next/navigation";
import { loginSchema } from "@/lib/AdminLogin";
import { login } from "@/lib/auth";

export async function LoginAdmin(formData: FormData) {
    const username = formData.get("username") as string;
    const password = formData.get("password") as string;

    const result = loginSchema.safeParse({
        username,
        password,
    });

    if (!result.success) {
        return {
            success: false,
            message: result.error.issues[0].message,
        };
    }

    const envUsername = process.env.ADMIN_USERNAME;
    const envPassword = process.env.ADMIN_PASSWORD;

    if (username === envUsername && password === envPassword) {
        await login({ username });
        redirect("/Admin-Dashboard");
    }

    return {
        success: false,
        message: "Invalid Username or Password",
    };
}
