import React from 'react';
import TestimonialSlider from '../elements/TestimonialSlider';
import TechStack from '../elements/TechStack';
import FreeQuoteForm from '../elements/FreeQuoteForm';

const Section2 = () => {
  return (
    <section className="w-screen mx-auto py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How I Elevate Your <span className="text-purple-600">Digital Presence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Custom solutions tailored to make your business stand out or ace your academic projects
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start max-w-full">
          <div className="space-y-8">
            <div className="flex items-start space-x-4 p-6 hover:bg-purple-50 rounded-xl transition-all duration-300">
              <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Company Websites</h3>
                <p className="text-gray-600">
                  Professional, responsive websites designed to showcase your brand and convert visitors into customers.
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-center text-sm text-purple-700">
                    <span className="mr-2">✓</span> Custom UI/UX design
                  </li>
                  <li className="flex items-center text-sm text-purple-700">
                    <span className="mr-2">✓</span> SEO optimization
                  </li>
                  <li className="flex items-center text-sm text-purple-700">
                    <span className="mr-2">✓</span> Fast loading speeds
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="flex items-start space-x-4 p-6 hover:bg-purple-50 rounded-xl transition-all duration-300">
              <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Personal Portfolios</h3>
                <p className="text-gray-600">
                  Elegant portfolios that highlight your work and personality with modern design aesthetics.
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-center text-sm text-purple-700">
                    <span className="mr-2">✓</span> Mobile-first design
                  </li>
                  <li className="flex items-center text-sm text-purple-700">
                    <span className="mr-2">✓</span> Interactive elements
                  </li>
                  <li className="flex items-center text-sm text-purple-700">
                    <span className="mr-2">✓</span> CMS integration
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="flex items-start space-x-4 p-6 hover:bg-purple-50 rounded-xl transition-all duration-300">
              <div className="flex-shrink-0 bg-purple-100 p-3 rounded-lg">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Academic Assistance</h3>
                <p className="text-gray-600">
                  Expert help with coding assignments, projects, and tutorials across various programming languages.
                </p>
                <ul className="mt-3 space-y-2">
                  <li className="flex items-center text-sm text-purple-700">
                    <span className="mr-2">✓</span> Web development projects
                  </li>
                  <li className="flex items-center text-sm text-purple-700">
                    <span className="mr-2">✓</span> Algorithm solutions
                  </li>
                  <li className="flex items-center text-sm text-purple-700">
                    <span className="mr-2">✓</span> Code documentation
                  </li>
                </ul>
              </div>
            </div>
            <TechStack/>
          </div>

          

          {/* Proof Column */}
          <div className="sticky top-24">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl shadow-sm border border-purple-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose My Services?</h3>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-white p-4 rounded-lg text-center shadow-xs">
                  <p className="text-3xl font-bold text-purple-600">5+</p>
                  <p className="text-sm text-gray-600">Projects Completed</p>
                </div>
                <div className="bg-white p-4 rounded-lg text-center shadow-xs">
                  <p className="text-3xl font-bold text-purple-600">100%</p>
                  <p className="text-sm text-gray-600">Client Satisfaction</p>
                </div>
              </div>

              {/* Testimonial */}
              <TestimonialSlider/>
              {/* Tech stack */}
              {/* <TechStack/> */}
              {/* CTA */}
              <FreeQuoteForm/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;