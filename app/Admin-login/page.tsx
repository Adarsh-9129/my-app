"use client";

import { useState } from "react";
import { LoginAdmin } from "../Actions/login";

export default function AdminLogin() {
    const [error, setError] = useState("");

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">

            <form
                action={async (formData) => {
                    const res = await LoginAdmin(formData);

                    if (res?.success === false) {
                        setError(res.message);
                    }
                }}
            >
                <div className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-96">

                    <h2 className="text-3xl font-bold text-center mb-2">
                        Admin Panel
                    </h2>

                    <p className="text-center text-gray-500 mb-6">
                        Login to continue
                    </p>

                    {/* Error */}
                    {error && (
                        <p className="text-red-600 text-center mb-3">
                            {error}
                        </p>
                    )}

                    {/* Username */}
                    <div className="mb-4">
                        <input
                            name="username"   // ⭐ IMPORTANT
                            type="text"
                            placeholder="Username"
                            required
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <input
                            name="password"   // ⭐ IMPORTANT
                            type="password"
                            placeholder="Password"
                            required
                            className="w-full p-2 border rounded"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-2 bg-purple-600 text-white rounded hover:scale-105 transition"
                    >
                        Login
                    </button>

                </div>
            </form>

        </div>
    );
}
