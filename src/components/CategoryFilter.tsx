import type { Category } from '../constants/messages';
import { CATEGORIES } from '../constants/messages';

interface CategoryFilterProps {
  selected: Category;
  onChange: (category: Category) => void;
}

export const CategoryFilter = ({ selected, onChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`category-btn ${selected === cat.id ? 'active' : ''}`}
        >
          <span className="mr-1">{cat.icon}</span>
          {cat.label}
        </button>
      ))}
    </div>
  );
};
