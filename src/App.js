import React, { useState } from 'react';
import { BookOpen, Code, Home, Mail, Menu, X, Link2, Github } from 'lucide-react';
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
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden border-t text-lg">
            <div className="flex flex-col p-4 gap-2">
              <NavLink section="home" icon={Home} text="Home" />
              <NavLink section="resume" icon={BookOpen} text="Resume" />
              <NavLink section="portfolio" icon={Code} text="Portfolio" />
              <NavLink section='blog' icon={BookOpen} text="Blog" />
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
          )}

          {/* Portfolio Section */}
          {activeSection === 'portfolio' && (
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
          )}

          {/* Blog Section */}
          {activeSection === 'blog' && (
            <div className="space-y-8 animate-fadeIn">
              <h2 className="text-4xl font-bold text-gray-900">Blog</h2>
                <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                  Building a Wordle Clone (and Improving My Coding Skills) 
                </h3>
                <div className="text-gray-600 text-lg space-y-4">
                  <p>When I first started building my Wordle clone, I dove right into a class-based implementation. I split things out into <code>Guesses</code> and <code>WordleString</code>, with each <code>WordleString</code> storing a list of tuples: an uppercase letter paired with a square colour indicator. It felt neat and logical at the time, and I liked how tightly each letter was bound to its display.</p>

  <p>The actual gameplay loop lived in a separate file. It wasn’t wrapped in a class, which in hindsight made it less clean, but I wasn’t thinking about structure yet. Correction logic sat inside the <code>Guesses</code> class as a method called <code>correct</code>. I later realised that could have been turned into an <code>@property</code> called <code>is_correct</code>, since it was just checking the state, not changing anything.</p>

  <p>I was using <code>GREEN = 1</code>, <code>YELLOW = 2</code>, <code>GREY = 3</code> to visualise colours, which worked fine for logic but didn’t make the game very fun to look at. I also stored my guesses in a dictionary, mapping guess number to guess, and incremented a <code>guess_no</code> counter to retrieve the latest one. This got clunky quickly. During that phase, I also reminded myself of how handy Python’s <code>any()</code> and <code>all()</code> methods are.</p>

  <p>After seeing more professional implementations, I made some changes. It shifted the way I was thinking about clean design, without totally coloring my thought process.</p>

  <p>First, I replaced the colour codes with actual <strong>emojis</strong>. I had never done that before in a terminal game, but it instantly made everything clearer and more satisfying to play. I leaned into <code>@property</code> to express things like <code>is_won</code> and <code>is_over</code> in a more Pythonic way. It meant I could check game status without calling functions, and the code read more naturally.</p>

  <p>I also got rid of the dictionary I was using to store guesses. Lists are already ordered, and Python makes it easy to grab the last element with <code>[-1]</code>. That alone made the code easier to reason about and a bit less error-prone. I renamed <code>Guesses</code> to <code>Game</code>, which better reflects what the class is actually doing.</p>

  <p>One of the biggest changes was dropping the tuple structure altogether. Instead of storing each guess as a list of <code>(letter, colour)</code> pairs, I now build up a fresh string each time a guess is evaluated. That string holds the emoji visualisation of the guess result. Not only does this reduce state bloat, but it also separates game logic from display logic more cleanly.</p>

  <p>As a final polish, I spaced out the guess word so that each letter aligns directly over its emoji. It’s a small visual cue, but it makes the output feel more intuitive and closer to the Wordle experience.</p>

  <p>What started as a casual Python project turned into a mini exercise in writing cleaner, more intentional code. I learned a lot just by comparing my design decisions to someone else’s and asking why theirs felt more readable. Excited to keep iterating on it and maybe even add a bot next.</p>
                </div>
                </div>

              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                  Why I'm Starting This Blog 
                </h3>
                <div className="text-gray-600 text-lg space-y-4">
                 <p>I’ve noticed that the people I admire most, the ones I see as technical experts or pinnacles of achievement, are rarely one-trick ponies. They have a mix of cool, varied interests and seem to fill their cups with more than just academic or professional wins. They always seem to have a fun fact on hand during icebreakers, and more often than not, they just come across as <em>cool</em>.</p>

  <p>Lately, I’ve caught myself slipping into a loop. When I have spare time, my mind spins, looking for something to latch onto. I used to fill that time creatively, reading about random topics, making quirky lists, expressing myself. Now I find myself stuck in a scroll cycle, bouncing from TikTok to Instagram to Reddit to LinkedIn. It’s numbing, and I hate that I’m spending hours this way while the people around me are doing genuinely interesting things.</p>

  <p>That’s where this blog comes in. I still love reading, and I used to love writing. I may not be the best writer, but putting thoughts into words feels like an oasis in a world drowning in short-form noise. It also engages a part of my brain that work rarely touches. Our careers are often siloed and specialized, and I hardly ever write extended prose anymore. But as Newton said, “an object in motion stays in motion.” I’m hoping that writing again, and exploring ideas outside of work, will spark more curiosity and lead to new creative habits.</p>

  <p>I’m also committed to filling life with fun. I spent much of my childhood turning down invitations or canceling plans because of late-onset anxiety. I don’t want to be that person anymore.</p>

  <p>So this blog is my little corner to reconnect with my lost hobbies, and share some of my insights wherever I can. </p>

                </div>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-3xl font-semibold text-gray-800 mb-4">
                How I Got Good at SQL (After Failing It)
              </h3>
              <div className="text-gray-600 text-lg space-y-4">
                <p>
                  If you're prepping for Data Science or Data Engineering interviews, chances are you’ll need to get good at SQL. In my first role (and during a university DB class), I really struggled with it — I chalked it up to “my brain just not working that way.” Fast forward a few years, and I somehow landed an offer from Meta as a Data Engineer.
                </p>
                <p>
                  That still feels surreal. Back in 2020, I remember looking at my supervision homework in total despair. I genuinely didn’t think a future like this was possible.
                </p>
                <p>
                  What changed? Two resources helped me the most:
                </p>
                <ul className="list-disc pl-8">
                  <li><strong>Alex Reinhart’s “Data Engineering” course</strong></li>
                  <li><strong>DataLemur (over Leetcode)</strong></li>
                </ul>
                <p>
                  I didn't enjoy the Cambridge 'Databases' course. It focused on pseudocode and set-based logic rather than practical SQL. We never learned about PostgreSQL (which is the most popular paradigm in industry), or how to use `WHERE` vs `HAVING`, or even basic window functions. Memory may be failing me here, but I don't recall feeling practically equipped.
                </p>
                <p>
                  In contrast, Alex Reinhart’s class was refreshingly hands-on. It emphasized incremental learning and practical problems. I highly recommend checking out his lecture notes on <a href="https://www.refsmmat.com">refsmmat.com</a>.
                </p>
                <p>
                  As for problem practice, DataLemur wins hands down over Leetcode for SQL. The problems are better curated, have more meaningful hints, and the difficulty progression feels more thoughtful. Start with the Medium ones — if you can solve those comfortably, you can skip the Easy tier entirely.
                </p>
                <p>
                  Focus areas that helped me the most:
                </p>
                <ul className="list-disc pl-8">
                  <li>Types of joins and when to use them</li>
                  <li>Date/time functions — these show up a lot in real-world problems</li>
                  <li>Window functions, especially `ROW_NUMBER`, `RANK`, and `SUM` over partitions</li>
                  <li>Grouping logic and filtering with `GROUP BY` + `HAVING`</li>
                </ul>
                <p>
                  Mastery is a numbers game. Keep solving, keep pushing. Intuition builds over time. And yes, I’ve heard the same thing applies to Python Leetcode — it’s just a steeper hill to climb.
                </p>
              </div>
    </div>
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
        </div>
      </main>
    </div>
  );
};

export default Portfolio;