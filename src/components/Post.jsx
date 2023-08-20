import styles from './Post.module.css';

export function Post(){
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://media.licdn.com/dms/image/D4D03AQEvteIXwNqYtA/profile-displayphoto-shrink_400_400/0/1673893454596?e=1698278400&v=beta&t=WBXTxzwjZDbj1UY4WV41yEV7bRCkvbCt7pJPcYLK4xg" />
                    <div className={styles.authorInfo}>
                        <strong>Samuel Vieira</strong>
                        <span>Fullstack Developer</span>
                    </div>
                </div>
                <time title='19 de agosto às 20:45h'  dateTime='2023-08-19 20:45:59'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉{" "}<a href="">jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto</a>{" "}
                    <a href="">#nlw</a>{" "}
                    <a href="">#rocketseat</a>
                </p>
            </div>
        </article>
    )
}