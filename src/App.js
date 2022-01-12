import './App.css';
import { useEffect, useState } from 'react';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
function App() {
   const [data, setData] = useState([]);
   const [selectedId, setSelectedId] = useState(1);
   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
         .then((response) => response.json())
         .then((response) => setData(response));
   }, []);

   return (
      <div className='App'>
         {data.length > 1 && (
            <>
               <Sidebar
                  data={data}
                  selectedId={selectedId}
                  setSelectedId={setSelectedId}
               />
               <Main data={data[selectedId - 1]} />
            </>
         )}
      </div>
   );
}

export default App;
