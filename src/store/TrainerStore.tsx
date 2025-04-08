import { create } from "zustand";
import { verbs } from "../constant/verbs";
import { VerbsObjType } from "../Types/types";

interface AnswerTypes {
  remaningVerbs: VerbsObjType[];
  repeated: number;
  correct: number;
  incorrect: number;
  correctAnswer: (verb: VerbsObjType | undefined) => void;
  incorrectAnswer: (verb: VerbsObjType | undefined) => void;
}

export const useTrainerStore = create<AnswerTypes>((set) => ({
  remaningVerbs: verbs,
  repeated: 0,
  correct: 0,
  incorrect: 0,

  correctAnswer: (currentVerb: VerbsObjType | undefined) => {
    set((state: AnswerTypes) => ({
      repeated: state.repeated + 1,
      correct: state.correct + 1,
      remaningVerbs: state.remaningVerbs.filter(
        (item) => item.word !== currentVerb?.word
      ),
    }));
  },
  incorrectAnswer: (currentVerb: VerbsObjType | undefined) => {
    set((state: AnswerTypes) => ({
      repeated: state.repeated + 1,
      incorrect: state.incorrect + 1,
      remaningVerbs: state.remaningVerbs.filter(
        (item) => item.word !== currentVerb?.word
      ),
    }));
  },
}));
