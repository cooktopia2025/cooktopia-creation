
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
  {
    id: 7,
    title: "Vegetable Stir Fry",
    time: "25 mins",
    difficulty: "Easy",
    category: "Vegetarian",
    image: "https://images.unsplash.com/photo-1551462147-ff29ce9d4853?q=80&w=2070",
  },
  {
    id: 8,
    title: "Beef Lasagna",
    time: "1.5 hours",
    difficulty: "Hard",
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032",
  },
  {
    id: 9,
    title: "Berry Smoothie Bowl",
    time: "15 mins",
    difficulty: "Easy",
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1626790680787-de5e9a07bcf2?q=80&w=2032",
  },
  {
    id: 10,
    title: "Tiramisu",
    time: "4 hours",
    difficulty: "Medium",
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=2074",
  },
  {
    id: 11,
    title: "Quinoa Salad",
    time: "20 mins",
    difficulty: "Easy",
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=2070",
  },
  {
    id: 12,
    title: "Mushroom Risotto",
    time: "45 mins",
    difficulty: "Medium",
    category: "Vegetarian",
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?q=80&w=2070",
  },
  {
    id: 13,
    title: "Spaghetti Carbonara",
    time: "30 mins",
    difficulty: "Medium",
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=2071",
  },
  {
    id: 14,
    title: "Apple Pie",
    time: "1.5 hours",
    difficulty: "Medium",
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1621743478914-cc8a86d7e9ca?q=80&w=2070",
  },
  {
    id: 15,
    title: "Chicken Caesar Wrap",
    time: "20 mins",
    difficulty: "Easy",
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=2070",
  },
  {
    id: 16,
    title: "French Toast",
    time: "20 mins",
    difficulty: "Easy",
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=2074",
  },
  {
    id: 17,
    title: "Beef Burger",
    time: "30 mins",
    difficulty: "Medium",
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2089",
  },
  {
    id: 18,
    title: "Lemon Cheesecake",
    time: "3 hours",
    difficulty: "Medium",
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?q=80&w=2070",
  },
  {
    id: 19,
    title: "Mediterranean Pasta",
    time: "25 mins",
    difficulty: "Easy",
    category: "Vegetarian",
    image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2070",
  },
  {
    id: 20,
    title: "Greek Salad",
    time: "15 mins",
    difficulty: "Easy",
    category: "Lunch",
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2074",
  },
  {
    id: 21,
    title: "Chicken Curry",
    time: "45 mins",
    difficulty: "Medium",
    category: "Dinner",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=2071",
  },
  {
    id: 22,
    title: "Banana Bread",
    time: "1 hour",
    difficulty: "Easy",
    category: "Dessert",
    image: "https://images.unsplash.com/photo-1584365685547-9a5d6995bcd1?q=80&w=2070",
  },
  {
    id: 23,
    title: "Veggie Pizza",
    time: "40 mins",
    difficulty: "Medium",
    category: "Vegetarian",
    image: "https://images.unsplash.com/photo-1604917869287-3ae73c77e227?q=80&w=2070",
  },
  {
    id: 24,
    title: "Eggs Benedict",
    time: "25 mins",
    difficulty: "Medium",
    category: "Breakfast",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=2074",
  }
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
