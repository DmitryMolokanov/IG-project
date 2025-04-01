import { FC, useEffect, useState } from "react";
import "../VerbListPageStyles.css";
import { verbs } from "../../../Verbs/verbs";
import { VerbsObjType } from "../../../Types/types";

interface VerbListProps {
  selectedCategories: string;
}

const VerbList: FC<VerbListProps> = ({ selectedCategories }) => {
  const [selectedVerbs, setSelectedVerbs] = useState<VerbsObjType[]>();

  useEffect(() => {
    const selectedVerbs = verbs.filter((verb) => {
      return verb.type === selectedCategories;
    });
    setSelectedVerbs(selectedVerbs);
  }, [selectedCategories]);

  return (
    <>
      <div className='list-of-verbs__list'>
        {selectedVerbs?.map((verb) => {
          return <div
            key={verb.word}
            className="list__verb"
          >
            <span>{verb.word}</span>
            -
            <span>{verb.translation}</span>
          </div>;
        })}
      </div>
    </>
  );
};

export default VerbList;
