import { useContext } from 'react';
import { ThemeContext } from '../../App';
import {IoMdMoon} from 'react-icons/io'

import './index.css';

const LightBulb = () => {
  const theme = useContext(ThemeContext);
  const onHandleClick = () => theme.setDarkMode(prev => !prev);

  return (
    <div className="LightBulb">
  <IoMdMoon onClick={onHandleClick} size={20}/>

    </div>
  )
}

export default LightBulb;