import { FC } from "react";
import { VerbsObjType } from "../../Types/types";

interface VerbTableProps {
    verbList: VerbsObjType[]
    secondCollumn: 'word' | 'example' | 'translation' | 'type' | 'title'
}

const VerbTable: FC<VerbTableProps> = ({ verbList, secondCollumn }) => {
    return (
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
                    {verbList?.map((verb) => {
                        return <tr
                            key={verb.word}
                        >
                            <td>{verb.word}</td>
                            <td>{verb[secondCollumn]}</td>
                        </tr>;
                    })}
                </tbody>
            </table>
        </div>
    )
};

export default VerbTable
