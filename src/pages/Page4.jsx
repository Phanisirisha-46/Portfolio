import React from 'react';

function Page4() {
  const sections = [
    {
      title: 'Web',
      tools: ['HTML', 'CSS', 'Bootstrap', 'ReactJS', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB'],
    },
    {
      title: 'Designing / IDE',
      tools: [ 'Figma','VSCode', 'Google Colab' ],
    },
    {
      title: 'ML & AI',
      tools: ['Scikit-learn','Pandas', 'NumPy', 'Generative AI', 'LLMs'],
    },
  ];

  return (
    <div className="p-4 space-y-6" style={{ backgroundColor: 'rgb(241, 247, 241)' }}>
      {sections.map((section, index) => (
        <div
          key={index}
          className="flex items-center p-6  shadow-md"
          style={{
            backgroundColor: 'white',
            color: 'rgb(78, 57, 52)',
            border: '2px solid rgb(179, 197, 180)',
          }}
        >
          {/* Icons Column */}
          <div className="flex flex-wrap gap-3 w-2/3">
            {section.tools.map((tool, i) => (
              <div
                key={i}
                className="px-3 py-1 rounded-full text-sm font-medium"
                style={{
                  backgroundColor: 'rgb(241, 247, 241)',
                  color: 'rgb(78, 57, 52)',
                }}
              >
                {tool}
              </div>
            ))}
          </div>
          {/* Title Column */}
          <div className="ml-auto text-xl font-semibold text-right w-1/3 capitalize">
            {section.title}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Page4;
