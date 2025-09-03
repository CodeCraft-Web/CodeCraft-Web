import { toolsAndTechnologies, getCategories } from '../data/toolsAndTechnologies.js';

const ToolsAndTechnologies = () => {
  const categoryTitles = {
    frontend: "Frontend Technologies",
    backend: "Backend Technologies", 
    databases: "Databases",
    cloud: "Cloud Platforms",
    devops: "DevOps & Version Control",
    tools: "Development Tools"
  };

  const categoryDescriptions = {
    frontend: "Modern frameworks and libraries for building beautiful user interfaces",
    backend: "Server-side technologies for robust application logic",
    databases: "Data storage and management solutions",
    cloud: "Cloud platforms for scalable deployment and hosting",
    devops: "Tools for continuous integration, deployment, and collaboration",
    tools: "Development and design tools that enhance our workflow"
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 text-white bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold lg:text-5xl">Tools & Technologies</h1>
          <p className="max-w-3xl mx-auto text-xl text-purple-100">
            We leverage cutting-edge technologies and industry-standard tools to 
            deliver high-quality, scalable, and maintainable solutions.
          </p>
        </div>
      </section>

      {/* Technologies by Category */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Our Technology Stack
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              From frontend frameworks to cloud platforms, we use the best tools 
              for each job to ensure optimal performance and user experience.
            </p>
          </div>

          <div className="space-y-20">
            {getCategories().map((category, categoryIndex) => (
              <div key={category} className={`${categoryIndex % 2 === 1 ? 'bg-gray-50' : ''} py-12 rounded-xl`}>
                <div className="mb-12 text-center">
                  <h3 className="mb-4 text-2xl font-bold text-gray-900 lg:text-3xl">
                    {categoryTitles[category]}
                  </h3>
                  <p className="max-w-2xl mx-auto text-lg text-gray-600">
                    {categoryDescriptions[category]}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
                  {toolsAndTechnologies[category].map((tool, index) => (
                    <div 
                      key={index} 
                      className="p-6 transition-all duration-300 bg-white border border-gray-100 shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-1"
                    >
                      <div className="text-center">
                        <div className="mb-4">
                          <img 
                            src={tool.icon} 
                            alt={tool.name}
                            className="w-12 h-12 mx-auto"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div className="items-center justify-center hidden w-12 h-12 mx-auto text-lg font-bold text-white rounded-lg bg-gradient-to-br from-blue-500 to-purple-600">
                            {tool.name.charAt(0)}
                          </div>
                        </div>
                        <h4 className="mb-2 text-lg font-bold text-gray-900">
                          {tool.name}
                        </h4>
                        <p className="text-sm leading-relaxed text-gray-600">
                          {tool.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why We Choose These Technologies */}
      <section className="py-20 text-white bg-gray-900">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
              Why We Choose These Technologies
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
              Our technology choices are driven by performance, scalability, 
              maintainability, and developer experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mb-4 text-4xl">⚡</div>
              <h3 className="mb-3 text-xl font-bold">Performance</h3>
              <p className="text-gray-300">
                We choose technologies that deliver fast loading times and smooth user experiences.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">📈</div>
              <h3 className="mb-3 text-xl font-bold">Scalability</h3>
              <p className="text-gray-300">
                Our tech stack grows with your business, handling increased traffic and data.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">🔧</div>
              <h3 className="mb-3 text-xl font-bold">Maintainability</h3>
              <p className="text-gray-300">
                Clean, well-documented code that's easy to update and extend over time.
              </p>
            </div>
            <div className="text-center">
              <div className="mb-4 text-4xl">🚀</div>
              <h3 className="mb-3 text-xl font-bold">Innovation</h3>
              <p className="text-gray-300">
                We stay current with the latest technologies while ensuring stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Statistics */}
      <section className="py-20 bg-blue-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Our Expertise by the Numbers
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-blue-600">15+</div>
              <div className="text-gray-600">Frontend Technologies</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-green-600">10+</div>
              <div className="text-gray-600">Backend Frameworks</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-purple-600">8+</div>
              <div className="text-gray-600">Database Systems</div>
            </div>
            <div className="text-center">
              <div className="mb-2 text-4xl font-bold text-orange-600">20+</div>
              <div className="text-gray-600">Development Tools</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
            Let's Build Something Amazing Together
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-blue-100">
            Ready to leverage these cutting-edge technologies for your next project?
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 font-semibold text-blue-600 transition-colors duration-200 bg-white rounded-lg hover:bg-gray-100"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default ToolsAndTechnologies;
