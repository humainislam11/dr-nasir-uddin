// প্রয়োজনীয় কম্পোনেন্ট আমদানি করা হচ্ছে
import React from 'react';
import { Link } from 'react-router-dom'; // এইটি একটি পেইজ থেকে অন্য পেইজে যাওয়ার জন্য ব্যবহৃত হয়।

// ছয়টি বিভাগের তথ্য একটি অ্যারেতে রাখা হয়েছে
const galleryCategories = [
  { id: 1, name: 'Chamber', photoUrl: 'https://i.ibb.co.com/Xxb8fpTc/nasir-sir-business-card.jpg' },
  { id: 2, name: 'Office', photoUrl: 'https://i.ibb.co.com/kgJkDL1q/office-2.jpg' },
  { id: 3, name: 'Personal', photoUrl: 'https://i.ibb.co.com/wrMQ6Vkw/Whats-App-Image-2025-08-27-at-7-14-30-PM.jpg' },
  { id: 4, name: 'Program', photoUrl: 'https://i.ibb.co.com/5hXFH5Cz/Program-Speech.jpg' },
  { id: 5, name: 'Visit', photoUrl: 'https://i.ibb.co.com/h1FJHdLq/Whats-App-Image-2025-08-27-at-5-52-47-PM-1.jpg' },
  { id: 6, name: 'Treatment', photoUrl: 'https://i.ibb.co.com/whkzgBYq/Treatment-2.jpg' },
];

// EventGallery কম্পোনেন্ট তৈরি করা হচ্ছে
const Gallery = () => {
  return (
    // মূল কনটেইনার
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* গ্যালারির শিরোনাম এবং বর্ণনা */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-800">আমাদের ইভেন্ট গ্যালারি</h2>
        <p className="mt-2 text-lg text-gray-600">আমাদের কাজকে বিভিন্ন বিভাগের মাধ্যমে দেখুন।</p>
      </div>

      {/* গ্রিড লেআউট */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* প্রতিটি বিভাগের জন্য লুপ চালানো হচ্ছে */}
        {galleryCategories.map((category) => (
          // প্রতিটি বিভাগ একটি লিংকের মধ্যে রাখা হয়েছে
          <Link 
            key={category.id} 
            to={`/gallery/${category.name.toLowerCase()}`}
            className="group block rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
          >
            {/* ছবির জন্য কন্টেইনার */}
            <div className="relative">
              <img 
                src={category.photoUrl} 
                alt={category.name} 
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:brightness-75"
              />
              {/* ছবির উপর বিভাগের নাম দেখানোর জন্য */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.name}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Gallery;