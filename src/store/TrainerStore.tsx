import { create } from "zustand";
import { verbs } from "../constant/verbs";
import { VerbsObjType } from "../Types/types";

interface AnswerTypes {
  remaningVerbs: VerbsObjType[];
  mistakeVerbs: VerbsObjType[];
  repeated: number;
  correct: number;
  incorrect: number;
  correctAnswer: (verb: VerbsObjType[]) => void;
  incorrectAnswer: (verb: VerbsObjType[]) => void;
  addMistake: (verb: VerbsObjType) => void
  restart: () => void;
}

export const useTrainerStore = create<AnswerTypes>((set) => ({
  remaningVerbs: verbs,
  mistakeVerbs: [],
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
  addMistake: (mistake: VerbsObjType) => {
    set((state: AnswerTypes) => ({
      mistakeVerbs: [...state.mistakeVerbs, mistake]
    }))
  },

  restart: () => {
    set(() => ({
      repeated: 0,
      correct: 0,
      incorrect: 0,
      remaningVerbs: verbs,
      mistakeVerbs: []
    }));
  },
}));
