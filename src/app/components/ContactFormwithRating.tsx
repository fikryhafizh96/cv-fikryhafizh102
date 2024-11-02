"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';

const ContactFormWithRating: React.FC = () => {
    const [formData, setFormData] = useState<{ name: string; comment: string; rating: number }>({
        name: '',
        comment: '',
        rating: 0
    });
    const [ratings, setRatings] = useState<number[]>([]);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRatingChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(0, Math.min(5, Number(e.target.value))); // Membatasi rating antara 0-5
        setFormData({ ...formData, rating: value });
    };

    const handleRating = (value: number) => {
        setFormData({ ...formData, rating: value });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        sendToWhatsApp();
    };

    const sendToWhatsApp = () => {
        const message = `Hallo, saya ingin memberikan komentar berikut:%0A` +
                        `Nama: ${formData.name}%0A` +
                        `Komentar: ${formData.comment}%0A` +
                        `Rating: ${formData.rating}`;
        const whatsappURL = `https://wa.me/6285846589594?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank"); // Membuka WhatsApp di tab baru
        setSubmitted(true);
        setRatings([...ratings, formData.rating]);
        setFormData({ name: '', comment: '', rating: 0 });
    };

    // Menghitung average rating
    const averageRating = ratings.length > 0
        ? (ratings.reduce((acc, curr) => acc + curr, 0) / ratings.length).toFixed(1)
        : 0;

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2 style={{ textAlign: 'center' }}>Contact Form with Rating</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="name">Nama:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="comment">Komentar:</label>
                    <textarea
                        id="comment"
                        name="comment"
                        value={formData.comment}
                        onChange={handleChange}
                        required
                        rows={4} // Mengubah menjadi number
                        style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label>Rating:</label>
                    <div style={{ display: 'flex', marginBottom: '5px' }}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <span
                                key={star}
                                onClick={() => handleRating(star)}
                                style={{ cursor: 'pointer', color: formData.rating >= star ? 'gold' : 'gray', fontSize: '24px' }}
                            >
                                ★
                            </span>
                        ))}
                    </div>
                    <label htmlFor="rating">Atau masukkan rating (0-5):</label>
                    <input
                        type="number"
                        id="rating"
                        name="rating"
                        value={formData.rating}
                        onChange={handleRatingChange}
                        min="0"
                        max="5"
                        required
                        style={{ width: '100%', padding: '8px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                    />
                </div>
                <button
                    type="submit"
                    style={{ width: '100%', padding: '10px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                >
                    Kirim Lewat WhatsApp
                </button>
            </form>
            {submitted && (
                <p style={{ textAlign: 'center', marginTop: '10px', color: 'green', fontWeight: 'bold' }}>
                    Pesan Anda telah dikirim!
                </p>
            )}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <h3>Average Rating: {averageRating} Stars</h3>
            </div>
        </div>
    );
};

export default ContactFormWithRating;
