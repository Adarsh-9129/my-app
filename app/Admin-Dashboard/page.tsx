"use client";

import { useEffect, useState } from "react";

import { LogoutAdmin } from "../Actions/logout";

/* Review Type */
interface Review {
    _id: string;
    name: string;
    contact: string;
    rating: number;
    message: string;
    createdAt: string;
}

/* Contact Type */
interface Contact {
    _id: string;
    fullName: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
    createdAt: string;
}

/* Demo Type */
interface Demo {
    _id: string;
    studentName: string;
    parentEmail: string;
    phone: string;
    className: string;
    message?: string;
    createdAt: string;
}

/* User Request Type */
interface UserRequest {
    _id: string;
    studentName: string;
    parentName: string;
    email: string;
    phone: string;
    classApplying: string;
    message?: string;
    createdAt: string;
}

export default function Dashboard() {
    const [reviews, setReviews] = useState<Review[]>([]);
    const [contactMessages, setContactMessages] = useState<Contact[]>([]);
    const [demoRequests, setDemoRequests] = useState<Demo[]>([]);
    const [userRequests, setUserRequests] = useState<UserRequest[]>([]);
    const [loading, setLoading] = useState(true);

    const [view, setView] = useState("reviews");

    /* Fetch Reviews */
    const fetchReviews = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/review");
            const data = await res.json();
            if (data.success) {
                setReviews(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch reviews:", error);
        } finally {
            setLoading(false);
        }
    };

    /* Fetch Contacts */
    const fetchContacts = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/contact");
            const data = await res.json();
            if (data.success) {
                setContactMessages(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch contacts:", error);
        } finally {
            setLoading(false);
        }
    };

    /* Fetch Demos */
    const fetchDemos = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/demo");
            const data = await res.json();
            if (data.success) {
                setDemoRequests(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch demo requests:", error);
        } finally {
            setLoading(false);
        }
    };

    /* Fetch User Requests */
    const fetchUserRequests = async () => {
        setLoading(true);
        try {
            const res = await fetch("/api/Users");
            const data = await res.json();
            if (data.success) {
                setUserRequests(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch user requests:", error);
        } finally {
            setLoading(false);
        }
    };

    /* Fetch Data on View Change */
    useEffect(() => {
        if (view === "reviews") fetchReviews();
        if (view === "contactrequest") fetchContacts();
        if (view === "demorequest") fetchDemos();
        if (view === "userrequests") fetchUserRequests();
    }, [view]);

    /* Delete Review */
    const deleteReview = async (id: string) => {
        if (!confirm("Delete this review?")) return;

        try {
            const res = await fetch(`/api/review/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();

            if (data.success) {
                setReviews((prev) => prev.filter((r) => r._id !== id));
            } else {
                alert("Failed to delete review: " + data.error);
            }
        } catch (error) {
            console.error("Error deleting review:", error);
            alert("Something went wrong!");
        }
    };

    /* Delete Contact */
    const deleteContact = async (id: string) => {
        if (!confirm("Delete this message?")) return;

        try {
            const res = await fetch(`/api/contact/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();

            if (data.success) {
                setContactMessages((prev) => prev.filter((c) => c._id !== id));
            } else {
                alert("Failed to delete message: " + data.error);
            }
        } catch (error) {
            console.error("Error deleting message:", error);
            alert("Something went wrong!");
        }
    };

    /* Delete Demo */
    const deleteDemo = async (id: string) => {
        if (!confirm("Delete this request?")) return;

        try {
            const res = await fetch(`/api/demo/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();

            if (data.success) {
                setDemoRequests((prev) => prev.filter((d) => d._id !== id));
            } else {
                alert("Failed to delete request: " + data.error);
            }
        } catch (error) {
            console.error("Error deleting request:", error);
            alert("Something went wrong!");
        }
    };

    /* Delete User Request */
    const deleteUserRequest = async (id: string) => {
        if (!confirm("Delete this user request?")) return;

        try {
            const res = await fetch(`/api/Users/${id}`, {
                method: "DELETE",
            });
            const data = await res.json();

            if (data.success) {
                setUserRequests((prev) => prev.filter((u) => u._id !== id));
            } else {
                alert("Failed to delete user request: " + data.error);
            }
        } catch (error) {
            console.error("Error deleting user request:", error);
            alert("Something went wrong!");
        }
    };

    /* Logout */
    const handleLogout = async () => {
        await LogoutAdmin();
    };

    /* Stats */
    const total = reviews.length;
    // Calculate average rating instead of approved/pending
    const avgRating = total > 0
        ? (reviews.reduce((acc, r) => acc + r.rating, 0) / total).toFixed(1)
        : "0";

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">

            {/* HEADER */}
            <header className="flex flex-col md:flex-row gap-4 justify-between items-center px-8 py-6 border-b border-white/10 backdrop-blur-lg bg-white/5">

                <h1 className="text-2xl font-bold">
                    Admin Dashboard
                </h1>

                {/* Navbar Options */}
                <nav className="flex gap-2 bg-white/10 p-1 rounded-lg">
                    {["Reviews", "ContactRequest", "DemoRequest", "UserRequests"].map((item) => (
                        <button
                            key={item}
                            onClick={() => setView(item.toLowerCase())}
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${view === item.toLowerCase()
                                ? "bg-indigo-600 text-white shadow-lg"
                                : "text-gray-300 hover:text-white hover:bg-white/10"
                                }`}
                        >
                            {item}
                        </button>
                    ))}
                </nav>

                <button
                    onClick={handleLogout}
                    className="px-4 py-2 rounded-lg bg-red-500/90 hover:bg-red-600 transition"
                >
                    Logout
                </button>

            </header>

            {/* CONTENT */}
            <section className="p-8 max-w-7xl mx-auto">

                {view === "reviews" && (
                    <>
                        {/* STATS */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

                            <StatCard
                                title="Total Reviews"
                                value={total}
                                color="from-indigo-500 to-purple-600"
                            />

                            <StatCard
                                title="Avg Rating"
                                value={avgRating}
                                color="from-yellow-500 to-orange-600"
                            />

                            <StatCard
                                title="Latest Activity"
                                value={total > 0 ? "Active" : "None"}
                                color="from-emerald-500 to-green-600"
                            />

                        </div>

                        {/* REVIEW LIST */}
                        <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/10">

                            <h2 className="text-xl font-semibold mb-6">
                                User Reviews
                            </h2>

                            {loading && (
                                <p className="text-center py-10 text-gray-400">
                                    Loading reviews...
                                </p>
                            )}

                            {!loading && reviews.length === 0 && (
                                <p className="text-center py-10 text-gray-400">
                                    No reviews found
                                </p>
                            )}

                            <div className="space-y-4">

                                {reviews.map((r) => (
                                    <div
                                        key={r._id}
                                        className="flex flex-col md:flex-row md:items-center
                                justify-between gap-4
                                bg-black/40 rounded-xl p-4
                                border border-white/10
                                hover:scale-[1.01] transition-all"
                                    >

                                        {/* Info */}
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3">
                                                <h3 className="font-semibold text-lg">
                                                    {r.name}
                                                </h3>
                                                <span className="text-yellow-400 text-sm">
                                                    {"★".repeat(r.rating)}
                                                </span>
                                            </div>

                                            <p className="text-gray-300 text-sm mt-1">
                                                {r.message}
                                            </p>

                                            <div className="flex gap-4 mt-2 text-xs text-gray-500">
                                                <span>📞 {r.contact}</span>
                                                <span>📅 {new Date(r.createdAt).toLocaleDateString()}</span>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="flex gap-3">
                                            <button
                                                onClick={() => deleteReview(r._id)}
                                                className="px-4 py-1.5 rounded-lg
                                    bg-red-500/90 hover:bg-red-600 transition text-sm"
                                            >
                                                Delete
                                            </button>
                                        </div>

                                    </div>
                                ))}

                            </div>

                        </div>
                    </>
                )}

                {view === "contactrequest" && (
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/10">
                        <h2 className="text-xl font-semibold mb-6">Contact Requests</h2>

                        {loading && (
                            <p className="text-center py-10 text-gray-400">Loading messages...</p>
                        )}

                        {!loading && contactMessages.length === 0 && (
                            <p className="text-center py-10 text-gray-400">No contact requests found</p>
                        )}

                        <div className="space-y-4">
                            {contactMessages.map((msg) => (
                                <div
                                    key={msg._id}
                                    className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-black/40 rounded-xl p-4 border border-white/10 hover:scale-[1.01] transition-all"
                                >
                                    {/* Info */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3">
                                            <h3 className="font-semibold text-lg">{msg.fullName}</h3>
                                            <span className="text-xs text-indigo-400 bg-indigo-400/10 px-2 py-0.5 rounded-full">{msg.subject}</span>
                                        </div>

                                        <p className="text-gray-300 text-sm mt-1">{msg.message}</p>

                                        <div className="flex gap-4 mt-2 text-xs text-gray-500">
                                            <span>📧 {msg.email}</span>
                                            {msg.phone && <span>📞 {msg.phone}</span>}
                                            <span>📅 {new Date(msg.createdAt).toLocaleDateString()}</span>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => deleteContact(msg._id)}
                                            className="px-4 py-1.5 rounded-lg bg-red-500/90 hover:bg-red-600 transition text-sm"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {view === "demorequest" && (
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/10">
                        <h2 className="text-xl font-semibold mb-6">Demo Requests</h2>

                        {loading && (
                            <p className="text-center py-10 text-gray-400">Loading requests...</p>
                        )}

                        {!loading && demoRequests.length === 0 && (
                            <p className="text-center py-10 text-gray-400">No demo requests found</p>
                        )}

                        <div className="space-y-4">
                            {demoRequests.map((req) => (
                                <div
                                    key={req._id}
                                    className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-black/40 rounded-xl p-4 border border-white/10 hover:scale-[1.01] transition-all"
                                >
                                    {/* Info */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3">
                                            <h3 className="font-semibold text-lg">{req.studentName}</h3>
                                            <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full">Class: {req.className}</span>
                                        </div>

                                        <p className="text-gray-300 text-sm mt-1">{req.message || "No message provided"}</p>

                                        <div className="flex gap-4 mt-2 text-xs text-gray-500">
                                            <span>📧 {req.parentEmail}</span>
                                            <span>📞 {req.phone}</span>
                                            <span>📅 {new Date(req.createdAt).toLocaleDateString()}</span>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => deleteDemo(req._id)}
                                            className="px-4 py-1.5 rounded-lg bg-red-500/90 hover:bg-red-600 transition text-sm"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {view === "userrequests" && (
                    <div className="bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl p-6 border border-white/10">
                        <h2 className="text-xl font-semibold mb-6">User Requests (Enquiries)</h2>

                        {loading && (
                            <p className="text-center py-10 text-gray-400">Loading requests...</p>
                        )}

                        {!loading && userRequests.length === 0 && (
                            <p className="text-center py-10 text-gray-400">No user requests found</p>
                        )}

                        <div className="space-y-4">
                            {userRequests.map((req) => (
                                <div
                                    key={req._id}
                                    className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-black/40 rounded-xl p-4 border border-white/10 hover:scale-[1.01] transition-all"
                                >
                                    {/* Info */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3">
                                            <h3 className="font-semibold text-lg">{req.studentName}</h3>
                                            <span className="text-xs text-blue-400 bg-blue-400/10 px-2 py-0.5 rounded-full">Class: {req.classApplying}</span>
                                        </div>
                                        <p className="text-xs text-gray-400 mb-1">Parent: {req.parentName}</p>

                                        <p className="text-gray-300 text-sm mt-1">{req.message || "No message provided"}</p>

                                        <div className="flex gap-4 mt-2 text-xs text-gray-500">
                                            <span>📧 {req.email}</span>
                                            <span>📞 {req.phone}</span>
                                            <span>📅 {new Date(req.createdAt).toLocaleDateString()}</span>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => deleteUserRequest(req._id)}
                                            className="px-4 py-1.5 rounded-lg bg-red-500/90 hover:bg-red-600 transition text-sm"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

            </section>


        </main>
    );
}

/* STAT CARD */

function StatCard({
    title,
    value,
    color,
}: {
    title: string;
    value: string | number;
    color: string;
}) {
    return (
        <div
            className={`rounded-2xl p-6 shadow-xl
                  bg-gradient-to-r ${color}
                  hover:scale-105 transition`}
        >
            <h3 className="text-sm opacity-90 mb-2">
                {title}
            </h3>

            <p className="text-3xl font-bold">
                {value}
            </p>
        </div>
    );
}
