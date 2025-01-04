interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  level: string;
  price: number;
}

const CourseCard = ({
  title,
  description,
  image,
  duration,
  level,
  price
}: CourseCardProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-1 hover:shadow-lg">
    <img
      src={image}
      alt={title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
      <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
        <span>{duration}</span>
        <span>{level}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-2xl font-bold text-blue-600">${price}</span>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
          Enroll Now
        </button>
      </div>
    </div>
  </div>
);

export default CourseCard;