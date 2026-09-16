import Noticia from "../../components/Noticia/Noticia"
import Data from "../../data/data.json"
import './HomePage.css'


function HomePage() {

    return (
        <>
            <ul className="news-list">
                {Data.map((data) =>
                    <li><Noticia id={data.id} titulo={data.titulo} data={data.data} conteudo={data.conteudo} imagem={data.imagem} categoria={data.categoria} comentarios={data.comentarios} />
                    </li>
                )}
            </ul>
        </>
    )
}

export default HomePage