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
      {selectedVerbs?.map((verb) => {
        console.log(verb);
        return <div>{verb.word}</div>;
      })}
    </>
  );
};

export default VerbList;
