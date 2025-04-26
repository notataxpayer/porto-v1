const TechStack = () => {
    const technologies = [
      { name: 'HTML5', icon: '🟧', since: 2018, projects: 45 },
      { name: 'CSS3', icon: '🟦', since: 2018, projects: 45 },
      { name: 'JavaScript', icon: '🟨', since: 2019, projects: 38 },
      { name: 'React', icon: '⚛️', since: 2020, projects: 27 },
      { name: 'Node.js', icon: '🟢', since: 2021, projects: 15 }
    ];
  
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">My Core Technologies</h3>
        
        <div className="grid grid-cols-2 gap-4">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg p-4 hover:bg-purple-50 transition-colors"
            >
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-2xl">{tech.icon}</span>
                <h4 className="font-medium text-gray-900">{tech.name}</h4>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p>Used since {tech.since}</p>
                <p>{tech.projects}+ projects</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default TechStack