import '../../home.scss';
import { Listcategories } from '../../../../api/productApi.js'
import { useEffect, useState } from 'react';
function App() {
  const [category, setCategory] = useState([])
  async function ListarCategorias() {
    setCategory(await Listcategories())
  }
  useEffect(() => {
    ListarCategorias()
  }, [])
  return (
    <main className="Category-Main">
      <h1 className='fs-4 m-0 fw-bold'>Categorias</h1>
      <hr className='mt-1' />
      <div className='Category-Content-itens'>
        {category.map((item) => (
          <div className="Category-item">
            {item.img_categoria 
            ? <img className='rounded-circle' src={`http://localhost:5000/${item.img_categoria}`}/>
            : <div></div>
            }
            <h1 className='fs-4'>{item.nm_categoria}</h1>
          </div>))}
      </div>

    </main>
  );
}
export default App;
