import React from 'react';
import { Github } from 'lucide-react';


const PortfolioSection = () => (

<div className="space-y-8 animate-fadeIn">
<h2 className="text-4xl font-bold text-gray-900">Portfolio</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Sparse Autoencoder For Clustering Research Concepts',
                    description: 'Building and training Sparse Autoencoder (SAE) to extract interpretable latent features, and using LLMs to interpret these features.',
                    tech: ['PyTorch', 'Streamlit'],
                    github: 'https://github.com/AnanyaHN27/Sparse-Autoencoder'
                  },
                  {
                    title: 'Snowflake and Mistral RAG n ROLL Hackathon: Environmental RAG Dashboard',
                    description: 'Implemented a RAG application to power US environmental analysis and recommendations.',
                    tech: ['Snowflake', 'Mistral', 'Streamlit'],
                    github: 'https://github.com/AnanyaHN27/RAG-Mistral-Snowflake'
                  },
                  {
                    title: 'CMU-GPT',
                    description: 'Implemented a CMU-specific LLM using RAG, LangChain, FAISS, and PyTorch for course recommendations.',
                    tech: ['PyTorch', 'LangChain', 'FAISS']
                  },
                  {
                    title: 'Transition Markov Models Research',
                    description: 'Analyzed spectral gaps in POS tag transitions to compare AI and human-generated text dynamics.',
                    tech: ['Python', 'NLP', 'Statistical Analysis']
                  },
                  {
                    title: 'Diffusion Model',
                    description: 'Developed UNet-based diffusion models for image generation using TensorFlow.',
                    tech: ['TensorFlow', 'Deep Learning', 'Computer Vision'],
                    github: 'https://github.com/AnanyaHN27/diffusionModel'
                  },
                  {
                    title: 'Data Pipeline: CMS Hospital Data',
                    description: 'Developed a data pipeline and Streamlit application for efficient and scalable processing of large datasets and seamless data visualization.',
                    tech: ['PostgreSQL', 'Python', 'Streamlit'],
                    github: 'https://github.com/AnanyaHN27/CMS-Data-Pipeline'
                  },
                  {
                    title: 'Podcast Summaries Generation',
                    description: 'Dissertation: Implemented and analyzed different summarization models with multimodality.',
                    tech: ['BERT', 'Reinforcement Learning', 'NLP'],
                    github: 'https://github.com/AnanyaHN27/spotify-podcast-summary-challenge'
                  }
                ].map((project) => (
                  <div
                    key={project.title}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                  >
                    <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-lg text-gray-600 mb-4">{project.description}</p>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="bg-teal-100 text-teal-800 text-sm px-3 py-1 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-black ml-2"
                          aria-label="GitHub Repository"
                        >
                          <Github size={20} />
                        </a>
                      )}
                    </div>


                  </div>
                ))}
</div>
</div>
);

export default PortfolioSection;