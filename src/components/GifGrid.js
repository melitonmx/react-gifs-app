import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data, loading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <h4>{loading && <p>Cargando imagenes</p>}</h4>
            <div className="card-grid animate__animated animate__fadeIn">
                {
                    data.map(image => {
                        return <GifGridItem
                            key={image.id}
                            {...image}
                        />
                    })
                }
            </div>
        </>
    )
}


