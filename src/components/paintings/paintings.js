import React from 'react'
import './paintings.scss'
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox"

import  { paintingsList } from './paintingsList'

export default function Paintings() {
  return (
    <div id="paintings">
      <h2>Paintings</h2>
      <div id="paintingsContent">
        <SimpleReactLightbox>
          <SRLWrapper>
            {paintingsList.length === 0 
              ? "No Paintings Available"
              : paintingsList.map(x => (
                <a href={x.src} data-attribute="SRL">
                  <img src={x.src} alt={x.alt}/>
                </a>
              ))
            }
          </SRLWrapper>
        </SimpleReactLightbox>
      </div>
    </div>
  )
}