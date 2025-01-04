interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  price: number;
  duration: string;
}

const CourseCard = ({ title, description, image, price, duration }: CourseCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-blue-600 font-bold">${price}</span>
          <span className="text-gray-500">{duration}</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;