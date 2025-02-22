
import { useState } from 'react';
import { Heart } from 'lucide-react';

interface RecipeCardProps {
  title: string;
  time: string;
  difficulty: string;
  image: string;
  category: string;
}

const RecipeCard = ({ title, time, difficulty, image, category }: RecipeCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="recipe-card bg-white rounded-xl overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
          loading="lazy"
        />
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isLiked ? 'fill-terracotta stroke-terracotta' : 'stroke-warmGray'
            }`}
          />
        </button>
        <div className="absolute top-4 left-4">
          <span className="category-chip bg-white/80 backdrop-blur-sm text-charcoal">
            {category}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-serif text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center justify-between text-sm text-warmGray">
          <span>{time}</span>
          <span>{difficulty}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
