type FilterTabsProps = {
  categories: {
    value: string;
    label: string;
  }[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function FilterTabs({
  categories,
  activeCategory,
  onCategoryChange,
}: FilterTabsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          type="button"
          key={category.value}
          onClick={() => onCategoryChange(category.value)}
          className={`rounded-full px-5 py-2 text-sm font-medium ${
            category.value === activeCategory
              ? "bg-violet-500 text-white"
              : "border border-transparent text-stone-300 transition hover:border-white/10 hover:bg-white/5 hover:text-white"
          }`}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
