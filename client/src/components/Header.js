import React, { useState } from 'react';
import HeaderOpened from './HeaderOpened';
import './styles/Header.css';

export default function Menu(props) {
    const { setBook, setChapter, buttons, gospels, renderChapter } = props;

    const [opened, setOpened] = useState(false);

    const refresh = () => {
        setBook(false);
        setChapter([]);
        buttons.map((button) => {
            button.classList.remove('selected');
        })
    };

    return (
        <header className="Header">

        {opened && <HeaderOpened opened={opened} setOpened={setOpened} gospels={gospels} renderChapter={renderChapter}/>}

            <button
                className="Header__burger"
                onClick={() => 
                setOpened(!opened)}>
                {!opened ? <>&#9776;</> : <>&#x2715;</>}
            
            </button>

            <h1
                className="Header__title"
                role="presentation"
                onClick={() => {
                    refresh();
                }}>
                The Gospels
            </h1>

            <button className="Header__character">
                &#x1F464;
            </button>

        </header>
    )
}
