import React from 'react';

// Contoh objek MyInfos
const MyInfos = {
    TTL: "Bandung, 10 Agustus 2002",
    Gender: "Laki-laki",
    TinggiBadan: "161 cm",
    BeratBadan: "44 kg",
    StatusPernikahan: "Belum Menikah",
    Whatsapp: "+685846589594",
    Email: "fikryhafizh441@gmail.com"  
};

// Komponen PersonalInfo
const PersonalInfo = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Informasi Pribadi</h2>
      <ul className="space-y-2">
        {Object.entries(MyInfos).map(([key, value]) => (
          <li key={key} className="flex justify-between">
            <span className="font-medium">{key.replace(/([A-Z])/g, ' $1')}: </span>
            <span className="text-gray-700">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalInfo;
