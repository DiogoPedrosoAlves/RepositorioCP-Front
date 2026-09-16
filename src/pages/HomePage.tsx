import Noticia from "../components/Noticia/Noticia"
import Data from "../data/data.json"
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import './HomePage.css'


function HomePage() {

    return(
        <>
            <div>
                <Header />
                <main>
                    <ul className="news-list">
                        {Data.map((data) =>
                            <li><Noticia id={data.id} titulo={data.titulo} data={data.data} conteudo={data.conteudo} imagem={data.imagem} categoria={data.categoria} comentarios={data.comentarios} />
                            </li>
                        )}
                    </ul>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default HomePage