import logo from './logo.svg';
import './App.css';
import Article from './components/article/article';
import Brand from './components/brand/brand';
import Cta from './components/cta/cta';
import Features from './components/features/features';
import Navbar from './components/Navbar/Navbar';
import {Blog,Footer,Possibility,WhatGPT3} from './containers';
import Header from './containers/header/header';
import Featuress from './containers/features/features'



function App() {
  return (
    <div className="App">
      <div className='gradient_bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Featuress />
      <Possibility />
      <Cta />
      <Blog/>
      <Footer/> 
    </div>
  );
}

export default App;
