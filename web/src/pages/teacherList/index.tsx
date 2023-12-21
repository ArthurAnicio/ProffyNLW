import React, { FormEvent, useState } from 'react';

import './styles.css'
import PageHeader from '../../components/PageHeader/index.tsx';

import TeacherItem, {Teacher} from '../../components/TeacherItem/index.tsx'
import Input from '../../components/Input/index.tsx';
import Select from '../../components/Select/index.tsx';
import api from '../../services/api.ts';


function TeacherList() {
    const [teachers, setTeachers] = useState([])
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');
    
     async function searchTeachers(e: FormEvent){
        e.preventDefault();
        
        const response = await api.get('classes', {
            params: {
                subject,
                week_day, 
                time
            }
        })
        
        setTeachers(response.data)
    }

    return(
        <div id='page-teacher-list' className='container'>
            <PageHeader title="Estes são os proffys disponíveis"> 
                <form  id='search-teachers' onSubmit={searchTeachers}>
                <Select 
                        name='subject' 
                        label='Matéria'
                        value={subject}
                        onChange={e =>{ setSubject(e.target.value)}}
                        opitions={[
                            {value: 'Artes', label: 'Artes'},
                            {value: 'Biologia', label: 'Biologia'},
                            {value: 'Ciências', label: 'Ciências'},
                            {value: 'História', label: 'História'},
                            {value: 'Física', label: 'Física'},
                            {value: 'Geografia', label: 'Geografia'},
                            {value: 'Português', label: 'Português'},
                            {value: 'Matemática', label: 'Matemática'},
                            {value: 'Química', label: 'Química'}
                        ]}
                    />
                    <Select 
                        name='week_day' 
                        label='Dia da semana'
                        value={week_day}
                        onChange={e =>{ setWeekDay(e.target.value)}}
                        opitions={[
                            {value: '0', label: 'Domingo'},
                            {value: '1', label: 'Segunda'},
                            {value: '2', label: 'Terça'},
                            {value: '3', label: 'Quarta'},
                            {value: '4', label: 'Quinta'},
                            {value: '5', label: 'Sexta'},
                            {value: '6', label: 'Sábado'}
                        ]}
                    />
                    <Input 
                        type='time' 
                        name='time' 
                        label='Hora' 
                        id={''}
                        value={time}
                        onChange={e =>{ 
                            setTime(e.target.value)
                        }}
                    />

                    <button type='submit'> Buscar </button>
                </form>
            </PageHeader>

            <main>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher}/>
                })}
                
            </main>
        </div>
    )
}

export default TeacherList;