import React from 'react';

// Mengimpor gambar dari URL
const Hobbies = [
  { id: 1, name: "Bersepeda", images: 'https://i.imgur.com/UmO4lvk.png' },
  { id: 2, name: "Gaming", images: 'https://i.imgur.com/jq7MVKG.jpg' },
  { id: 3, name: "Coding", images: 'https://i.imgur.com/Mzf0mnL.jpg' },
  { id: 4, name: "Fotografi", images: 'https://i.imgur.com/Qp3Xm56.jpg' },
];

// Komponen HobbiesGallery
const HobbiesGallery = () => {
  return (
    <section className="my-10">
      <h2 className="text-2xl font-bold text-center mb-6">My Hobbies Gallery</h2>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {Hobbies.map((hobby) => (
          <div key={hobby.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={hobby.images} alt={hobby.name} className="w-full h-40 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold">{hobby.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HobbiesGallery;
