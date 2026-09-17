import { useParams } from "react-router-dom"
import News from "../components/Noticia/Noticia"
import data from "../data/data.json"

function NoticiaPage() {
    const { id } = useParams()
    const noticia = data.find((item) => item.id === Number(id))

    if (!noticia) {
        return <p>Notícia não encontrada.</p>
    }

    return (
        <News {...noticia} />
    )
}

export default NoticiaPage
