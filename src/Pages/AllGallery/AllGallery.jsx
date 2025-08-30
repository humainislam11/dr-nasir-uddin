import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

// --- গ্যালারি ডেটা (Gallery Data) ---
const allGalleries = {
  chamber: [
    { id: 1, url: 'https://i.ibb.co.com/whkzgBYq/Treatment-2.jpg', caption: 'As a doctor, my primary commitment is to my patients. This photo shows me in a moment of attentive service, carefully checking an elderly patients blood pressure. It’s a representation of the compassionate and professional care I provide every day, focusing on the personal connection that is so vital to my work.' },
    { id: 2, url: 'https://i.ibb.co.com/Xxb8fpTc/nasir-sir-business-card.jpg', caption: 'চেম্বারের ভেতরের দৃশ্য' },
    { id: 3, url: 'https://via.placeholder.com/600x400.png?text=Chamber+Photo+3', caption: 'পেশাগত কাজের সময়' },
  ],
  office: [
    { id: 1, url: 'https://via.placeholder.com/600x400.png?text=Office+Photo+1', caption: 'অফিসের মিটিং' },
    { id: 2, url: 'https://via.placeholder.com/600x400.png?text=Office+Photo+2', caption: 'সহকর্মীদের সাথে' },
  ],
  personal: [
    { id: 1, url: 'https://via.placeholder.com/600x400.png?text=Personal+Photo+1', caption: 'একটি ব্যক্তিগত মুহূর্ত' },
    { id: 2, url: 'https://via.placeholder.com/600x400.png?text=Personal+Photo+2', caption: 'পরিবারের সাথে' },
  ],
  program: [
    { id: 1, url: 'https://via.placeholder.com/600x400.png?text=Program+Photo+1', caption: 'সেমিনারে বক্তব্য' },
    { id: 2, url: 'https://via.placeholder.com/600x400.png?text=Program+Photo+2', caption: 'কর্মশালায় অংশগ্রহণ' },
  ],
  visit: [
    { id: 1, url: 'https://i.ibb.co.com/zWvBNTr0/Whats-App-Image-2025-08-27-at-5-52-24-PM.jpg', caption: 'This trip to Vietnam was an extraordinary experience for us. We gathered in front of the "Sun World Ba Na Hills" sign, which beautifully reflects our teams joy and unity. The photo perfectly captures a wonderful moment of leisure and team bonding outside of the office environment' },
    { id: 2, url: 'https://i.ibb.co.com/YF8XmZzf/Whats-App-Image-2025-08-27-at-6-55-28-PM.jpg', caption: 'কমিউনিটি ভিজিটের সময়' },
     { id: 3, url: 'https://i.ibb.co.com/1t9ztgjV/Whats-App-Image-2025-08-27-at-5-56-07-PM.jpg', caption: 'কমিউনিটি ভিজিটের সময়' },
  ],
  treatment: [
    { id: 1, url: 'https://via.placeholder.com/600x400.png?text=Treatment+Photo+1', caption: 'চিকিৎসা সেবার মুহূর্ত' },
    { id: 2, url: 'https://via.placeholder.com/600x400.png?text=Treatment+Photo+2', caption: 'রোগীর সেবায় নিয়োজিত' },
  ],
};

const galleryCategories = [
  { id: 'chamber', name: 'Chamber', photoUrl: 'https://i.ibb.co.com/Xxb8fpTc/nasir-sir-business-card.jpg' },
  { id: 'office', name: 'Office', photoUrl: 'https://i.ibb.co.com/kgJkDL1q/office-2.jpg' },
  { id: 'personal', name: 'Personal', photoUrl: 'https://i.ibb.co.com/wrMQ6Vkw/Whats-App-Image-2025-08-27-at-7-14-30-PM.jpg' },
  { id: 'program', name: 'Program', photoUrl: 'https://i.ibb.co.com/5hXFH5Cz/Program-Speech.jpg' },
  { id: 'visit', name: 'Visit', photoUrl: 'https://i.ibb.co.com/h1FJHdLq/Whats-App-Image-2025-08-27-at-5-52-47-PM-1.jpg' },
  { id: 'treatment', name: 'Treatment', photoUrl: 'https://i.ibb.co.com/whkzgBYq/Treatment-2.jpg' },
];

const AllGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Function to render the category grid
  const CategoryGrid = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 bg-slate-200">
      {galleryCategories.map((category) => (
        <div 
          key={category.id} 
          onClick={() => setSelectedCategory(category.id)}
          className="group block rounded-lg overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 cursor-pointer"
        >
          <div className="relative">
            <img 
              src={category.photoUrl} 
              alt={category.name} 
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:brightness-75"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h3 className="text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {category.name}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  // Function to render photos for a specific category
  const PhotoGrid = () => {
    const photos = allGalleries[selectedCategory] || [];
    const categoryName = galleryCategories.find(cat => cat.id === selectedCategory)?.name;

    return (
      <div>
        <div className="text-center mb-8">
          <button
            onClick={() => setSelectedCategory(null)}
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 mb-4"
          >
            <FaArrowLeft className="mr-2" /> Go back to categories.</button>
          <h1 className="text-3xl font-bold text-gray-800">{categoryName} Gallery</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {photos.length > 0 ? (
            photos.map(photo => (
              <div key={photo.id} className="rounded-lg shadow-md overflow-hidden">
                <img src={photo.url} alt={photo.caption} className="w-full h-auto" />
                <p className="p-4 text-center text-gray-600">{photo.caption}</p>
              </div>
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">This category has no photos.</p>
          )}
        </div>
      </div>
    );
  };
  
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 bg-slate-200">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mt-6"> Event Gallery</h2>
        <p className="pt-2 font-medium p-4 mt-3 text-lg text-gray-600">Our event gallery is organized into six primary categories, showcasing a collection of photographs from our various activities. Each category provides a dedicated view of our work. Simply click on a category to explore the related photos directly on this page, ensuring a smooth and seamless user experience.</p>
      </div>
      
      {/* State-এর উপর ভিত্তি করে কন্টেন্ট দেখানো হচ্ছে */}
      {selectedCategory ? <PhotoGrid /> : <CategoryGrid />}
    </div>
  );
};

export default AllGallery;
