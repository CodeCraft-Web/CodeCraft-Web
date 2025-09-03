import { getAllTools } from '../data/toolsAndTechnologies.js';
import { useState } from 'react';

const Process = () => {
  const [showAllTools, setShowAllTools] = useState(false);
  const allTools = getAllTools();
  const toolsPerRow = 6; // lg:grid-cols-6
  const visibleRows = 3;
  const visibleToolsCount = toolsPerRow * visibleRows; // 18 tools in 3 rows
  const displayedTools = showAllTools ? allTools : allTools.slice(0, visibleToolsCount);
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Research",
      description: "We start by understanding your business goals, target audience, and project requirements through detailed consultations and market research.",
      duration: "1-2 weeks",
      deliverables: ["Project Brief", "User Research", "Competitive Analysis", "Technical Requirements"],
      icon: "🔍"
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Based on our research, we create a comprehensive strategy and detailed project roadmap with timelines, milestones, and resource allocation.",
      duration: "1 week",
      deliverables: ["Project Strategy", "Technical Architecture", "Timeline & Milestones", "Resource Plan"],
      icon: "📋"
    },
    {
      step: "03",
      title: "Design & Prototyping",
      description: "Our design team creates wireframes, mockups, and interactive prototypes to visualize the final product before development begins.",
      duration: "2-3 weeks",
      deliverables: ["Wireframes", "UI/UX Design", "Interactive Prototype", "Design System"],
      icon: "🎨"
    },
    {
      step: "04",
      title: "Development",
      description: "Our experienced developers bring the designs to life using modern technologies and best practices, with regular progress updates.",
      duration: "4-8 weeks",
      deliverables: ["Clean Code", "Regular Builds", "Progress Reports", "Code Documentation"],
      icon: "💻"
    },
    {
      step: "05",
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing ensures your application works flawlessly across all devices and browsers before launch.",
      duration: "1-2 weeks",
      deliverables: ["Test Reports", "Bug Fixes", "Performance Optimization", "Security Audit"],
      icon: "🧪"
    },
    {
      step: "06",
      title: "Launch & Support",
      description: "We handle the deployment process and provide ongoing support to ensure your application runs smoothly in production.",
      duration: "Ongoing",
      deliverables: ["Production Deployment", "Monitoring Setup", "Training Materials", "Support Plan"],
      icon: "🚀"
    }
  ];

  const methodologies = [
    {
      name: "Agile Development",
      description: "Iterative development with regular feedback cycles",
      benefits: ["Faster delivery", "Better collaboration", "Adaptive to changes"]
    },
    {
      name: "DevOps Integration",
      description: "Automated testing and deployment pipelines",
      benefits: ["Reliable deployments", "Faster releases", "Better quality"]
    },
    {
      name: "User-Centered Design",
      description: "Design decisions based on user research and feedback",
      benefits: ["Better user experience", "Higher engagement", "Increased satisfaction"]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Our Process</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            A proven methodology that ensures successful project delivery through 
            careful planning, execution, and continuous improvement.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Six Steps to Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our structured approach ensures every project is delivered on time, 
              within budget, and exceeds expectations.
            </p>
          </div>

          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="lg:w-1/2">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="text-4xl mr-4">{step.icon}</div>
                      <div>
                        <div className="text-sm font-semibold text-blue-600 mb-1">
                          STEP {step.step}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {step.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    
                    <div className="flex items-center mb-6">
                      <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-700">
                        Duration: {step.duration}
                      </span>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Deliverables:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {step.deliverables.map((deliverable, deliverableIndex) => (
                          <div key={deliverableIndex} className="flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {deliverable}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-4xl font-bold text-white">{step.step}</span>
                    </div>
                    {index < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-32 left-1/2 transform -translate-x-1/2">
                        <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-purple-600"></div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Methodologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine proven methodologies with modern tools to deliver 
              exceptional results consistently.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodologies.map((methodology, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {methodology.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {methodology.description}
                </p>
                <ul className="space-y-2">
                  {methodology.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tools & Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest tools and technologies to streamline our 
              development process and deliver high-quality results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {displayedTools.map((tool, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-200">
                <img 
                  src={tool.icon} 
                  alt={tool.name}
                  className="w-8 h-8 mx-auto mb-2"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="text-2xl mb-2 hidden">⚡</div>
                <span className="text-sm font-medium text-gray-700">{tool.name}</span>
              </div>
            ))}
          </div>
          
          {allTools.length > visibleToolsCount && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAllTools(!showAllTools)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center gap-2"
              >
                {showAllTools ? (
                  <>
                    Show Less
                    <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                ) : (
                  <>
                    See More Technologies ({allTools.length - visibleToolsCount} more)
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Quality Assurance at Every Step
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Quality is not an afterthought—it's built into every stage of our process. 
                We use automated testing, code reviews, and continuous integration to 
                ensure your project meets the highest standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Automated testing and continuous integration</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Code reviews and pair programming</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Performance monitoring and optimization</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Security audits and best practices</span>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Quality Metrics</h3>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">Code Coverage</span>
                      <span className="text-gray-900 font-bold">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">Performance Score</span>
                      <span className="text-gray-900 font-bold">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{width: '98%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">Security Rating</span>
                      <span className="text-gray-900 font-bold">A+</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-purple-500 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-700 font-medium">Client Satisfaction</span>
                      <span className="text-gray-900 font-bold">99%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-yellow-500 h-2 rounded-full" style={{width: '99%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Experience Our Process?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's start your project with our proven methodology and deliver 
            exceptional results together.
          </p>
          <a
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-block"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default Process;
