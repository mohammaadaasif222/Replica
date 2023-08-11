import './App.css';
import Heroes from './components/Heroes';
import Navbar from './components/Navbar';
import Card from './components/Card';
function App() {
  return (
   <>
      <Navbar/>
      <div className='m-5'>
      <Heroes/>
      <Card></Card>
      </div>
     
   </>
  );
}

export default App;
