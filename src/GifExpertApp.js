import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";



const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Goku']);

    return (
        <>
            <h1>GifExpertApp</h1>
            <hr />
            <AddCategory setCategories={setCategories} />
            {
                categories.map(item =>
                    <GifGrid
                        key={item}
                        category={item} />
                )
            }
        </>
    );

};

export default GifExpertApp;