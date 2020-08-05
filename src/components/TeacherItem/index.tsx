import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import "./styles.css";

const TeacherItem = () => {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://scontent.fsod2-1.fna.fbcdn.net/v/t1.0-9/s960x960/52274812_2158546684191728_4261263798570057728_o.jpg?_nc_cat=109&_nc_sid=85a577&_nc_eui2=AeE0lssbPaW0IGg750n8lmZatupqmaDrSUi26mqZoOtJSEZpVzI9qchRGUr4ajYMjrT1jUd_BT8wlg23qg7b9Lkt&_nc_ohc=kxfV68hSA1gAX-kjTTy&_nc_ht=scontent.fsod2-1.fna&_nc_tp=7&oh=4db4efdabc3873d6ba3c6c199ec28c5e&oe=5F4F1726" alt="Michele Ambrosio"/>
        <div>
          <strong>Michele Ambrosio</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        É importante questionar o quanto a competitividade nas transações comerciais nos obriga à análise das regras de conduta normativas.
        <br /><br />
        Neste sentido, a expansão dos mercados mundiais deve passar por modificações independentemente das diretrizes de desenvolvimento para o futuro.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsAppIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;