import { useEffect, useState } from "react";
import "./TrainerPage.css";
import { VerbsObjType } from "../../Types/types";
import { verbs } from "../../constant/verbs";
import { verbsConvertList } from "../../constant/verbsConvert";
import { useTrainerStore } from "../../store/TrainerStore";

const TrainerPage = () => {
  const {
    remaningVerbs,
    repeated,
    correct,
    incorrect,
    correctAnswer,
    incorrectAnswer,
  } = useTrainerStore();

  console.log(remaningVerbs.length);

  const [currentVerb, setCurrentVerb] = useState<VerbsObjType | undefined>(
    undefined
  );
  const [showTranslate, setShowTranslate] = useState(false);

  const getRandomVerb = (arrVerbs: VerbsObjType[]) => {
    const verbIndex = Math.floor(Math.random() * arrVerbs.length);
    setCurrentVerb(arrVerbs[verbIndex]);
  };

  const checkVerb = (
    type: string,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const target = e.target as HTMLElement;

    const returnBackground = () =>
      setTimeout(() => (target.style.background = "royalblue"), 200);

    if (type === currentVerb?.type) {
      target.style.background = "green";
      returnBackground();
      correctAnswer(currentVerb);
    } else {
      target.style.background = "red";
      returnBackground();
      window.navigator.vibrate(200);
      incorrectAnswer(currentVerb);
    }

    getRandomVerb(remaningVerbs);
  };

  const openTranslateBlock = () => {
    setShowTranslate((prev) => !prev);
  };

  useEffect(() => {
    getRandomVerb(verbs);
  }, []);

  return (
    <div className="trainer__container">
      <div className="trainer__info">
        <div className="trainer__info__number">
          <span>{verbs.length}</span> / <span>{repeated}</span>
        </div>
        <div className="trainer__info__answer">
          <div className="trainer__info__answer-correct">
            <span className="trainer__info__answer-correct__title">
              Correct:
            </span>
            <span className="trainer__info__answer-count">{correct}</span>
          </div>
          <div className="trainer__info__answer-incorrect">
            <span className="trainer__info__answer-incorrect__title">
              Incorrect:
            </span>
            <span className="trainer__info__answer-count">{incorrect}</span>
          </div>
        </div>
      </div>

      <div className="trainer__verb-container" onClick={openTranslateBlock}>
        <span>{currentVerb?.word}</span>
        {showTranslate ? (
          <div className="trainer__translate-container">
            <span className="trainer__translate">
              {currentVerb?.translation}
            </span>
            <span className="trainer__example">{currentVerb?.example}</span>
          </div>
        ) : null}
      </div>
      <div className="trainer__btn-container">
        {verbsConvertList.map((item) => {
          return (
            <button
              key={item.title}
              className="trainer__btn"
              onClick={(e) => checkVerb(item.type, e)}
            >
              {item.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TrainerPage;
