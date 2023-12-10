import trainImg from './train.jpg'
import TrainIcon from '@mui/icons-material/Train';
import './App.css';
import { useState } from 'react';
import LinearIndeterminate from './loading';

function App() {

  const [message, setMessage] = useState("");
  const [msgCounter, setMsgCounter] = useState(0);
  const [loading, setLoading] = useState(false);

  const getRespone = async () => {
    setLoading(true);
    const response = await fetch("https://dxx4gq4ir5.execute-api.us-east-1.amazonaws.com/dev/cheer/cheermeup");
    const data = await response.json();
    setMessage(data);
    setMsgCounter(msgCounter + 1);
    console.log(data);
    setLoading(false);
  }

  return (
    <div className='container'>
      <img src={trainImg} className="main-img" alt="image_of_train" />
      {/* <div className='train-icon' onClick={() => setShowMessage(!showMessage)}> */}
      <div className='train-icon' onClick={() => getRespone()}>
        <TrainIcon />
      </div>
      <div className='footer'>Click the train icon to see an AI-generated message</div>
      {message &&
        <div className='message'>{`Msg ${msgCounter}: ${message}`}</div>
      }
      {loading &&
        <LinearIndeterminate />
      }
    </div>
  );
}

export default App;
