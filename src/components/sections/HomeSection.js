import React from 'react';
import { Code, Link2 } from 'lucide-react';

const HomeSection = () => (
  <div className="space-y-8 animate-fadeIn">
        <div className="text-center space-y-4">
        <img
            src="/images/headshot.jpeg"
            alt="Profile"
            className="mx-auto rounded-full w-100 h-100"
        />
        <h1 className="text-5xl font-bold text-gray-900">Ananya Hari Narain</h1>
        <p className="text-2xl text-gray-600">Data Engineer</p>
        <div className="flex justify-center gap-4">
            <a 
            href="https://github.com/AnanyaHN27" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-3 py-1 rounded-lg hover:bg-gray-100"
            >
            <Code size={20} />
            <span>GitHub</span>
            </a>
            <a 
            href="https://linkedin.com/in/ananya-h-n" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-3 py-1 rounded-lg hover:bg-gray-100"
            >
            <Link2 size={20} />
            <span>LinkedIn</span>
            </a>
        </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 space-y-4">
        <h2 className="text-3xl font-semibold text-gray-800">About Me</h2>
        <p className="text-xl text-gray-600">
            Currently a Data Engineer at Meta. Former Data Scientist at Ocado Technology 
            with a strong background in developing ML models and optimizing data pipelines.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            <div className="space-y-4">
            <h3 className="font-semibold text-gray-800 mb-2">Education</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">MSc in Applied Data Science</p>
                <p className="text-gray-500">Carnegie Mellon University</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">BA(Hons) in Computer Science</p>
                <p className="text-gray-500">University of Cambridge</p>
            </div>
            </div>
            <div className="space-y-4">
            <h3 className="font-semibold text-gray-800 mb-2">Experience</h3>
            <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Data Engineer</p>
                <p className="text-gray-500">Meta</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Data Scientist</p>
                <p className="text-gray-500">Ocado Technology</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Software Engineer</p>
                <p className="text-gray-500">Ocado Technology</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">NLP Research Intern</p>
                <p className="text-gray-500">TechWolf</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-gray-600">Software Research Intern</p>
                <p className="text-gray-500">University of Cambridge</p>
            </div>
        </div>
        </div>
        </div>
    </div>
);

export default HomeSection;