import React, { useState } from "react";
import { Star, ThumbsUp } from "lucide-react";

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Ritika Sharma",
      rating: 5,
      comment:
        "Absolutely delicious pickle! Reminds me of my childhood summers. Perfect balance of spice and tanginess.",
      date: "2 days ago",
      likes: 23,
      avatar: "https://i.pravatar.cc/50?img=12",
    },
    {
      id: 2,
      name: "Amit Verma",
      rating: 4,
      comment:
        "Loved the flavor and quality. Packaging was excellent too. Could be a bit spicier though.",
      date: "1 week ago",
      likes: 14,
      avatar: "https://i.pravatar.cc/50?img=7",
    },
  ]);

  const averageRating = (
    reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length
  ).toFixed(1);

  const totalReviews = reviews.length;

  const ratingDistribution = {
    5: 70,
    4: 20,
    3: 7,
    2: 2,
    1: 1,
  };

  // Form State
  const [form, setForm] = useState({
    name: "",
    rating: 0,
    comment: "",
  });

  const handleRating = (rating) => {
    setForm({ ...form, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.comment || form.rating === 0) return;

    const newReview = {
      id: Date.now(),
      name: form.name,
      rating: form.rating,
      comment: form.comment,
      date: "Just now",
      likes: 0,
      avatar: `https://i.pravatar.cc/50?u=${form.name}`,
    };

    setReviews([newReview, ...reviews]);
    setForm({ name: "", rating: 0, comment: "" });
  };

  return (
    <section className="max-w-6xl mx-auto mt-16 px-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Customer Reviews</h2>

      {/* Summary */}
      <div className="bg-white/70 backdrop-blur-md rounded-2xl p-6 shadow-md flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Average Rating */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-5xl font-bold text-gray-900">{averageRating}</h3>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className={`${
                  i < Math.round(averageRating)
                    ? "text-amber-500 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <p className="text-gray-600 mt-2">{totalReviews} verified reviews</p>
        </div>

        {/* Rating Breakdown */}
        <div className="flex-1 space-y-2 w-full">
          {Object.entries(ratingDistribution)
            .sort(([a], [b]) => b - a)
            .map(([stars, percent]) => (
              <div key={stars} className="flex items-center space-x-3">
                <span className="text-sm text-gray-600 w-8">{stars}★</span>
                <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-amber-500 h-3 rounded-full"
                    style={{ width: `${percent}%` }}
                  />
                </div>
                <span className="text-sm text-gray-600">{percent}%</span>
              </div>
            ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="mt-8 space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-md hover:shadow-lg transition-all"
          >
            <div className="flex items-center mb-3">
              <img
                src={review.avatar}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h4 className="font-semibold text-gray-900">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className={`${
                    i < review.rating
                      ? "text-amber-500 fill-current"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>

            {/* Comment */}
            <p className="text-gray-700 leading-relaxed">{review.comment}</p>

            {/* Likes */}
            <div className="flex items-center mt-3 text-sm text-gray-500">
              <ThumbsUp size={16} className="mr-1 text-gray-400" />
              {review.likes} people found this helpful
            </div>
          </div>
        ))}
      </div>

      {/* Write a Review Form */}
      <div className="mt-12 bg-white/80 backdrop-blur-md rounded-2xl p-6 shadow-md">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">
          Write a Review
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Star Rating Input */}
          <div className="flex items-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={24}
                onClick={() => handleRating(i + 1)}
                className={`cursor-pointer ${
                  i < form.rating
                    ? "text-amber-500 fill-current"
                    : "text-gray-300 hover:text-amber-400"
                }`}
              />
            ))}
          </div>

          {/* Name Input */}
          <input
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
          />

          {/* Comment Input */}
          <textarea
            placeholder="Share your experience..."
            value={form.comment}
            onChange={(e) => setForm({ ...form, comment: e.target.value })}
            className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-amber-500 outline-none h-28"
          ></textarea>

          {/* Submit */}
          <button
            type="submit"
            className="bg-amber-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
          >
            Submit Review
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReviewsSection;
