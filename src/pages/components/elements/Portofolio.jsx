import { motion } from 'framer-motion';
import { CodeBracketIcon, BriefcaseIcon, UserIcon } from '@heroicons/react/24/outline';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Digital Gallery",
      category: "company",
      description: "Digital Gallery for artworks mainly themed cyberpunk",
      image: "https://res.cloudinary.com/dnyrrcacd/image/upload/v1745683931/porto%20commerce%20web-v1/ss1_nh54zy.png",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      id: 2,
      title: "Personal Blog",
      category: "personal",
      description: "Custom blog with CMS and dark mode",
      image: "https://res.cloudinary.com/dnyrrcacd/image/upload/v1745667282/porto%20commerce%20web-v1/Screenshot_2025-04-26_183325_uy6jzf.png",
      tags: ["Next.js", "Tailwind", "GraphQL"],
      link: "#"
    },
    {
      id: 3,
      title: "Task Management App",
      category: "academic",
      description: "University project with real-time updates",
      image: "https://res.cloudinary.com/dnyrrcacd/image/upload/v1745667282/porto%20commerce%20web-v1/Screenshot_2025-04-26_183325_uy6jzf.png",
      tags: ["Firebase", "React", "Redux"],
      link: "#"
    },
    {
      id: 4,
      title: "Corporate Website",
      category: "company",
      description: "Modern website with animations",
      image: "https://res.cloudinary.com/dnyrrcacd/image/upload/v1745667282/porto%20commerce%20web-v1/Screenshot_2025-04-26_183325_uy6jzf.png",
      tags: ["GSAP", "Three.js"],
      link: "#"
    },
    {
      id: 5,
      title: "Portfolio Design",
      category: "personal",
      description: "Minimalist portfolio for designer",
      image: "https://res.cloudinary.com/dnyrrcacd/image/upload/v1745667282/porto%20commerce%20web-v1/Screenshot_2025-04-26_183325_uy6jzf.png",
      tags: ["Framer Motion", "CSS3"],
      link: "#"
    },
    {
      id: 6,
      title: "Algorithm Visualizer",
      category: "academic",
      description: "Sorting algorithm visualization tool",
      image: "https://res.cloudinary.com/dnyrrcacd/image/upload/v1745667282/porto%20commerce%20web-v1/Screenshot_2025-04-26_183325_uy6jzf.png",
      tags: ["D3.js", "JavaScript"],
      link: "#"
    }
  ];

  const categoryIcon = {
    company: <BriefcaseIcon className="w-5 h-5" />,
    personal: <UserIcon className="w-5 h-5" />,
    academic: <CodeBracketIcon className="w-5 h-5" />
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white w-screen dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header with animated underline */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            MY<span className="text-purple-600">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-purple-500 mx-auto mt-4 rounded-full" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {['all', 'company', 'personal', 'academic'].map((filter) => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-all ${
                filter === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-xl shadow-lg dark:shadow-gray-800/20"
            >
              {/* Image with overlay */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white text-sm">{item.description}</p>
                </div>
              </div>

              {/* Content */}
              <div className="bg-white dark:bg-gray-800 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-purple-600">
                    {categoryIcon[item.category]}
                  </span>
                  <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 bg-purple-100 dark:bg-gray-700 text-purple-800 dark:text-purple-300 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Project Button (appears on hover) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/70 flex items-center justify-center"
                >
                  <a
                    href={item.link}
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
                  >
                    View Project
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-purple-400 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            See More Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;