import React, { useEffect } from 'react'

export default function Pages(props) {
    const updatePage = (page) => {
            props.updatePage(page);
            props.updateSearch('');
            if (document.querySelector('.Search')) {
              document.querySelector('.Search').value = '';
            }
          };    

   return (
        <section className="Pages">
            <button 
            type="submit"
            onClick={() => {
            updatePage(-1)}}>Prev page</button>
            <button 
            type="submit"
            onClick={() => {
            updatePage(1)}}>Next page</button>
        </section>
    )
}
