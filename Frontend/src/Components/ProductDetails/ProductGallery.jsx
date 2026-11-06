import React, { useState } from 'react';

export default function ProductGallery({ images }) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-4 h-full ">
      {/* الصور المصغرة العمودية (Thumbnails) */}
      <div className="flex sm:flex-col gap-3 overflow-x-auto sm:overflow-visible">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`w-20 h-24 rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
              selectedImage === img ? 'border-[#3525cd] shadow-md' : 'border-transparent opacity-70 hover:opacity-100'
            }`}
          >
            <img src={img} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* الصورة الكبيرة الأساسية */}
      <div className="flex-1 bg-stone-100 rounded-3xl overflow-hidden h-fit shadow-sm relative">
        <img src={selectedImage} alt="Active Product" className="w-full h-[780px] object-cover object-center" />
        <span className="absolute top-4 left-4 bg-[#3525cd] text-white text-[10px] font-bold uppercase px-3 py-1 rounded-md tracking-wider">
          NEW
        </span>
      </div>
    </div>
  );
}