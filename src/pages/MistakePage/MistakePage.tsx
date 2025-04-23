import VerbTable from "../../components/Tables/VerbTable";
import { useTrainerStore } from "../../store/TrainerStore";

const MistakePage = () => {

    const { mistakeVerbs } = useTrainerStore();

    const reverseMistakeVerbs = mistakeVerbs.reverse()

    return (
        <div>
            <VerbTable verbList={reverseMistakeVerbs} secondCollumn={'title'} />
        </div>
    )
};

export default MistakePage
