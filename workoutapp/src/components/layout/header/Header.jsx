import styles from './Header.module.scss'

import React from 'react'
import { useAuth } from '../../../hooks/useAuth'
import {IoMdArrowBack} from 'react-icons/io'
import Hamburger from '../hamburger/Hamburger'
 
const Header = ({backLink}) => {
    const {isAuth} = useAuth()
  return (
    
    <header className={styles.header}>
        <button onClick={()=>{}}>
            <IoMdArrowBack fill = '#fff' fontSize={29}/> 
        </button>

        <Hamburger/>
    
        
    </header>
  )
}

export default Header