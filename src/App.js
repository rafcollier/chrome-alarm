import './App.css';
import TimerStack from './components/TimerStack';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HourglassBottomIcon  />
      </header>
        <TimerStack />
    </div>
  );
}

export default App;
