import '../Purchase/products.scss'
import Header from '../common/Header'
import Footer from '../common/Footer'
import Highlights from './components/highlights'
import Category from './components/category'
import About from './components/about'
function Home() {
  return (
    <main>
      <header>
        <Header/>
      </header>
      <section>
        <Category />
        <Highlights />
        <About />
      </section>
      <footer>
        <Footer/>
      </footer>
    </main>
  );
}

export default Home;
