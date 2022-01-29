import './App.css';
import CardList from './components/CardList';
import {useState, useEffect} from 'react';
function App() {
  const [dataArray, setDataArray] = useState([]);
  useEffect(() => {
    fetch('https://api.atwrap.ae/products')
    .then(res => {
      if(!res.ok) {
        throw new Error('error');
      }
      return res.json();
    })
    .then(data => {
      
      setDataArray(data);
    })
  }, [])
  
  return (
    <div className="App">
      <h2 className="heading">Shop Products</h2>
      <div className="grid-container">
        {
          dataArray.length !== 0 && <CardList dataArray={dataArray} />
        }
        
      </div>
      
    </div>
  );
}

export default App;
