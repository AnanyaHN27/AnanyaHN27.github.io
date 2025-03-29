import React, { useState } from 'react';
import { BookOpen, Code, Home, Mail, Menu, X, Link2 } from 'lucide-react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer
} from 'recharts';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = ({ section, icon: Icon, text }) => (
    <button
      onClick={() => {
        setActiveSection(section);
        setIsMenuOpen(false);
      }}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
        activeSection === section
          ? 'bg-teal-100 text-teal-800'
          : 'hover:bg-gray-100'
      }`}
    >
      <Icon size={20} />
      <span>{text}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gray-50 text-lg">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white border-b z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
          <span className="text-2xl font-bold text-navy-800">Ananya Hari Narain</span>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>

            <div className="hidden md:flex gap-4 text-lg">
              <NavLink section="home" icon={Home} text="Home" />
              <NavLink section="resume" icon={BookOpen} text="Resume" />
              <NavLink section="portfolio" icon={Code} text="Portfolio" />
              <NavLink section='blog' icon={BookOpen} text="Blog" />
              <NavLink section="contact" icon={Mail} text="Contact" />
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t text-lg">
            <div className="flex flex-col p-4 gap-2">
              <NavLink section="home" icon={Home} text="Home" />
              <NavLink section="resume" icon={BookOpen} text="Resume" />
              <NavLink section="portfolio" icon={Code} text="Portfolio" />
              <NavLink section="contact" icon={Mail} text="Contact" />
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20 pb-12 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Home Section */}
          {activeSection === 'home' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="text-center space-y-4">
                <img
                  src="/images/ananya.jpg"
                  alt="Profile"
                  className="mx-auto rounded-full w-32 h-32"
                />
                <h1 className="text-5xl font-bold text-gray-900">Ananya Hari Narain</h1>
                <p className="text-2xl text-gray-600">Data Scientist & ML Engineer</p>
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
                  Masters student in Applied Data Science at Carnegie Mellon University with experience 
                  in machine learning, NLP, and software engineering. Former Data Scientist at Ocado Technology 
                  with a strong background in developing ML models and optimizing data pipelines.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Education</h3>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-600">MS in Applied Data Science</p>
                      <p className="text-gray-500">Carnegie Mellon University</p>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <p className="text-gray-600">BA in Computer Science</p>
                      <p className="text-gray-500">University of Cambridge</p>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h3 className="font-semibold text-gray-800 mb-2">Experience</h3>
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
          )}

          {/* Resume Section */}
          {activeSection === 'resume' && (
            <div className="space-y-8 animate-fadeIn">
              <h2 className="text-4xl font-bold text-gray-900">Resume</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h3>
                  
                  <div className="space-y-6">
                    <div className="border-l-4 border-teal-500 pl-4">
                      <div className="flex justify-between items-start">
                        <h4 className="text-xl font-semibold text-gray-800">Data Scientist</h4>
                        <span className="text-base text-gray-500">Sept. 2023 – Aug. 2024</span>
                      </div>
                      <p className="text-lg text-gray-600">Ocado Technology</p>
                      <ul className="mt-2 text-lg text-gray-600 list-disc list-inside">
                      <li>Worked as a Data Scientist using Python, TensorFlow, and SQL to create Temporal Fusion Transformers (TFT), Recurrent Neural Networks (RNN), and Temporal Convolutional Networks (TCN) models for complex time-series forecasting of stock demand.</li>
                      <li>Conducted A/B testing and statistical data analysis of model features for evaluation prior to deployment, updating relevant Looker Studio dashboards with key metrics.</li>
                      <li>Achieved 2nd place in an internal hackathon with an XGBoost model designed to flag incorrect SKU attributes and perform anomaly detection, achieving 87% recall using Computer Vision techniques.</li>
                      <li>Implemented a feature in production mathematical models using TensorFlow, saving £2 million over the Christmas period and improving performance over the baseline.</li>
                      <li>Actively participated in in-house research groups, contributing to journal club discussions by reading academic research papers to learn new machine learning frameworks and optimization algorithms.</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-teal-500 pl-4">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-gray-800">Software Engineer</h4>
                        <span className="text-sm text-gray-500">Sept. 2022 – Sept. 2023</span>
                      </div>
                      <p className="text-lg text-gray-600">Ocado Technology</p>
                      <ul className="mt-2 text-lg text-gray-600 list-disc list-inside">
                      <li>Developed and optimized routing algorithms using Java, enhancing delivery efficiency in sparse geographies with Discrete Event Simulation.</li>
                      <li>Led full-stack development, working with React to improve web app usability, reduce test runtimes by 65%, and increase code coverage from 82% to 98%.</li>
                      <li>Served as Tech Lead for integration projects, managing roadmaps, facilitating cross-team collaboration, and delivering key features that improved operational visibility in logistics with Python visualizations.</li>
                      <li>Implemented AI algorithms to optimize user experience and autowired a 100,000+ line Spring Boot codebase, boosting system performance.</li>
                      <li>Engaged in client-facing presentations, designed APIs, and provided architectural guidance through large-scale Architectural Katas focused on microservices.</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-teal-500 pl-4">
                      <div className="flex justify-between items-start">
                        <h4 className="font-semibold text-gray-800">NLP Research Intern</h4>
                        <span className="text-sm text-gray-500">July 2021 – Sept. 2021</span>
                      </div>
                      <p className="text-lg text-gray-600">Ocado Technology</p>
                      <ul className="mt-2 text-lg text-gray-600 list-disc list-inside">
                      <li>Researched and implemented a Poincare model to learn hierarchies in an unsupervised manner as part of solo project, building custom data pipelines to do so.</li>
                      <li>Obtained accuracy scores of 87.3%, leading to use in production environments.
                      </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800">Carnegie Mellon University</h4>
                      <p className="text-gray-600">MS in Applied Data Science</p>
                      <p className="text-gray-500">Aug. 2024 – May 2025</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">University of Cambridge</h4>
                      <p className="text-gray-600">BA(Hons) in Computer Science</p>
                      <p className="text-gray-500">Oct. 2019 – July 2022</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      'Python', 'R', 'SQL', 'TensorFlow', 'PyTorch', 'Kubernetes',
                      'Azure', 'AWS', 'CI/CD', 'Docker', 'React', 'Machine Learning'
                    ].map((skill) => (
                      <div
                        key={skill}
                        className="bg-gray-100 rounded-lg px-4 py-2 text-gray-700 text-center"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Portfolio Section */}
          {activeSection === 'portfolio' && (
            <div className="space-y-8 animate-fadeIn">
              <h2 className="text-4xl font-bold text-gray-900">Portfolio</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Snowflake and Mistral RAG n ROLL Hackathon: Environmental RAG Dashboard',
                    description: 'Implemented a RAG application to power US environmental analysis and recommendations.',
                    tech: ['Snowflake', 'Mistral', 'Streamlit']
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
                    tech: ['TensorFlow', 'Deep Learning', 'Computer Vision']
                  },
                  {
                    title: 'Data Pipeline: CMS Hospital Data',
                    description: 'Developed a data pipeline and Streamlit application for efficient and scalable processing of large datasets and seamless data visualization.',
                    tech: ['PostgreSQL', 'Python', 'Streamlit']
                  },
                  {
                    title: 'Podcast Summaries Generation',
                    description: 'Dissertation: Implemented and analyzed different summarization models with multimodality.',
                    tech: ['BERT', 'Reinforcement Learning', 'NLP']
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
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Blog Section */}
          {activeSection === 'blog' && (
            <div className="space-y-8 animate-fadeIn">
              <h2 className="text-4xl font-bold text-gray-900">Blog</h2>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                  Practical ML Learnings: Sparse Autoencoder Implementaton 
                </h3>
                <div className="text-gray-600 text-lg space-y-4">
                  <p>
                    As part of my MADS degree at CMU, I am working on a capstone project to create a SAE (Sparse Autoencoder) to interpret and identify features from LLM embeddings to enhance RAG retrieval mechanisms. This is in conjunction with a stealth mode startup and alongside a team of 2 other students.
                  </p>
                  <p>
                    Taking ownership of the SAE code was an invaluable learning experience; this was my first time taking end-to-end ownership of a PyTorch model, and understanding the intricacies of the library was awesome. One of my favorite learnings was using batch processing with the inbuilt functions. <code>__iter__</code> called a function for processing only once <code>batch_size</code> elements had been loaded in. Using a combination of this and numpy arrays for vectorization sped up computation by 98x.
                  </p>
                  <p>
                    There were many intricacies in trying to improve speed—with a dataset of 1M rows and a hidden dimensionality of about 2304, computation became expensive. I used the department GPUs to try and speed this up. Naively, I thought that setting <code>device = 'cuda' if torch.cuda.is_available() else 'cpu'</code> would be the fix, but there were a lot of nuances that I missed. All created tensors have to be explicitly set to the device, and there is the subcase where you still have to have CPU-efficient code if the model is to be run on a CPU.
                  </p>
                  <p>
                    After much tinkering, I realized the smartest thing to do was to profile the code using <code>profile</code>. Wrapping the training loop with the profiling code, I found that the code wasn't GPU inefficient—there was simply too much CPU-GPU throttling. The dataset processing class, inheriting <code>torch.utils.data.Dataset</code>, led to 91% CPU utilization. Each time the training loop called another batch, the <code>__iter__</code> function I was proud of was throttling the GPU due to the padding and processing required.
                  </p>
                  <p>
                    At this point, there were two options: either preprocess the dataset and save it in a pickle file or simply reduce the dataset size. Impatience got the better of me, and I reduced the dataset by a factor of 10, reducing epoch training time proportionally. I'd like to explore efficient dataset saving methods further. Another intricacy: torch Datasets apparently can only be CPU processed, or at least that's what the documentation led me to believe, meaning throwing resources at the problem was not feasible.
                  </p>
                  <p>
                    If this has taught me anything, it's that there really is no substitute for <em>doing</em>. Tutorials and sterile environments can only take you so far—I never would have learned about the memory constraints and speedups without hands-on experience. I'd like to build a JavaScript dashboard, load a <code>.pth</code> model, and do visualizations. Tune in for my next blog post!
                  </p>
                  <p>
                    Other fun learnings include:
                  </p>
                  <ul className="list-disc pl-8">
                    <li>Using SSH extensively, copying files between my machine and server</li>
                    <li>Using <code>ctrl-shift-6</code> to select large text blocks in nano</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Contact Section */}
          {activeSection === 'contact' && (
            <div className="space-y-8 animate-fadeIn">
              <h2 className="text-4xl font-bold text-gray-900">Contact</h2>
              
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="mb-6">
                  <p className="text-lg text-gray-600">
                    Feel free to reach out to me at:{' '}
                    <a href="mailto:ananya.harinarain@gmail.com" className="text-teal-600 hover:text-teal-700">
                      ananya.harinarain@gmail.com
                    </a>
                  </p>
                </div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Message</label>
                    <textarea
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      rows={4}
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-teal-600 text-white py-2 px-4 rounded-lg hover:bg-teal-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;