import './App.css';
import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar';
import News from './components/News';
import { HashRouter, Route, Routes } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 15
  const [progress, setProgress] = useState(0)

  return (
    <HashRouter>
      <Navbar />
      <LoadingBar
        color='#1179F7'
        height={3}
        progress={progress}

      />

      <Routes>
        <Route exact path='/' element={<News setProgress={setProgress} key="Home" pageSize={pageSize} country="in" category="general" />} />
        <Route exact path='/entertainment' element={<News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />} />
        <Route exact path='/business' element={<News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business" />} />
        <Route exact path='/health' element={<News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health" />} />
        <Route exact path='/science' element={<News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science" />} />
        <Route exact path='/sports' element={<News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports" />} />
        <Route exact path='/technology' element={<News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology" />} />
      </Routes>
    </HashRouter>
  )

}
export default App


