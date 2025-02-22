
interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-3 mb-8">
      <button
        onClick={() => onSelectCategory("all")}
        className={`category-chip ${
          selectedCategory === "all"
            ? "bg-terracotta text-white"
            : "bg-white text-charcoal"
        }`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`category-chip ${
            selectedCategory === category
              ? "bg-terracotta text-white"
              : "bg-white text-charcoal"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
