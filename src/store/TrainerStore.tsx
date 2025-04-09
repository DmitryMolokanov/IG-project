import { create } from "zustand";
import { verbs } from "../constant/verbs";
import { VerbsObjType } from "../Types/types";

interface AnswerTypes {
  remaningVerbs: VerbsObjType[];
  repeated: number;
  correct: number;
  incorrect: number;
  correctAnswer: (verb: VerbsObjType[]) => void;
  incorrectAnswer: (verb: VerbsObjType[]) => void;
  reset: () => void;
}

export const useTrainerStore = create<AnswerTypes>((set) => ({
  remaningVerbs: verbs,
  repeated: 0,
  correct: 0,
  incorrect: 0,

  correctAnswer: (filterVerb: VerbsObjType[]) => {
    set((state: AnswerTypes) => ({
      repeated: state.repeated + 1,
      correct: state.correct + 1,
      remaningVerbs: filterVerb,
    }));
  },
  incorrectAnswer: (filterVerb: VerbsObjType[]) => {
    set((state: AnswerTypes) => ({
      repeated: state.repeated + 1,
      incorrect: state.incorrect + 1,
      remaningVerbs: filterVerb,
    }));
  },
  reset: () => {
    set(() => ({
      repeated: 0,
      correct: 0,
      incorrect: 0,
      remaningVerbs: verbs,
    }));
  },
}));
