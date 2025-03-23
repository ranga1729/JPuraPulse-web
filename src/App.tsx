import { useState, useEffect } from 'react'
import { fetchData } from './api'

const App = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData()
      .then(setData);
  }, []);

  return (
    <div>
      <h1>React & ASP.NET Core</h1>
      {data ? <p>{data}</p> : <p>Loading...</p>}
    </div>
  )
}

export default App
