import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GiftGrid } from "./components/GiftGrid";


 const GiftExpertApp = () =>{

    
    
    const [categories, setCategories] = useState(['One punch']);
    

    return <>
        <h2>GiftExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        
        <hr></hr>

        

        <ol>
            { 
                categories.map((category,index)=>
                    <GiftGrid 
                        category={ category }
                        key={category}
                    /> 
                )
            }
        </ol>

    </>
}

export default GiftExpertApp;