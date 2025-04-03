import { useState } from "react";
import "./VerbListPageStyles.css";
import VerbList from "./components/VerbList";
import { VerbConvertType } from "../../Types/types";
import { verbsConvertList } from "../../constant/verbsConvert";



const VerbListPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<VerbConvertType | undefined>(undefined);

  const handleCategoriesOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const selectCategories = (type: VerbConvertType) => {
    setSelectedCategories(type);
    handleCategoriesOpen();
  };

  return (
    <div>
      <div className="categories__container">
        <div
          className="categories"
          role="button"
          onClick={handleCategoriesOpen}
        >
          <span>{selectedCategories ? selectedCategories.title : "Select categories"}</span>
        </div>
        {isOpen ? (
          <div className="categories-items">
            {verbsConvertList.map((item) => {
              return (
                <div
                  className="categories"
                  key={item.title}
                  role="button"
                  onClick={() => selectCategories(item)}
                >
                  <span>{item.title}</span>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <VerbList selectedCategories={selectedCategories} />
    </div>
  );
};

export default VerbListPage;
