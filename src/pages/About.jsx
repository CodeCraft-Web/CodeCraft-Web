import harshaImg from '../assets/photos/harsha.jpg';
import chamithImg from '../assets/photos/chamith.jpg';
import mithunImg from '../assets/photos/mithun.jpg';
import GroupImg from '../assets/photos/GroupPhoto.jpg';

const About = () => {
  const team = [
    {
      name: "Harsha Buddhika",
      role: "Founder, Developer, UI/UX Designer",
      image: harshaImg,
      bio: "Visionary founder with expertise in full-stack development and user experience design. Leads CodeCraft's strategic direction while crafting beautiful, functional digital solutions. Undergraduate in BSc Computer Science at Eastern University, Sri Lanka.",
      skills: ["Leadership", "Full-Stack Development", "UI/UX Design", "Strategy", "Project Management"]
    },
    {
      name: "Chamith Dilshan",
      role: "Founder & Developer",
      image: chamithImg,
      bio: "Co-founder and expert developer specializing in React, Node.js, and cloud technologies. Graduated in Computer Science from School of Computing, University of Colombo, Sri Lanka.",
      skills: ["React", "Node.js", "AWS", "JavaScript", "Backend Development"]
    },
    {
      name: "Mithun Weerasinghe",
      role: "Founder & Developer",
      image: mithunImg,
      bio: "Co-founder and skilled developer with strong design sensibilities. Undergraduate in Software Engineering at SLIIT, Sri Lanka. Bridges the gap between development and design to create exceptional user experiences.",
      skills: ["Frontend Development", "UI/UX Design", "Figma", "JavaScript", "Design Systems"]
    }
  ];

  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "We strive for perfection in every line of code and every pixel of design."
    },
    {
      icon: "🤝",
      title: "Collaboration",
      description: "We work closely with our clients as partners to achieve shared success."
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "We embrace new technologies and creative solutions to solve complex problems."
    },
    {
      icon: "🔒",
      title: "Integrity",
      description: "We build trust through transparency, honesty, and reliable delivery."
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "25+", label: "Happy Clients" },
    { number: "4.9", label: "Average Rating" }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 text-white bg-gradient-to-r from-teal-600 to-blue-600">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 text-4xl font-bold lg:text-5xl">About CodeCraft</h1>
          <p className="max-w-3xl mx-auto text-xl text-teal-100">
            We are a passionate team of developers, designers, and innovators 
            dedicated to crafting exceptional digital experiences.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row">
            <div className="lg:w-1/2">
              <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
                Our Story
              </h2>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                Founded in 2019, CodeCraft emerged from a simple belief: that technology 
                should empower businesses and create meaningful connections between people. 
                What started as a small team of passionate developers has grown into a 
                full-service digital agency.
              </p>
              <p className="mb-6 text-lg leading-relaxed text-gray-600">
                We've had the privilege of working with startups, established businesses, 
                and everything in between. Each project has taught us something new and 
                reinforced our commitment to excellence.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Today, we continue to push the boundaries of what's possible in web 
                development, always keeping our clients' success at the heart of 
                everything we do.
              </p>
            </div>
            <div className="lg:w-1/2">
              <div className="relative">
                <img
                  src={GroupImg}
                  alt="Our team working together"
                  className="shadow-2xl rounded-xl"
                />
                <div className="absolute p-6 bg-white shadow-lg -bottom-6 -right-6 rounded-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600">50+</div>
                    <div className="text-gray-600">Projects Delivered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Our Values
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              These core values guide every decision we make and every project we undertake.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div key={index} className="p-8 text-center bg-white shadow-lg rounded-xl">
                <div className="mb-4 text-4xl">{value.icon}</div>
                <h3 className="mb-4 text-xl font-bold text-gray-900">
                  {value.title}
                </h3>
                <p className="leading-relaxed text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Meet Our Team
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              The talented individuals who make CodeCraft's success possible.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {team.map((member, index) => (
              <div key={index} className="overflow-hidden transition-shadow duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-64"
                />
                <div className="p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mb-3 font-medium text-blue-600">
                    {member.role}
                  </p>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    {member.bio}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 text-xs text-blue-800 bg-blue-100 rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 text-white bg-blue-600">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
              Our Impact in Numbers
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-blue-100">
              These numbers represent our commitment to delivering exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold lg:text-5xl">
                  {stat.number}
                </div>
                <p className="text-lg text-blue-100">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-6 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Our Mission
              </h3>
              <p className="leading-relaxed text-gray-600">
                To empower businesses with cutting-edge digital solutions that drive 
                growth, enhance user experiences, and create lasting value. We believe 
                that great technology should be accessible, reliable, and transformative.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-6 bg-purple-100 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-gray-900">
                Our Vision
              </h3>
              <p className="leading-relaxed text-gray-600">
                To be the leading digital partner for businesses seeking to innovate 
                and thrive in the digital age. We envision a world where technology 
                seamlessly connects people, ideas, and opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">
              Why Choose CodeCraft?
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              Here's what sets us apart from other development agencies.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="p-8 bg-white shadow-lg rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-6 bg-green-100 rounded-lg">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Proven Track Record
              </h3>
              <p className="leading-relaxed text-gray-600">
                With 50+ successful projects and 5+ years of experience, we have 
                the expertise to handle projects of any complexity.
              </p>
            </div>

            <div className="p-8 bg-white shadow-lg rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-6 bg-blue-100 rounded-lg">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Cutting-Edge Technology
              </h3>
              <p className="leading-relaxed text-gray-600">
                We stay ahead of the curve with the latest technologies and 
                frameworks to ensure your project is future-proof.
              </p>
            </div>

            <div className="p-8 bg-white shadow-lg rounded-xl">
              <div className="flex items-center justify-center w-12 h-12 mb-6 bg-purple-100 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Client-Centric Approach
              </h3>
              <p className="leading-relaxed text-gray-600">
                Your success is our success. We work as an extension of your team 
                to understand your goals and deliver solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-white bg-gray-900">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold lg:text-4xl">
            Ready to Work with Us?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-300">
            Let's discuss how we can help bring your vision to life with our 
            expertise and passion for excellence.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 font-semibold text-white transition-colors duration-200 bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
