import { useState } from "react";
import "./VerbListPageStyles.css";
import VerbList from "./components/VerbList";

const verbTypesList = [
  { title: "Gerund", type: "gerund" },
  { title: "Infinitive with to", type: "infinitiveTo" },
  { title: "Infinitive without To", type: "gerund" },

];

const VerbListPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState("");

  const handleCategoriesOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const selectCategories = (type: string) => {
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
          <span>Select categories</span>
        </div>
        {isOpen ? (
          <div className="categories-items">
            {verbTypesList.map((item) => {
              return (
                <div
                  className="categories"
                  key={item.title}
                  role="button"
                  onClick={() => selectCategories(item.type)}
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
