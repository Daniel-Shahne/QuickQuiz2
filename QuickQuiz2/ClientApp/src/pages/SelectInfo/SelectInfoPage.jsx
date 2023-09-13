import React from 'react';
import selectInfoStyle from './selectinfopage.module.css';
import CategoryItemCircle from '../../components/circles/CategoryItemCircle'
import { useContext } from 'react';
import {AppContext} from '../../context/AppContext'

function SelectInfoPage() {

    const { allQuestions } = useContext(AppContext);

    return (
    <div className={selectInfoStyle.backgroundContainer}>
        <h1>Choose category bitch</h1>
            {allQuestions ? 
            <div className={selectInfoStyle.gridContainer}>
                {allQuestions.map((q) => (
                    <div className={selectInfoStyle.gridItem}>
                        <div className={selectInfoStyle.flexItem}>
                            <CategoryItemCircle question={q} width='280px' isClickable={true}/>
                        </div>
                    </div>
                ))}
            </div> : 0}
    </div> 
     );
}

export default SelectInfoPage;