import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import "./styles.css";
import api from '../../services/api';

export interface Teacher {
  avatar: string;
  bio: string;
  cost: number;
  id: number;
  name: string;
  subject: string;
  whatsapp: string;
}

interface TeacherItemProps {
  teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createConnection() {
    api.post('/connections', {
      user_id: teacher.id
    });
  }
  
  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt="Michele Ambrosio"/>
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>{teacher.bio}</p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost.toFixed(2)}</strong>
        </p>
        <a href={`https://wa.me/${teacher.whatsapp}`} target="__blank" onClick={createConnection}>
          <img src={whatsAppIcon} alt="WhatsApp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
}

export default TeacherItem;