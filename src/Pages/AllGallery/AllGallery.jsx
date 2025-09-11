import React, { useState } from 'react';
import { FaArrowLeft } from 'react-icons/fa';

// --- গ্যালারি ডেটা (Gallery Data) ---
const allGalleries = {
  chamber: [
    { id: 1, url: 'https://i.ibb.co.com/whkzgBYq/Treatment-2.jpg', caption: 'As a doctor, my primary commitment is to my patients. This photo shows me in a moment of attentive service, carefully checking an elderly patients blood pressure. It’s a representation of the compassionate and professional care I provide every day, focusing on the personal connection that is so vital to my work.' },
    { id: 2, url: 'https://i.ibb.co.com/Xxb8fpTc/nasir-sir-business-card.jpg', caption: 'This is my professional identity and my contact information, all in one place. My business card represents my dedication to both health and education. It includes my academic qualifications and my various professional roles, from medicine to public health, highlighting my commitment to serving the community.' },
    { id: 3, url: 'https://i.ibb.co.com/SDMFBC32/chember.jpg', caption: 'This is my professional chamber and its contact details, clearly displayed. It serves as a guide for my patients, showing my qualifications and the times I am available for consultations. The image represents the professional environment where I serve my community with dedication and care.' },
    { id: 4, url: 'https://i.ibb.co.com/9k68vjZ5/Dr-Nasir-Sir-PRESCRIPTION-02-01.jpg', caption: 'This prescription pad is more than just a document; it represents my professional journey and my commitment to medicine. The qualifications listed, from my Ph.D. to my experience in senior roles like Civil Surgeon, are the foundation of the care I provide. Every prescription is a promise that I am using my decades of experience to ensure the health and well-being of my patients and community.' }
  ],
  office: [
    { id: 1, url: 'https://i.ibb.co.com/238pkBkr/Office.jpg', caption: 'This photo captures a pivotal moment at the office. Here I am with my respected colleagues, standing in front of the portraits of two visionary leaders. This image signifies our collective dedication to our mission and the collaborative spirit that drives our work. It is a moment of professional camaraderie and shared purpose, proudly reflecting our office environment.' },
    { id: 2, url: 'https://i.ibb.co.com/kgJkDL1q/office-2.jpg', caption: 'This photo marks a special occasion at the office. Here I am with my colleagues, who have come together to present me with a bouquet of flowers as a gesture of appreciation. The moment signifies the respect and positive relationships we share, highlighting the strong bonds within our professional family. It truly captures a heartfelt moment of recognition and teamwork.' },
     { id: 3, url: 'https://i.ibb.co.com/nNBtbQkx/Whats-App-Image-2025-08-27-at-7-07-42-PM.jpg', caption: 'This photo captures a significant moment during a recent meeting. It shows me and my esteemed colleagues engaged in a discussion, sharing insights and deliberating on important topics. This image highlights our collective dedication to professional growth and collaboration, reflecting our shared commitment to the work we do.' },
     { id: 4, url: 'https://i.ibb.co.com/WWRHnyRW/Whats-App-Image-2025-08-27-at-6-08-30-PM.jpg', caption: 'This photo captures a truly special and memorable moment in my professional life. Here, Im surrounded by my esteemed colleagues and well-wishers. Their affection and respect, so beautifully symbolized by these flowers, mean a great deal to me. This gathering is a testament to the strong bonds weve built through our shared efforts and mutual respect. Im deeply grateful for their support.' }
  ],
  personal: [
    { id: 1, url: 'https://i.ibb.co.com/wrMQ6Vkw/Whats-App-Image-2025-08-27-at-7-14-30-PM.jpg', caption: 'This photo captures a personal moment outside, where I find peace in nature. Standing in front of my residence, I feel a sense of contentment and ease. Its a glimpse into my life outside of work, reflecting my appreciation for simple and quiet moments.' },
    { id: 2, url: 'https://i.ibb.co.com/M5MRZ4x7/Whats-App-Image-2025-08-28-at-14-52-02-1c258094.jpg', caption: 'This family photo holds a special place in my heart. It was taken during a joyous occasion, where my entire family gathered together. Seeing everyone dressed in their finest attire and smiling together brings me immense happiness. This image reminds me of the importance of my family and the joy we share, a true source of strength and support in my life.' },
    { id: 3, url: 'https://i.ibb.co.com/xtbJK0dr/Whats-App-Image-2025-08-28-at-14-52-01-be7d5ccf.jpg', caption: 'This photograph captures a beautiful and cherished moment from my sons wedding. Surrounded by my beloved family, we gathered to celebrate this joyous occasion. The smiles on everyones faces reflect the happiness and unity we share. This image serves as a timeless reminder of a special day and the strong bonds of our family.' }
  ],
  program: [
    { id: 1, url: 'https://i.ibb.co.com/v6Pbfc2s/Leading-University.jpg', caption: 'This photo captures me and my wife during a joyous graduation ceremony at Leading University. Wearing our graduation robes and sashes, we stand together with proud smiles. This image commemorates our hard work and shared academic success, symbolizing a moment of professional achievement and mutual support in our lives.' },
    { id: 2, url: 'https://i.ibb.co.com/b5RTgNnM/Prize-Ceremony-Program.jpg', caption: 'This photo captures a moment from a prize ceremony program at South West Sylhet Ahmed School and College. As a distinguished guest, I was honored to be a part of this event. The image reflects my ongoing commitment to supporting education and recognizing academic excellence, highlighting the importance of celebrating the achievements of young minds.' },
     { id: 3, url: 'https://i.ibb.co.com/5hXFH5Cz/Program-Speech.jpg', caption: 'This photo captures a moment where I am giving a speech during a program. It shows my passion for public speaking and sharing knowledge with others. The image reflects my role as a leader and an educator, committed to inspiring and guiding the community.' },
     { id: 4, url: 'https://i.ibb.co.com/4wJL3MbX/SWWT-Family.jpg', caption: 'Our recent South West Welfare Trust family get-together was a truly special event. This photo captures a moment on stage with our esteemed members and guests. It was a wonderful occasion to celebrate our collective achievements, strengthen the bonds within our community, and reaffirm our commitment to social welfare.' }
  ],
  travel: [
    { id: 1, url: 'https://i.ibb.co.com/zWvBNTr0/Whats-App-Image-2025-08-27-at-5-52-24-PM.jpg', caption: 'This trip to Vietnam was an extraordinary experience for us. We gathered in front of the "Sun World Ba Na Hills" sign, which beautifully reflects our teams joy and unity. The photo perfectly captures a wonderful moment of leisure and team bonding outside of the office environment' },
    { id: 2, url: 'https://i.ibb.co.com/YF8XmZzf/Whats-App-Image-2025-08-27-at-6-55-28-PM.jpg', caption: 'This photo shows a collaborative moment with my esteemed colleagues during a meeting. Standing together, we represent a dedicated team united by a common purpose. The image reflects the camaraderie and professionalism that define our workplace, showcasing our shared commitment to achieving our goals.' },
     { id: 3, url: 'https://i.ibb.co.com/1t9ztgjV/Whats-App-Image-2025-08-27-at-5-56-07-PM.jpg', caption: 'This photo, taken during a team trip, captures a collaborative moment with my esteemed colleagues. Standing together, we represent a dedicated team united by a common purpose. The image reflects the camaraderie and professionalism that define our workplace, showcasing our shared commitment to achieving our goals.' },
  ],
  treatment: [
    { id: 1, url: 'https://i.ibb.co.com/TBDQj71W/Treatment.jpg', caption: 'This image, captured during a treatment session, highlights my daily dedication to my patients well-being. It shows me carefully monitoring the health of a patient, with my full attention focused on providing the best possible care. My patients and their families are at the core of my work, and this picture serves as a testament to my commitment to their health and peace of mind.' },
     { id: 2, url: 'https://i.ibb.co.com/whkzgBYq/Treatment-2.jpg', caption: 'As a doctor, my primary commitment is to my patients. This photo shows me in a moment of attentive service, carefully checking an elderly patients blood pressure. It’s a representation of the compassionate and professional care I provide every day, focusing on the personal connection that is so vital to my work.' },
    { id: 3, url: 'https://i.ibb.co.com/hRY6mTMr/Whats-App-Image-2025-08-30-at-8-30-28-PM.jpg', caption: 'This photo beautifully captures a typical day in my chamber. I am seen here checking a patients blood pressure, with their family members also present. For me, patient care is more than just providing a medical service—its about paying attention to my patients and their families. This photo is a testament to that commitment.' },
    { id: 4, url: 'https://i.ibb.co.com/7JxPfHMh/Whats-App-Image-2025-09-04-at-11-16-10-8b84d365.jpg', caption: 'This photo captures a caring moment in my chamber, where I am seen examining a child patient while the family looks on. For me, every patient—young or old—deserves the highest level of attention and care. It reflects my lifelong commitment to providing compassionate healthcare, ensuring the well-being of both patients and their families.' },
    { id: 5, url: 'https://i.ibb.co.com/pv3JMtYq/Whats-App-Image-2025-09-04-at-11-16-12-113350a1.jpg', caption: 'This photo captures a moment of dedicated patient care in my chamber, where I am seen checking a young patient’s blood pressure while family members wait nearby. For me, healthcare is not only about medical treatment, but also about building trust and ensuring that every patient and their family feels supported. This image reflects my ongoing commitment to compassionate and professional medical service.' },
    { id: 6, url: 'https://i.ibb.co.com/Q3twWtsK/Whats-App-Image-2025-09-04-at-11-16-09-019d334e.jpg', caption: 'This image captures a typical moment during a patient consultation, highlighting my dedication to my patients well-being. As a physician, my primary commitment is to provide compassionate and professional medical care. Here, you see me meticulously checking a patients blood pressure, a fundamental part of any thorough health examination'}

  ],
};

const galleryCategories = [
  { id: 'chamber', name: 'Chamber', photoUrl: 'https://i.ibb.co.com/Xxb8fpTc/nasir-sir-business-card.jpg' },
  { id: 'office', name: 'Office', photoUrl: 'https://i.ibb.co.com/kgJkDL1q/office-2.jpg' },
  { id: 'personal', name: 'Personal', photoUrl: 'https://i.ibb.co.com/wrMQ6Vkw/Whats-App-Image-2025-08-27-at-7-14-30-PM.jpg' },
  { id: 'program', name: 'Program', photoUrl: 'https://i.ibb.co.com/5hXFH5Cz/Program-Speech.jpg' },
  { id: 'travel', name: 'travel', photoUrl: 'https://i.ibb.co.com/h1FJHdLq/Whats-App-Image-2025-08-27-at-5-52-47-PM-1.jpg' },
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
              <div key={photo.id} className="bg-slate-50 overflow-hidden">
                <img src={photo.url} alt={photo.caption} className="w-full h-[300px]" />
                <p className="p-4  font-medium  text-gray-600">{photo.caption}</p>
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
    <div className="mx-auto py-12 px-4 bg-slate-200">
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
