import Noticia from "../components/Noticia/Noticia"
import Data from "../data/data.json"


function HomePage() {

    return(
        <div>
            <ul>
                {Data.map((data) => 
                <li><Noticia id={data.id} titulo={data.titulo} data={data.data} conteudo={data.conteudo} imagem={data.imagem} categoria={data.categoria} comentarios={data.comentarios}/>
                </li>
                )}
            </ul>
        </div>
    )
}

export default HomePage