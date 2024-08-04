import React, { useState } from 'react';
import { Github, Linkedin, Mail, Phone, Code, Globe, Database, PenTool, Users, Briefcase, GraduationCap } from 'lucide-react';

const skills = {
  'Programming Languages': ['Java', 'Python', 'JavaScript'],
  'Web Technologies': ['HTML', 'CSS'],
  'Databases': ['SQL', 'Oracle', 'MySQL'],
  'Software': ['Office Suite'],
  'Soft Skills': ['Problem Solving', 'Teamwork', 'Analytical Thinking', 'Adaptability', 'Operational Autonomy']
};

const education = [
  {
    title: 'ATTESTATO TEST AUTOMATION JUNIT',
    institution: 'Formazione Lavoro- Corso di informazione ISCS',
    date: '25/09/2023 – 21/12/2023'
  },
  {
    title: 'ATTESTATO PPDB & SISTEMI AZIENDALI',
    institution: 'Assocam Camerana',
    date: '07/04/2023 – 06/06/2023'
  },
  {
    title: 'DIPLOMA TECNICO INFORMATICO DELLE TELECOMUNICAZIONI',
    institution: 'ITIS Amadeo Avogadro',
    date: '11/09/2017 – 26/07/2020'
  }
];

const skillIcons = {
  'Programming Languages': <Code />,
  'Web Technologies': <Globe />,
  'Databases': <Database />,
  'Software': <PenTool />,
  'Soft Skills': <Users />
};

const TechDashboardPortfolio = () => {
  const [activeWidget, setActiveWidget] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <header className="mb-12 bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-between">
        <div className="flex items-center">
          <img src="/api/placeholder/150/150" alt="Fabio Cerundolo" className="w-20 h-20 rounded-full mr-6 border-2 border-blue-500" />
          <div>
            <h1 className="text-3xl font-bold mb-2">Fabio Cerundolo</h1>
            <p className="text-xl text-blue-400">Technical Informatics & Telecommunications</p>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="mailto:cerundolo.fabio@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <Mail size={24} />
          </a>
          <a href="tel:+393348399328" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <Phone size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <Github size={24} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <Linkedin size={24} />
          </a>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Briefcase className="mr-2" /> About Me
          </h2>
          <p className="text-gray-300">
            I'm a curious individual with a passion for science and technology. I enjoy programming,
            learning new languages, and staying updated with the latest tech trends. In my free time,
            I love reading fantasy, sci-fi, and horror books, as well as scientific articles. I'm also
            interested in video games both for entertainment and from a technical perspective.
          </p>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <Code className="mr-2" /> Skills
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(skills).map(([category, categorySkills]) => (
              <div key={category} className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-2 text-blue-400 flex items-center">
                  {skillIcons[category]}
                  <span className="ml-2">{category}</span>
                </h3>
                <ul className="list-disc list-inside">
                  {categorySkills.map((skill, index) => (
                    <li key={index} className="text-sm">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-800 p-6 rounded-lg shadow-lg md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4 flex items-center">
            <GraduationCap className="mr-2" /> Education
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {education.map((edu, index) => (
              <div key={index} className="bg-gray-700 p-4 rounded-lg">
                <h3 className="text-lg font-medium">{edu.title}</h3>
                <p className="text-sm text-gray-400">{edu.institution}</p>
                <p className="text-xs text-gray-500">{edu.date}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default TechDashboardPortfolio;