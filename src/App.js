import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { CssBaseline, Box, Paper, CircularProgress } from '@mui/material';
import AppBarItem from './comp/AppBar';
import TextAreaItem from './comp/TextArea';
import ChatWindow from './comp/ChatWindow';

export default function App() {

  const [chats, setChats] = useState([{'msgType':'bot', 'userName': 'AI Assistant', 'msg': 'Hi, I am a Bot. How can I help you?'}]);
  const [textAreaDisable, setTextAreaDisable] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(scrollToBottom, [chats]);

  const onReply = (reply) => {
    var newChat = [...chats]
    newChat.push({'msgType':'user', 'userName': 'Me', 'msg': reply});
    setChats(newChat);

    newChat.push({'msgType':'bot', 'userName': 'AI Assistant', 'msg': 'I am a AI Bot frontend template yet to be trained!'});
    setChats(newChat);
    setTextAreaDisable(false);

    /* Plugin logic for AI response. Like, webhook or API call */

    /*
    setTextAreaDisable(true)

    const requestOptions = {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ query: reply })
    };

    fetch('<URL>', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        setTextAreaDisable(false);
        newChat.push({'msgType':'bot', 'userName': 'AI Assistant', 'msg': data.reply});
        setChats(newChat);
      }) */
  }


  return (
      <React.Fragment>
          <CssBaseline />
          <AppBarItem />
          <Box sx={{width: '100vw', height: '80vh', display: 'flex', alignItems: 'top', justifyContent: 'center'}} >
             <Paper sx={{mt: 1, width: '75vw', height: '75vh', overflow: 'auto'}} >
                    <ChatWindow chats={chats} />
                    {
                      textAreaDisable && <CircularProgress sx={{ml: '10vw'}} />
                    }
                    <div ref={chatEndRef} />
              </Paper>              
          </Box>
          
          <Box sx={{width: '100vw', height: '5vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}} >
            <TextAreaItem replyToApp={onReply} disabled={textAreaDisable}/>
          </Box>

      </React.Fragment>
  );
}
