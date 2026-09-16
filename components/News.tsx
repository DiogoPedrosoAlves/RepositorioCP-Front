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
        <div>
            <img src={props.imagem} alt="" />
            <h1>{props.titulo}</h1>
            

        </div>
    )
}

export default News