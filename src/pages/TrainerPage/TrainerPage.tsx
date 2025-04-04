import { useEffect, useState } from 'react';
import './TrainerPage.css'
import { VerbsObjType } from '../../Types/types';
import { verbs } from '../../constant/verbs';
import { verbsConvertList } from '../../constant/verbsConvert';

const initialInfo = { allVerbs: verbs.length, repeated: 0, correct: 0, incorrect: 0 }

const TrainerPage = () => {

    const [currentVerb, setCurrentVerb] = useState<VerbsObjType>()
    const [remaningVerbs, setRemaningVerbs] = useState<VerbsObjType[] | undefined>(undefined)
    const [showTranslate, setShowTranslate] = useState(false)
    const [info, setInfo] = useState(initialInfo)


    const deleteCurrentVerb = (arrVerbs: VerbsObjType[]) => {
        const result = arrVerbs.filter((item) => item.word !== currentVerb?.word)
        return result
    }

    const getRandomVerb = (arrVerbs: VerbsObjType[]) => {
        const verbIndex = Math.floor(Math.random() * arrVerbs.length)
        setCurrentVerb(arrVerbs[verbIndex])
    }

    const checkVerb = (type: string, e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        let newVerbsList: VerbsObjType[] = []
        const target = e.target as HTMLElement

        const returnBackground = () => setTimeout(() => target.style.background = 'royalblue', 200)

        if (type === currentVerb?.type) {
            target.style.background = 'green'
            returnBackground()
            setInfo({ ...info, repeated: info.repeated + 1, correct: info.correct + 1 })
        } else {
            target.style.background = 'red'
            returnBackground()
            window.navigator.vibrate(200)
            setInfo({ ...info, repeated: info.repeated + 1, incorrect: info.incorrect + 1 })
        }

        if (remaningVerbs) {
            newVerbsList = deleteCurrentVerb(remaningVerbs)
        } else {
            newVerbsList = deleteCurrentVerb(verbs)
        }
        setRemaningVerbs(newVerbsList)
        getRandomVerb(newVerbsList)
    }

    const openTranslateBlock = () => {
        setShowTranslate(prev => !prev)
    }


    useEffect(() => {
        getRandomVerb(verbs)
    }, [])

    return (
        <div className='trainer__container'>
            <div className='trainer__info'>
                <div className='trainer__info__number'>
                    <span>{info.allVerbs}</span> / <span>{info.repeated}</span>
                </div>
                <div className='trainer__info__answer'>
                    <div className='trainer__info__answer-correct'>
                        <span className='trainer__info__answer-correct__title'>Correct:</span>
                        <span className='trainer__info__answer-count'>{info.correct}</span>
                    </div>
                    <div className='trainer__info__answer-incorrect'>
                        <span className='trainer__info__answer-incorrect__title'>Incorrect:</span>
                        <span className='trainer__info__answer-count'>{info.incorrect}</span>
                    </div>
                </div>
            </div>

            <div
                className='trainer__verb-container'
                onClick={openTranslateBlock}
            >
                <span>{currentVerb?.word}</span>
                {
                    showTranslate
                        ? <div className='trainer__translate-container'>
                            <span className='trainer__translate'>{currentVerb?.translation}</span>
                            <span className='trainer__example'>{currentVerb?.example}</span>
                        </div>
                        : null
                }
            </div>
            <div className='trainer__btn-container'>
                {verbsConvertList.map((item) => {
                    return <button
                        key={item.title}
                        className='trainer__btn'
                        onClick={(e) => checkVerb(item.type, e)}
                    >
                        {item.title}
                    </button>
                })}
            </div>

        </div>
    )
};

export default TrainerPage
