import VerbTable from "../../components/Tables/VerbTable";
import { useTrainerStore } from "../../store/TrainerStore";

const MistakePage = () => {

    const { mistakeVerbs } = useTrainerStore();

    return (
        <div>
            <VerbTable verbList={mistakeVerbs} secondCollumn={'title'} />
        </div>
    )
};

export default MistakePage
