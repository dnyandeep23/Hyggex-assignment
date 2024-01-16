import './App.css';
import Header from './components/Header';
import house from './Assets/house.svg'
import arrow from './Assets/arr.svg'
import Subject from './components/Subject'
import Faq from './components/faq'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='pt-11 px-10 flex gap-3'>
        <img src={house} />
        <div className='flex items-center gap-2'>
          <img src={arrow} />
          <p className='font-semibold text-gray-600'>FlashCard</p>
        </div>
        <div className='flex items-center gap-2'>
          <img src={arrow} />
          <p className='font-semibold text-gray-600'>Mathematics</p>
        </div>
        <div className='flex items-center gap-2'>
          <img src={arrow} />
          <p className='font-bold text-blue-900 text-lg'>Relation and Function</p>
        </div>


      </div>
      <Subject />
      <Faq/>
    </div>
  );
}

export default App;
