
import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import CategoryFilter from "../components/CategoryFilter";
import { Search } from "lucide-react";

const categories = ["Breakfast", "Lunch", "Dinner", "Dessert", "Vegetarian"];

const recipes = [
  {
    id: 1,
    title: "Classic Pancakes",
    time: "20 mins",
    difficulty: "Easy",
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=2080",
  },
  {
    id: 2,
    title: "Grilled Salmon",
    time: "30 mins",
    difficulty: "Medium",
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=2074",
  },
  {
    id: 3,
    title: "Chocolate Cake",
    time: "1 hour",
    difficulty: "Medium",
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?q=80&w=2089",
  },
  {
    id: 4,
    title: "Buddha Bowl",
    time: "25 mins",
    difficulty: "Easy",
    category: "Vegetarian",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070",
  },
  {
    id: 5,
    title: "Club Sandwich",
    time: "15 mins",
    difficulty: "Easy",
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1567234669013-216f3a40e02e?q=80&w=1974",
  },
  {
    id: 6,
    title: "Avocado Toast",
    time: "10 mins",
    difficulty: "Easy",
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=2072",
  },
];

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesCategory =
      selectedCategory === "all" || recipe.category === selectedCategory;
    const matchesSearch = recipe.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-cream">
      <div className="container px-4 py-12 mx-auto max-w-6xl">
        <header className="text-center mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Discover Delicious Recipes
          </h1>
          <p className="text-warmGray text-lg mb-8 max-w-2xl mx-auto">
            Explore our collection of carefully curated recipes for every occasion
          </p>
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-terracotta/20 transition-all duration-300"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-warmGray w-5 h-5" />
          </div>
        </header>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="animate-fadeIn">
              <RecipeCard {...recipe} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
