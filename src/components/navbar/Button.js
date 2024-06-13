import React from 'react'
import styles from './styles/button.module.scss'
import { Link } from 'react-router-dom'

const Button = (props) => {
  return (
    <>
      <div className={styles.contain}>
        <Link to={props.link} style={{ textDecoration: 'none' }}><button className={styles.btn} onClick={props.onClick}>
          {props.icon}
          {props.title}</button></Link>
      </div>
    </>
  )
}

export default Button
