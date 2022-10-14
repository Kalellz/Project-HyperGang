import '../../home.scss';
import houseicon from '../../../../Assets/images/house.png'
import bearicon from '../../../../Assets/images/bear.png'
import eletronicicon from '../../../../Assets/images/eletronic.png'
import fitnessicon from '../../../../Assets/images/fitness.png'
import repairicon from '../../../../Assets/images/repair.png'
import medicicon from '../../../../Assets/images/stethoscope.png'
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
            <img src={`http://localhost:5000/${item.img_categoria}`} />
            <h1 className='fs-4'>{item.nm_categoria}</h1>
          </div>))}
      </div>

    </main>
  );
}
export default App;
