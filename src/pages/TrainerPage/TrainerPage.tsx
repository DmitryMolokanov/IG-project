import { useEffect, useState } from 'react';
import './TrainerPage.css'
import { VerbsObjType } from '../../Types/types';
import { verbs } from '../../constant/verbs';
import { verbsConvertList } from '../../constant/verbsConvert';

const TrainerPage = () => {

    const [currentVerb, setCurrentVerb] = useState<VerbsObjType>()
    const [remaningVerbs, setRemaningVerbs] = useState<VerbsObjType[] | undefined>(undefined)
    const [showTranslate, setShowTranslate] = useState(false)

    const deleteCurrentVerb = (arrVerbs: VerbsObjType[]) => {
        const result = arrVerbs.filter((item) => item.word !== currentVerb?.word)
        return result
    }

    const getRandomVerb = (arrVerbs: VerbsObjType[]) => {
        const verbIndex = Math.floor(Math.random() * arrVerbs.length)
        setCurrentVerb(arrVerbs[verbIndex])
    }

    const checkVerb = (type: string) => {
        console.log(type === currentVerb?.type)
        let newVerbsList: VerbsObjType[] = []
        if (remaningVerbs) {
            newVerbsList = deleteCurrentVerb(remaningVerbs)
        } else {
            newVerbsList = deleteCurrentVerb(verbs)
        }
        console.log(newVerbsList)
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
                    return <button onClick={() => checkVerb(item.type)}>{item.title}</button>
                })}
            </div>

        </div>
    )
};

export default TrainerPage
