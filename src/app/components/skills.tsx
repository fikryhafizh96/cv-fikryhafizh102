import React from 'react';
// Definisikan tipe data array untuk skill
const skills: string[] = ['Accounting', 'Microsoft Office', 'JavaScript', 'HTML & CSS', 'Gaming'];

const MySkills: React.FC = () => {
  return (
    <section id="my-skills">
    <div className="container mx-auto p-2 text-center">
    <h1 className="text-black-400 font-bold">My Skills</h1>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      </div>
    </section>
  );
};

export default MySkills;