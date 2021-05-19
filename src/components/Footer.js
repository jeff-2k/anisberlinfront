import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'
import "./Footer.css"

const Footer = (props) => {
  return (
    <div className='footerbg '>
      <div className='row container'>
        <div className='col-sm footer container '>
          FALE CONOSCO
          <div className='footerListOut'>
          </div>
          <div>
            <a href="/" className='footerListIN' >Acompanhe seu pedido</a>
          </div>
          <div>
            <a href="/" className='footerListIN'>Trocas e devoluções</a>
          </div>
          <div>
            <a href="/" className='footerListIN'>Televendas: (11) 1234-5678</a>
          </div>
          <div>
            <a href="/" className='footerListIN'>WhatsApp: (11) 1234-5678</a>
          </div>
          <div>
            <a href="/" className='footerListIN'>Enviar e-mail</a>
          </div>
        </div>
        <div className='col-sm footer'>
          AJUDA E SUPORTE
          <div>
            <div className='footerListOut'>
            </div>
            <div>
              <a href="/" className='footerListIN'>Política de troca</a>
            </div>
            <div>
              <a href="/" className='footerListIN'>Política de privacidade</a>
            </div>
            <div>
              <a href="/" className='footerListIN'>Perguntas frequentes</a>
            </div>
            <div>
              <a href="/" className='footerListIN'>Termos e condições</a>
            </div>
            <div>
              <a href="/" className='footerListIN'>Fornecedores</a>
            </div>
          </div>
        </div>
        <div className='col-sm footer'>
          AJUDA E SUPORTE
          <div className='footerListOut'>
          </div>
          <div>
            <a href="/" className='footerListIN' >Quem somos</a>
          </div>
          <div>
            <a href="/" className='footerListIN'>Junte-se a nós</a>
          </div>
          <div>
            <a href="/" className='footerListIN'>SIGA-NOS</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer