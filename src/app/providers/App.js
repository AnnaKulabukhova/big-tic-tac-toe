import { BrowserRouter } from 'react-router-dom';
import { Routes } from './Routes';
import styles from './App.module.css';

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
