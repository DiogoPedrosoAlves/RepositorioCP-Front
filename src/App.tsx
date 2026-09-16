import {Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import HomePage from './pages/HomePage/HomePage';
import NoticiaPage from './pages/NoticiaPage/NoticiaPage';

function App() {

  return (
    <>
      <Header />
      <main>
        <Router>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/news/:id' element={<NoticiaPage />}></Route>
        </Router>
      </main>
      <Footer />
    </>
  )
}

export default App
