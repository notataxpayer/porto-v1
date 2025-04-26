import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    arrows: false,
    appendDots: dots => (
      <div className="bg-purple-100 rounded-full py-2">
        <ul className="flex justify-center space-x-2">{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-2 h-2 bg-purple-300 rounded-full"></div>
    )
  };
  
  //kalau mau pakai arrow
  const CustomArrow = ({ onClick, direction }) => (
    <button 
      onClick={onClick}
      className={`absolute ${direction === 'prev' ? 'left-0' : 'right-0'} top-1/2 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full z-10`}
    >
      {direction === 'prev' ? '<' : '>'}
    </button>
  );

  const testimonials = [
    {
      initials: 'JD',
      name: 'John Doe',
      role: 'Business Owner',
      quote: '"The website delivered exceeded our expectations. The attention to detail and communication throughout the process was exceptional."'
    },
    {
      initials: 'AS',
      name: 'Alice Smith',
      role: 'University Student',
      quote: '"Helped me complete my React project with excellent documentation and clean code structure."'
    },
    {
      initials: 'RJ',
      name: 'Robert Johnson',
      role: 'Startup Founder',
      quote: '"Transformed our MVP into a production-ready application with great performance optimizations."'
    }
  ];

  return (
    <div className="mb-8 px-4">
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="px-2 outline-none pb-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-purple-200 flex items-center justify-center text-purple-800 font-bold mr-4">
                {testimonial.initials}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-purple-600">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              {testimonial.quote}
            </p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialSlider;