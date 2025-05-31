import React from 'react';

const ResumeSection = () => (
  <div className="space-y-8 animate-fadeIn">
    <h2 className="text-4xl font-bold text-gray-900">Resume</h2>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Experience</h3>
                  
                  <div className="space-y-6">
                  <div className="border-l-4 border-teal-500 pl-4">
                      <div className="flex justify-between items-start">
                        <h4 className="text-xl font-semibold text-gray-800">Data Engineer</h4>
                        <span className="text-base text-gray-500">June 2025 – Present</span>
                      </div>
                      <p className="text-lg text-gray-600">Meta</p>
                      <ul className="mt-2 text-lg text-gray-600 list-disc list-inside">
                      <li>Working in Ads and Monetisation.</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-teal-500 pl-4">
                      <div className="flex justify-between items-start">
                        <h4 className="text-xl font-semibold text-gray-800">Data Scientist</h4>
                        <span className="text-base text-gray-500">Sept. 2023 – Aug. 2024</span>
                      </div>
                      <p className="text-lg text-gray-600">Ocado Technology</p>
                      <ul className="mt-2 text-lg text-gray-600 list-disc list-inside">
                      <li>Worked as a Data Scientist using Python, TensorFlow, and SQL to create Temporal Fusion Transformers (TFT), Recurrent Neural Networks (RNN), and Temporal Convolutional Networks (TCN) models for complex time-series forecasting of stock demand.</li>
                      <li>Achieved 2nd place in an internal hackathon with an XGBoost model designed to flag incorrect SKU attributes and perform anomaly detection, achieving 87% recall using Computer Vision techniques.</li>
                      <li>Implemented a feature in production mathematical models using TensorFlow, saving £2 million over the Christmas period and improving performance over the baseline.</li>
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
                      <li>Served as Tech Lead for integration projects, managing roadmaps, facilitating cross-team collaboration, and delivering key features that improved operational visibility in logistics with Python visualizations.</li>
                      <li>Implemented AI algorithms to optimize user experience and autowired a 100,000+ line Spring Boot codebase, boosting system performance.</li>
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
);

export default ResumeSection;