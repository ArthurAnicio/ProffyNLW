import React, { useState, FormEvent } from 'react'
import PageHeader from '../../components/PageHeader/index.tsx'
import { useNavigate } from 'react-router-dom'

import './styles.css'
import warningIcon from '../../assents/images/icons/warning.svg'
import Input from '../../components/Input/index.tsx'
import TextArea from '../../components/TextArea/index.tsx'
import Select from '../../components/Select/index.tsx'
import api from '../../services/api.ts'

function TeacherForm() {
    
    const history = useNavigate();
    const [name, setName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [bio, setBio] = useState('');

    const [subject, setSubject] = useState('');
    const [cost, setCost] = useState('');

    const [scheduleItems, setScheduleItems] = useState([
        { week_day: 0, from: '', to: '' }
    ]);

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            {
                week_day: 0,
                from: '',
                to: ''
            }
        ]);
    };

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position){
                return {
                    ...scheduleItem, [field]: value
                }
            }

            return scheduleItem;
        });

        setScheduleItems(updatedScheduleItems);
    }

    function handleCreateClass(e : FormEvent) {
        e.preventDefault();

        api.post('classes', {
            name,
            avatar,
            whatsapp,
            bio,
            subject,
            cost : Number(cost),
            schedule: scheduleItems
        }).then(() => {
            alert('Cadastro realizado com sucesso!');
            history('/');
        }).catch((err) => {
            console.log(err)
            alert('Erro no cadastro!');
        })
    }

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                descripition="O primeiro passo é preencher esse formulário de inscrição"
            />

            <main>
                <form onSubmit={handleCreateClass}>
                    <fieldset>
                        <legend>Seus dados</legend>

                        <Input
                            id="name"
                            label="Nome completo"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                        />
                        <Input
                            id="avatar"
                            label="Avatar"
                            value={avatar}
                            onChange={(e) => { setAvatar(e.target.value) }}
                        />
                        <Input
                            id="whatsapp"
                            label="WhatsApp"
                            value={whatsapp}
                            onChange={(e) => { setWhatsapp(e.target.value) }}
                        />
                        <TextArea
                            id="bio"
                            label="Biografia"
                            value={bio}
                            onChange={(e) => { setBio(e.target.value) }}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>Sobre a aula</legend>

                        <Select
                            id="subject"
                            label="Matéria"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            opitions={[
                                { value: 'Artes', label: 'Artes' },
                                { value: 'Biologia', label: 'Biologia' },
                                { value: 'Ciências', label: 'Ciências' },
                                { value: 'Educação Física', label: 'Educação Física' },
                                { value: 'Física', label: 'Física' },
                                { value: 'Geografia', label: 'Geografia' },
                                { value: 'Histótria', label: 'Histótria' },
                                { value: 'Matemática', label: 'Matemática' },
                                { value: 'Português', label: 'Português' },
                                { value: 'Química', label: 'Química' },
                            ]}
                        />
                        <Input
                            id="cost"
                            label="Custo da sua hora por aula"
                            value={cost}
                            onChange={(e) => setCost(e.target.value)}
                        />
                    </fieldset>

                    <fieldset>
                        <legend>
                            Horários disponíveis
                        <button type="button" onClick={addNewScheduleItem}>
                                + Novo horário
                        </button>
                        </legend>

                        {
                            scheduleItems.map((scheduleItem, index) => {
                                return (
                                    <div key={index} className="schedule-item">
                                        <Select
                                            id="week_day"
                                            label="Dia da semana"
                                            value={scheduleItem.week_day}
                                            onChange={(e) => setScheduleItemValue(index, 'week_day', e.target.value)}
                                            opitions={[
                                                { value: '0', label: 'Domingo' },
                                                { value: '1', label: 'Segunda-Feira' },
                                                { value: '2', label: 'Terça-Feira' },
                                                { value: '3', label: 'Quarta-Feira' },
                                                { value: '4', label: 'Quinta-Feira' },
                                                { value: '5', label: 'Sexta-Feira' },
                                                { value: '6', label: 'Sábado' },
                                            ]}
                                        />
                                        <Input 
                                            id="from" 
                                            label="Das" 
                                            type="time" 
                                            value={scheduleItem.from}
                                            onChange={(e) => setScheduleItemValue(index, 'from', e.target.value)}
                                        />
                                        <Input 
                                            id="to" 
                                            label="Até" 
                                            type="time" 
                                            value={scheduleItem.to}
                                            onChange={(e) => setScheduleItemValue(index, 'to', e.target.value)}
                                        />
                                    </div>
                                )
                            })
                        }

                    </fieldset>

                    <footer>
                        <p>
                            <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                        <button type="submit">
                            Salvar cadastro
                    </button>
                    </footer>
                </form>
            </main>
        </div>
    )
}

export default TeacherForm