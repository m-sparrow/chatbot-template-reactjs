import React from 'react';
import Message from './Message';

export default function ChatWindow(prop) {
    return (
        <React.Fragment>
            {
                prop.chats.map((chat, index) => (
                    <Message key={index} msgType={chat.msgType} userName={chat.userName} msg={chat.msg} />
                )) 
            }
        </React.Fragment>
    );
}