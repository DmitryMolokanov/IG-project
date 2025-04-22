import { FC, useEffect, useState } from "react";
import "../VerbListPageStyles.css";
import { verbs } from "../../../constant/verbs";
import { VerbConvertType, VerbsObjType } from "../../../Types/types";
import VerbTable from "../../../components/Tables/VerbTable";

interface VerbListProps {
  selectedCategories: VerbConvertType | undefined;
}

const VerbList: FC<VerbListProps> = ({ selectedCategories }) => {
  const [selectedVerbs, setSelectedVerbs] = useState<VerbsObjType[]>([]);

  useEffect(() => {
    const selectedVerbs = verbs.filter((verb) => {
      return verb.type === selectedCategories?.type;
    });
    setSelectedVerbs(selectedVerbs);
  }, [selectedCategories]);

  return (
    selectedCategories &&
    <VerbTable verbList={selectedVerbs} secondCollumn={'translation'} />
  );
};

export default VerbList;
