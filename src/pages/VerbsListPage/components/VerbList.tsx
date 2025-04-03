import { FC, useEffect, useState } from "react";
import "../VerbListPageStyles.css";
import { verbs } from "../../../Verbs/verbs";
import { VerbConvertType, VerbsObjType } from "../../../Types/types";

interface VerbListProps {
  selectedCategories: VerbConvertType | undefined;
}

const VerbList: FC<VerbListProps> = ({ selectedCategories }) => {
  const [selectedVerbs, setSelectedVerbs] = useState<VerbsObjType[]>();

  useEffect(() => {
    const selectedVerbs = verbs.filter((verb) => {
      return verb.type === selectedCategories?.type;
    });
    setSelectedVerbs(selectedVerbs);
  }, [selectedCategories]);

  return (
    <>
      <div className='list-of-verbs__list'>
        <table className="list-table">
          <thead>
            <tr>
              <th>
                Word
              </th>
              <th>
                Translate
              </th>
            </tr>
          </thead>
          <tbody>
            {selectedVerbs?.map((verb) => {
              return <tr
                key={verb.word}
              // className="list__verb"
              >
                <td>{verb.word}</td>
                <td>{verb.translation}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default VerbList;
