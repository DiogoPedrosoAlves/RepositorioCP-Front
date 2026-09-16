import Data from "../data/data.json"

interface NewsProps {
    id: string,
    titulo: string,
    data: string,
    conteudo: string,
    imagem: any,
    categoria: string,
    comentarios: string
}

function News(props: NewsProps) {

    return (
        <div>
            <img src={props.imagem}/>
            <h1>{props.titulo}</h1>
            <p>{props.comentarios}</p>
            <p>{props.categoria}</p>
        </div>
    )
}

export default News