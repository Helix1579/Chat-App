import React, { useState } from 'react';
import Input from '../Reusable/Input';
import { BiSolidSend } from 'react-icons/bi';
import useSendMessage from '../../Hooks/useSendMessage';

const MessageInput = () => {
    const [Message, setMessage] = useState('');
    const { Loading, SendMessage } = useSendMessage();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log('Message : ' + Message)
        if (!Message) return;
        await SendMessage(Message);
        setMessage('');
    };

    return (
        <form className='my-3 mx-1' onClick={handleSubmit}>
            <div className='w-full relative'>
                <Input
                    placeHolder='Send a message'
                    value={Message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    type='submit'
                    className='absolute 
                        inset-y-0 pe-4
                        end-0 flex
                        items-center 
                        text-green-500'
                >
                    {Loading ? (
                        <div className='loading 
                            loading-sm
                            loading-dots' />
                    ) : (
                        <BiSolidSend />
                    )}
                </button>
            </div>
        </form>
    );
};
export default MessageInput;
