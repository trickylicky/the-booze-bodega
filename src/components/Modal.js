import React, { useContext, useState } from 'react';
import { AppContext } from '../services/app-context';
import classes from './Modal.module.css';

const Modal = ({ setIsModalVisible }) => {

    const style = { width: '50%'};
    const [name, setUserName] = useState('');
    const { setName } = useContext(AppContext);

    const setUser = () => {
        if(name.length > 0) {
            localStorage.setItem('user', name);
            setName(name);
            setIsModalVisible(false);
        }
    }

    return ( 
        <div className={classes.container}>
            <div className={classes.innerContainer}>
                <h1 className={classes.title}>Add Your Name</h1>
                <p className={classes.text}>Please add your name</p>
                <input onChange={(e) => {setUserName(e.target.value)}} name='name' type='text' value={name}></input>
                <button onClick={setUser} style={style}>Add Name</button>
            </div>
        </div>
    )
}

export default Modal;