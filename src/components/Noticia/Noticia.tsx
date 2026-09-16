import imagem from '../../assets/placegholder-image.png'
import './Noticia.css'

interface NewsProps {
    id: number,
    titulo: string,
    data: string,
    conteudo: string,
    imagem: any,
    categoria: string,
    comentarios: string
}

function News(props: NewsProps) {

    return (
        <div className='Cards'>
            <img src={imagem} />
            <h1>{props.titulo}</h1>
            <p>{props.comentarios}</p>
            <p>{props.categoria}</p>
            <button></button>
        </div>
    )
}

export default News