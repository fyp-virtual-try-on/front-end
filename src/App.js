import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Intro from './components/Intro/Intro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/Services/Services';

function App() {
return (
	<div className="App">
	
      <Navbar />

	<Intro/>
	<Services/>

	</div>
);
}

export default App;
