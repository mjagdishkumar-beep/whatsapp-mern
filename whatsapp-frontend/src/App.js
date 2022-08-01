import { useEffect, useState } from 'react';
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import Pusher from 'pusher-js'
import axios from './components/axios'
import Login from './components/Login';
import { useStateValue } from './components/StateProvider';

function App() {
  const [messages, setMessages] = useState([])
  const[{ user }, dispatch] = useStateValue()

  useEffect(() => {
    axios.get("/messages/sync").then(res => setMessages(res.data))
  }, [])

  useEffect(() => {
    const pusher = new Pusher('a08a230e2bdeb3c40750', {
      cluster: 'ap2'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      setMessages([...messages, data])
    });

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages])

  console.log(messages)

  return (
    <div className="app">
      {!user ? <Login /> : (
        <div className="app__body">
          <Sidebar />
          <Chat messages={messages} />
        </div>
      )}
    </div>
  );
}

export default App;
