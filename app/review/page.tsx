"use client";

import { useState, useEffect } from "react";

export default function ReviewPage() {
    const [form, setForm] = useState({
        name: "",
        contact: "",
        rating: 0,
        message: "",
    });

    const [reviews, setReviews] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    // Fetch Reviews
    const fetchReviews = async () => {
        try {
            const res = await fetch("/api/review");
            const data = await res.json();
            if (data.success) {
                setReviews(data.data);
            }
        } catch (error) {
            console.error("Failed to fetch reviews:", error);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    // Rating Text
    const getRatingText = (rating: number) => {
        if (rating <= 2) return "😞 Bad";
        if (rating === 3) return "🙂 Good";
        if (rating === 4) return "😃 Very Good";
        if (rating === 5) return "🌟 Excellent";
        return "";
    };

    // Handle Change
    const handleChange = (e: any) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    // Handle Rating
    const handleRating = (star: number) => {
        setForm({ ...form, rating: star });
    };

    // Submit
    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!form.name || !form.contact || !form.rating) {
            alert("Please fill all fields");
            return;
        }

        setLoading(true);

        try {
            const res = await fetch("/api/review", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form),
            });

            const data = await res.json();

            if (data.success) {
                setReviews([data.data, ...reviews]);
                setForm({
                    name: "",
                    contact: "",
                    rating: 0,
                    message: "",
                });
                alert("Review submitted successfully!");
            } else {
                alert("Failed to submit review: " + data.error);
            }
        } catch (error) {
            console.error("Error submitting review:", error);
            alert("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-purple-50 py-12 px-4">

            {/* Title */}
            <h1 className="text-4xl font-bold text-center mb-10 text-blue-800">
                ⭐ Student Feedback
            </h1>

            {/* Form Card */}
            <div className="max-w-xl mx-auto bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border">

                <h2 className="text-2xl font-semibold mb-6 text-gray-700">
                    Share Your Experience
                </h2>

                <form onSubmit={handleSubmit} className="space-y-5">

                    {/* Name */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                    />

                    {/* Contact */}
                    <input
                        type="text"
                        name="contact"
                        placeholder="Mobile Number"
                        value={form.contact}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                    />

                    {/* Rating */}
                    <div>

                        <p className="font-medium mb-2 text-gray-600">
                            Rate Us
                        </p>

                        <div className="flex items-center gap-2 text-3xl">

                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    type="button"
                                    key={star}
                                    onClick={() => handleRating(star)}
                                    className={`transition transform hover:scale-125 ${star <= form.rating
                                        ? "text-yellow-400"
                                        : "text-gray-300"
                                        }`}
                                >
                                    ★
                                </button>
                            ))}

                        </div>

                        {/* Rating Text */}
                        {form.rating > 0 && (
                            <p className="mt-2 font-semibold text-blue-600">
                                {getRatingText(form.rating)}
                            </p>
                        )}

                    </div>

                    {/* Message */}
                    <textarea
                        name="message"
                        placeholder="Write your feedback..."
                        value={form.message}
                        onChange={handleChange}
                        className="w-full border border-gray-300 p-3 rounded-lg h-28 focus:ring-2 focus:ring-blue-400 outline-none"
                    />

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition disabled:opacity-50"
                    >
                        {loading ? "Submitting..." : "Submit Feedback"}
                    </button>

                </form>
            </div>

            {/* Reviews */}
            <div className="max-w-xl mx-auto mt-12">

                <h2 className="text-2xl font-semibold mb-6 text-gray-700">
                    Student Reviews
                </h2>

                {reviews.length === 0 ? (
                    <p className="text-center text-gray-500">
                        No reviews submitted yet.
                    </p>
                ) : (
                    reviews.map((item: any, index: number) => (
                        <div
                            key={item._id || index}

                            className="bg-white p-6 rounded-xl shadow-md mb-5 border hover:shadow-lg transition"
                        >

                            <div className="flex justify-between items-start">

                                <div>
                                    <h3 className="font-bold text-lg text-gray-800">
                                        {item.name}
                                    </h3>
                                    <p className="text-xs text-gray-400 mt-1">
                                        {item.createdAt ? new Date(item.createdAt).toLocaleDateString(undefined, {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        }) : 'Just now'}
                                    </p>
                                </div>

                                <span className="text-sm text-blue-800 font-medium bg-blue-50 px-3 py-1 rounded-full">
                                    {getRatingText(item.rating)}
                                </span>

                            </div>

                            <p className="text-sm text-gray-500 mt-3 flex items-center gap-2">
                                <span>📞 {item.contact}</span>
                            </p>

                            <div className="text-yellow-400 text-lg mt-2">
                                {/* Ensure item.rating is treated as a number */}
                                {Array.from({ length: 5 }, (_, i) => (
                                    <span key={i}>
                                        {i < item.rating ? "★" : "☆"}
                                    </span>
                                ))}
                            </div>


                            <p className="mt-3 text-gray-700 leading-relaxed">
                                {item.message}
                            </p>

                        </div>
                    ))
                )}

            </div>

        </main>
    );
}
