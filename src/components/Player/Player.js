import { useState, useContext } from 'react';
import styles from './Player.module.css';
import img from '../../images/rename.svg';
import { PlayersContext } from '../Context/PlayersContext';

export const Player = ({ number, name }) => {
  const [isActive, setIsActive] = useState(false);
  const [user, setUser] = useState('');
  const [isSave, setIsSave] = useState(true);
  const { changePlayerName, players } = useContext(PlayersContext);

  let inputClass;

  if (isSave) {
    inputClass = styles.activeInput;
  } else {
    inputClass = styles.inactiveInput;
  }

  const handleChangeInput = (e) => {
    e.preventDefault();
  };

  const handleRedactName = () => {
    setIsActive(!isActive);
  };

  const handleSaveName = () => {
    const newContext = { ...players };
    players[name] = user;
    changePlayerName(players[name]);
    setIsSave(!isSave);
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleChangeInput}>
        <h1 className={styles.name}>Имя игрока {number}</h1>
        <div className={styles.inner}>
          {isActive ? (
            <div className={styles.wrapperInput}>
              <input
                className={inputClass}
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              {isSave && (
                <button
                  className={styles.buttonSave}
                  type="submit"
                  onClick={handleSaveName}
                >
                  Сохранить
                </button>
              )}
            </div>
          ) : (
            <div className={styles.wrapperFakeInput}>
              <div className={styles.fakeInput}>Введите Ваше имя</div>
              <button
                title="Изменить имя"
                className={styles.buttonRename}
                onClick={handleRedactName}
              >
                <img src={img} alt="Изменить имя" />
              </button>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
