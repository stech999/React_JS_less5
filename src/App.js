import { useSelector } from 'react-redux';
import './App.css';
import { ThemeToggle } from './components/ThemeToggle';


const App = () => {
  const theme = useSelector((state) => state);
  return (
      <div>
        <h2 className={theme}>Тема</h2>
        <ThemeToggle />
      </div>
  );
};

export default App;
