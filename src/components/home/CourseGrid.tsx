import CourseCard from './CourseCard';

const courses = [
  {
    title: 'Information Technology',
    description: 'Master complex mathematical concepts with our comprehensive course designed for advanced learners.',
    image: 'https://koreconx.com/wp-content/uploads/2021/08/Blog-What-is-KYP-ZQ-2021-08-10.jpg',
    duration: '12 weeks',
    level: 'Advanced',
    price: 299
  },
  {
    title: 'Soft Skills',
    description: 'Build a strong foundation in physics through practical examples and interactive learning.',
    image: 'https://placehold.co/600x400?text=Physics',
    duration: '10 weeks',
    level: 'Intermediate',
    price: 249
  },
  {
    title: 'Communication Skills',
    description: 'Learn essential chemistry concepts with hands-on experiments and detailed explanations.',
    image: 'https://placehold.co/600x400?text=Chemistry',
    duration: '8 weeks',
    level: 'Beginner',
    price: 199
  },
  {
    title: 'Additional...',
    description: 'Explore the fascinating world of biology with our expertly crafted curriculum.',
    image: 'https://placehold.co/600x400?text=Biology',
    duration: '14 weeks',
    level: 'Advanced',
    price: 349
  }
];

const CourseGrid = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <CourseCard key={index} {...course} />
        ))}
      </div>
    </div>
  </section>
);

export default CourseGrid;