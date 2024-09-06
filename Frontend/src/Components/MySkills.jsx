
import React from 'react';

const MySkills = () => {
  const skills = [
    { name: "HTML", level: "Expert" },
    { name: "CSS", level: "Expert" },
    { name: "JavaScript", level: "Expert" },
    { name: "React", level: "Intermediate" },
    { name: "Node.js", level: "Intermediate" },
    { name: "Photoshop", level: "Expert" },
    { name: "Arabic", level: "Intermediate" },
    { name: "English", level: "Fluent" },
  ];

  return (
    <section id="skills" className="py-16 bg-black ">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-white ">My <span className='text-blue-700'>Skills</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-blue-700 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;