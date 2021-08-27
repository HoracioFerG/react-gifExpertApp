import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'

import { GifGridItem } from './GifGridItem';

export const GiftGrid = ({category} ) => {

    const {data, loading} = useFetchGifs(category);

    return (
       <>
            <h3 className="animate__flip">{category}</h3> 

            {loading && <p>Cargando....</p>}
            <div className="card-grid">

                    {
                        data.map( (img)=>
                            <GifGridItem 
                                key={img.id}
                                {...img}
                                
                            />
                        )
                        // images.map( ({title, id})=>
                        //     <li key={id}>
                        //         {title}
                        //     </li>
                                
                        // )
                    }
                
            </div>
        </>
    )
}
