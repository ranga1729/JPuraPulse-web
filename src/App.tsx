import { useState, useEffect } from 'react'
import { fetchData } from './api'
import Header from './Components/Header';
import SearchBanner from './Components/SearchBanner';

const App = () => {

  return (
    <div>
      <Header />
      <SearchBanner/>
    </div>
  )
}

export default App
