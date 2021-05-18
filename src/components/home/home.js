import React, { useState } from 'react'
import { Container, Row, Col, Modal, Button } from 'react-bootstrap'
import ModalContents from '../modalContents/modalContents'
import './home.scss'
import leaf from '../../images/sketches/20.PNG'
import toyFox from '../../images/paintings/toy_fox.jpeg'
import window from '../../images/paintings/window.jpeg'

import { featuredList } from './featuredList'

export default function Home() {
  const [show, setShow] = useState(false);
  const [pic, setPic] = useState({})

  const handleClose = () => setShow(false);
  const handleShow = (a) => {
    setShow(true)
    setPic(a)
  }

  return (
    <div id="home">
      <h2>Featured Art</h2>

      <div id="homeContent">  
        {featuredList.length === 0 
          ? "No Paintings Available"
          : featuredList.map(x => (
            <img src={x.src} alt={x.alt} onClick={() => handleShow({title: x.title, medium: x.medium, cost: x.cost, description: x.description, img: x.src, buy: x.buy})} />
          ))
        }
        <Modal show={show} onHide={handleClose} centered size="lg" dialogClassName="featuredArt">
          <ModalContents {...pic} />
        </Modal>
      </div>
    </div>
  )
}