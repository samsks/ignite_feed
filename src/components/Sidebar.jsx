import {PencilLine} from 'phosphor-react';
import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1580777361964-27e9cdd2f838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" 
            />
            <div className={styles.profile}>
                <Avatar 
                    src="https://media.licdn.com/dms/image/D4D03AQEvteIXwNqYtA/profile-displayphoto-shrink_400_400/0/1673893454596?e=1698278400&v=beta&t=WBXTxzwjZDbj1UY4WV41yEV7bRCkvbCt7pJPcYLK4xg" 
                />
                <strong>Samuel Vieira</strong>
                <span>Fullstack Developer</span>
            </div>
            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}