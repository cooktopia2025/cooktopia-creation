
import { useState } from "react";
import RecipeCard from "../components/RecipeCard";
import CategoryFilter from "../components/CategoryFilter";
import { Search } from "lucide-react";
import { recipes, categories } from "../data/recipes";

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
