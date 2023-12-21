import React from "react";
import { Link } from 'react-router-dom';
import backIcon from '../../assents/images/icons/back.svg';
import logoImg from '../../assents/images/logo.svg';
import './styles.css'

interface PageHeaderProps {
    title: string;
    children?
    descripition?: string
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (<header className='page-header'>
    <div className='top-bar-container'>
        <Link to='/'>
            <img src={backIcon} alt="voltar" />
        </Link>
        <img src={logoImg} alt="proffy" />
    </div>
    <div className='header-content'>
        <strong>{props.title}</strong>

        { props.descripition ? <p> {props.descripition} </p> : null }

        {props.children}
    </div>
    
</header>);
}
export default PageHeader;