import React, { useState } from 'react';
import {v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [roomId, setRoomId] = useState('');
    const [username, setUserName] = useState('');
    const createNewRoom = (e) => {
        e.preventDefault();
        const id = uuid();
        setRoomId(id);
        toast.success('Room created successfully');
    };

    const joinRoom = (e) => {
        if(!roomId || !username) {
            toast.error('Please provide room id and user name');
            return;
        }

        navigate(`/editor/${roomId}`, {
            state: {
                username
            } 
        })
    };

    const handleInputEnter = (e) => {
        if(e.key === 'Enter') {
            joinRoom();
        }
    }

    return <div className='homePageWrapper'>
        <div className='formWrapper'>
            <img src='/code-sync.png' className='homePageLogo' alt='logo' />
            <h4 className='mainLabel'>Paste the room Id here.</h4>
            <div className='inputGroup'>
                <input type='text' className='inputBox' placeholder='Room Id' onChange={(e) => setRoomId(e.target.value)} value={roomId} onKeyUp={handleInputEnter}/>
                <input type='text' className='inputBox' placeholder='User Name' onChange={(e) => setUserName(e.target.value)} value={username} onKeyUp={handleInputEnter}/>
                <button className='btn joinBtn' onClick={joinRoom}>Join</button>
                <span className='createInfo'>
                    If you don't have an invite then create &nbsp;
                    <a onClick={createNewRoom} href='' className='createNewBtn'>new room</a>
                </span>
            </div>
        </div>
        <footer>
            <h4 className='footerLabel'>Made with ❤️ by <a href='https://github.com/ChandraShekar05'>Chandra</a> </h4>
        </footer>
    </div>
};

export default Home;