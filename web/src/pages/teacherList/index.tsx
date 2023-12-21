import React from 'react';

import './styles.css'
import PageHeader from '../../components/PageHeader/index.tsx';

import TeacherItem from '../../components/TeacherItem/index.tsx'
import Input from '../../components/Input/index.tsx';
import Select from '../../components/Select/index.tsx';
function TeacherList() {
    return(
        <div id='page-teacher-list' className='container'>
            <PageHeader title="Estes são os proffys disponíveis"> 
                <form  id='search-teachers'>
                <Select 
                        name='subject' 
                        label='Matéria'
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
                    <Input type='time' name='time' label='Hora'/>
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                
            </main>
        </div>
    )
}

export default TeacherList;