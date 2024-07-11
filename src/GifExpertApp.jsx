import { useState } from "react";
import { AddCategory } from './components/AddCategory';



export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'One Punch','Dragon Ball' ]);

    //  console.log(categories);

    const onAddCategory = () => {
        setCategories([ 'Naruto', ...categories ]);
        // setCategories([...categories, 'Naruto']);
        // setCategories( cat => [...cat, 'Naruto'] );
    }

    return (
        <>
        {/* Titulo */}
          <h1>GifExpertApp</h1>  

        {/* Input de búsqueda Ingreso al sistema*/}
        <AddCategory />

        {/* listado de gif */}
        <button onClick={onAddCategory}>Agregar</button>
        <ol>
            { 
                categories.map(category => {
                    return <li key={category}>{category}</li>
            })
            }
        </ol>
            {/* gif Item */}


        </>
    );
}