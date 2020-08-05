import React, { useState, FormEvent, useEffect } from 'react';
import PageHeader from "../../components/PageHeader";
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

import "./styles.css";
import Select from '../../components/Select';
import api from '../../services/api';
import { Teacher } from '../../components/TeacherItem/index';

function TeacherList() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  const [subject, setSubject] = useState('');
  const [week_day, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    serchTeachers();
  }, []);

  async function serchTeachers(e?: FormEvent) {
    if (e) {
      e.preventDefault();
    }

    try {
      const response = await api.get('/classes', {
        params: {
          subject,
          week_day,
          time,
        }
      });

      setTeachers(response.data);
    } catch (error) {
      console.error(error); 
    }
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title='Estes são os proffys disponíveis.'>
        <form id="search-teachers" onSubmit={serchTeachers}>
          <Select
            name="subject" 
            label="Matéria"
            value={subject}
            onChange={e => { setSubject(e.target.value) }}
            options={[
              { value: 'Artes', label: 'Artes' },
              { value: 'Biologia', label: 'Biologia' },
              { value: 'Ciências', label: 'Ciências' },
              { value: 'Educação Física', label: 'Educação Física' },
              { value: 'Geografia', label: 'Geografia' },
              { value: 'História', label: 'História' },
              { value: 'Matemática', label: 'Matemática' },
              { value: 'Português', label: 'Português' },
              { value: 'Química', label: 'Química' },
              { value: 'Filosofia', label: 'Filosofia' },
              { value: 'Sociologia', label: 'Sociologia' }
            ]} 
          /> 
          
          <Select 
            name="week_day" 
            label="Dia da semana"
            value={week_day}
            onChange={e => { setWeekDay(e.target.value) }}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' }
            ]} 
          /> 

          <Input 
            name="time" 
            label="Hora" 
            type="time"
            value={time}
            onChange={e => { setTime(e.target.value) }} 
          />

          <button type="submit">
            Buscar
          </button>
        </form>
      </PageHeader>

      <main>
        {teachers.map(teacher => (
          <TeacherItem key={teacher.id} teacher={teacher} />
        ))}
      </main>
    </div>
  );
}

export default TeacherList;