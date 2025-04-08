import { create } from 'zustand'

interface AnswerTypes {
    repeated: number,
    correct: number,
    incorrect: number,
    correctAnswer: () => void
    incorrectAnswer: () => void
}


export const useTrainerStore = create<AnswerTypes>((set) => ({
    repeated: 0,
    correct: 0,
    incorrect: 0,

    correctAnswer: () => {
        set((state: AnswerTypes) => ({
            repeated: state.repeated + 1,
            correct: state.correct + 1,
        }))
    },
    incorrectAnswer: () => {
        set((state: AnswerTypes) => ({
            repeated: state.repeated + 1,
            incorrect: state.incorrect + 1
        }))
    }
}))