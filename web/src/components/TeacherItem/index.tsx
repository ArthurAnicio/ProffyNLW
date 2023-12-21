import React from "react";

import './styles.css'

import Whatsapp from '../../assents/images/icons/whatsapp.svg'

function TeacherItem() {
    return(<article className='teacher-item'>
                    
    <header>
        <img src='https://cdn.discordapp.com/attachments/860600728685772852/1186757572414418994/Fred.jpg?ex=6594691e&is=6581f41e&hm=7afa66fe759fdb04334014c52f7be44d59a8b5e63e9704d3eab94a6fdf358985&' alt="Fred" />
        <div>
            <strong>Fredetico Gonçalves</strong>
            <span>História</span>
        </div>
    </header>
    
    <p>
        Fred, o professor apaixonado por história. 
        <br /> <br />
        Envolve os alunos com entusiasmo e profundo conhecimento do passado com sua abordagem dinâmica que transforma as aulas em fascinantes jornadas pelo tempo, conectando eventos históricos de maneira envolvente.
    </p>

    <footer>
        <p>
            Preço/hora
            <strong>
                R$ 50,00
            </strong>
        </p>
        <button type='button'>
            <img src={Whatsapp} alt="Whatsap" />
            Entrar em contato
        </button>
    </footer>

</article>)
}
export default TeacherItem;