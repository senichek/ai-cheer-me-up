import trainImg from './train.jpg'
import TrainIcon from '@mui/icons-material/Train';
import './App.css';
import { useState } from 'react';

function App() {

  const [message, setMessage] = useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.");
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className='container'>
      <img src={trainImg} className="main-img" alt="image_of_train" />
      <div className='train-icon' onClick={() => setShowMessage(!showMessage)}>
        <TrainIcon />
      </div>
      <div className='footer'>Click the train to see an interesting message</div>
      {showMessage &&
        <div className='message'>{message}</div>
      }
    </div>
  );
}

export default App;
