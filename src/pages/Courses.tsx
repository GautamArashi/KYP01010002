
const Courses = () => {
  const courses = [
    {
      title: 'Information Technology',
      description: 'Master essential computer skills including MS Office, Internet usage, and typing',
      image: '/images/digital-literacy.jpg',
      modules: [
        'MS Office (Word, Excel, PowerPoint)',
        'Internet Usage and Email Communication',
        'Hindi & English Typing Skills'
      ],
      duration: '3 months'
    },
    {
      title: 'Communication Skills',
      description: 'Enhance your English proficiency and professional communication abilities',
      image: '/images/communication.jpg',
      modules: [
        'English Grammar Basics',
        'Spoken English & Fluency',
        'Professional Communication',
        'Business Writing Skills'
      ],
      duration: '3 months'
    },
    {
      title: 'Soft Skills',
      description: 'Develop essential personality traits and professional skills',
      image: '/images/soft-skills.jpg',
      modules: [
        'Time Management & Goal Setting',
        'Leadership & Teamwork',
        'Problem Solving Skills',
        'Interview Preparation'
      ],
      duration: '2 months'
    },
    {
      title: 'Additional Skills',
      description: 'Optional modules for enhanced professional development',
      image: '/images/additional.jpg',
      modules: [
        'Financial Literacy',
        'Basic Tally & Accounting',
        'Government E-Services'
      ],
      duration: 'Flexible'
    }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-4">KYP Course Offerings</h1>
      <p className="text-gray-600 text-center mb-8">Comprehensive training programs to enhance your professional skills</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {courses.map((course, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">{course.title}</h2>
            <p className="text-gray-600 mb-4">{course.description}</p>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Key Modules:</h3>
              <ul className="list-disc list-inside space-y-1">
                {course.modules.map((module, idx) => (
                  <li key={idx} className="text-gray-700">{module}</li>
                ))}
              </ul>
            </div>
            <div className="text-sm text-gray-500">Duration: {course.duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;