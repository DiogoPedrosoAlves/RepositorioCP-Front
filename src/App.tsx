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
          <Routes>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/news/:id' element={<NoticiaPage />}></Route>
          </Routes>
        </Router>
      </main>
      <Footer />
    </>
  )
}

export default App
