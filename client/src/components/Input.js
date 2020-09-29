import React, { useState, useEffect } from 'react'

export default function Input(props) {
    const { setSearch, chapter } = props;

    const [checked, setChecked] = useState(false);

    const input = document.querySelector('.input');

    useEffect(() => {
        if (input) {
            if (!checked) input.value = '';
            setSearch(input.value);
        }
    }, [chapter, checked])

    return (

            <section className="Input">

                <input className="input" type="text" placeholder="Search..." onChange={(e) => setSearch(e.target.value)} />
                <input type="checkbox" id="checkbox" onClick={() => setChecked(!checked)}
                />
                <label className="label" htmlFor="checkbox" name="checkbox">Pin search</label>

            </section>
    )
}
