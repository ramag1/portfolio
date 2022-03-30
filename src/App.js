import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Nav from './components/Nav';

function App() {
	return (
		<div>
			<h1 className='app__h1'>Rachel Magley</h1>
			<Nav />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/skills' element={<Skills />} />
			</Routes>
		</div>
	);
}

export default App;
