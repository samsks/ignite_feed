import { ThumbsUp, Trash } from 'phosphor-react';
import style from './Comment.module.css';

export function Comment(){
    return (
        <div className={style.comment}>
            <img src="https://media.licdn.com/dms/image/D4D03AQEvteIXwNqYtA/profile-displayphoto-shrink_400_400/0/1673893454596?e=1698278400&v=beta&t=WBXTxzwjZDbj1UY4WV41yEV7bRCkvbCt7pJPcYLK4xg"/>
            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Samuel Vieira</strong>
                            <time 
                            title='19 de agosto às 20:45h'
                            dateTime='2023-08-19 20:45:59'
                            >
                                Cerca de 1h atrás
                            </time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!!{" "}👏👏</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp size={20} />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}