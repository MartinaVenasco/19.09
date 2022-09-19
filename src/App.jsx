import MovieEntity from "./components/MovieEntity";
import MainInput from "./components/MainInput";
import MainSection from "./components/MainSection";
import Modal from "./components/Modal";
import Navbar from "./components/Navbar";
import "./App.scss";
import { createContext } from 'react';
import LightBulb from './components/LightBulb';
import { useState, useRef } from "react";

const theme = {
  lightMode: {
    background: '#fff',
    color: 'black', 
  },
  darkMode: {
    background: 'black',
    color: '#fff',
  }
}

export const ThemeContext = createContext();

function App() {
  const [isDarkMode, setDarkMode] = useState(true);

  const darkModeStuff = {
    isDarkMode,
    setDarkMode
  }
  const [inputValue, setInputValue] = useState("324668");
  const [isRendered, setRendered] = useState(false);
  const [modalData, setModalData] = useState({});
  const [isModalVisibile, setModalVisibility] = useState(false);
  const TopRated = useRef(null);
  const UpComing = useRef(null);
  const ScrollTop = useRef(null);
  const InputRef = useRef(null);

  const onHandleModal = (data) => {
    setModalData(data);
    setModalVisibility(!isModalVisibile);
  };

  return (
    <div className="App"  style={ isDarkMode ? theme.darkMode : theme.lightMode }>
     <ThemeContext.Provider value={ darkModeStuff }>
    
      <div className="topContent" ref={ScrollTop}>
        <LightBulb /> <Navbar TopRated={TopRated} UpComing={UpComing} InputRef={InputRef}/>
      </div>

      <div className="Main_section">
        <MainSection modalVisibility={onHandleModal} ScrollTop={ScrollTop} UpComing={UpComing} TopRated={TopRated} />
      </div>
      <div className="inputSection" inputref={InputRef} ref={InputRef}>
      <MainInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        isRendered={isRendered}
        onFormsubmit={setRendered}
       
      /></div>
      <MovieEntity
        movieID={inputValue}
        setInputValue={setInputValue}
        isRendered={isRendered}
        ScrollTop={ScrollTop}
      />
      <Modal
        data={modalData}
        isVisibile={isModalVisibile}
        onModalClick={setModalVisibility}
      /> </ThemeContext.Provider>
    </div>
   
  );
}

export default App;
