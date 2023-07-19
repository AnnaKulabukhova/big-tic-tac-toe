import { useState } from 'react';
import styles from './Player.module.css';
import img from '../../images/rename.svg';

export const Player = ({ number, name, changePlayerName }) => {
  const [isActive, setIsActive] = useState(false);
  const [user, setUser] = useState(name);
  const [isEdit, setIsEdit] = useState(true);

  const handleChangeName = (e) => {
    setUser(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
  };

  const handleRedactName = () => {
    setIsActive((value) => !value);
    setIsEdit(true);
  };

  const handleSaveName = () => {
    setIsEdit((value) => !value);
    setIsActive((value) => !value);
    changePlayerName(user);
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleForm}>
        <h1 className={styles.name}>Имя игрока {number}</h1>
        <div className={styles.inner}>
          {isActive ? (
            <div className={styles.wrapperInput}>
              <input
                className={`${
                  isEdit ? styles.activeInput : styles.inactiveInput
                }`}
                type="text"
                value={user}
                onChange={handleChangeName}
              />
              {isEdit && (
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
              <div className={styles.fakeInput}>
                {user || 'Введите Ваше имя'}
              </div>
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
