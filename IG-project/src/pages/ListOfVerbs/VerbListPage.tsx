import { useState } from "react";
import "./VerbListPageStyles.css";
import VerbList from "./components/VerbList";
import { VerbConvertType } from "../../Types/types";

const verbTypesList: VerbConvertType[] = [
  { title: "Gerund", type: "gerund" },
  { title: "Infinitive with to", type: "infinitiveTo" },
  { title: "Infinitive without to", type: "infinitiveWithoutTo" },
  { title: "Both equally", type: "both" },
  { title: "Both different", type: "bothDifferent" },
];

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
    <div className="list-of-verbs__container">
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
            {verbTypesList.map((item) => {
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
