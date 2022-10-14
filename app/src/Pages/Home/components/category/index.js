import '../../home.scss';
import houseicon from '../../../../Assets/images/house.png'
import bearicon from '../../../../Assets/images/bear.png'
import eletronicicon from '../../../../Assets/images/eletronic.png'
import fitnessicon from '../../../../Assets/images/fitness.png'
import repairicon from '../../../../Assets/images/repair.png'
import medicicon from '../../../../Assets/images/stethoscope.png'
function App() {
    return (
      <main className="Category-Main">
        <h1 className='fs-4 m-0 fw-bold'>Categorias</h1>
        <hr className='mt-1'/>
        <div className='Category-Content-itens'>
          <div className="Category-item">
            <img src={houseicon}/>
            <h1 className='fs-4'>Casa e Cozinha</h1>
          </div>
          <div className="Category-item">
            <img src={bearicon}/>
            <h1 className='fs-4'>Brinquedos</h1>
          </div>
          <div className="Category-item">
            <img src={eletronicicon}/>
            <h1 className='fs-4'>Eletrônicos</h1>
          </div>
          <div className="Category-item">
            <img src={fitnessicon}/>
            <h1 className='fs-4'>Fitness</h1>
          </div>
          <div className="Category-item">
            <img src={repairicon}/>
            <h1 className='fs-4'>Ferramentas</h1>
          </div>
          <div className="Category-item">
            <img src={medicicon}/>
            <h1 className='fs-4'>Saúde e Beleza</h1>
          </div>
        </div>
        
      </main>
    );
  }
export default App;
  