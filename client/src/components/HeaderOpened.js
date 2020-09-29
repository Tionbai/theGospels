import React from 'react'

export default function HeaderOpened(props) {
    const { opened, setOpened, gospels } = props;

    return (
        <section className="Header__opened">

            <button
                className="Header__burger--opened"
                onClick={() =>
                    setOpened(!opened)}>
                {!opened ? <>&#9776;</> : <>&#x2715;</>}

            </button>

            <button className="btn--gospels burger-menu"
            onClick={() => setOpened(!opened)}>About</button>

                {gospels.map((gospel) => {

                    return <>

                        <button
                            className="btn--gospels burger-menu"
                            key={gospels.indexOf(gospel)}
                            type="submit"
                            onClick={() => {
                                props.renderChapter(gospel);
                                setOpened(!opened);
                            }}
                        >
                            {`${gospel}`}
                        </button>

                    </>

                })}

        </section>
    )
}
