import React from 'react';
import Input from '../Reusable/Input';
import { BiSolidSend } from 'react-icons/bi';

const MessageInput = () => {
    return (
        <form className='my-3 '>
            <div className='w-full relative'>
                <Input placeHolder='Send a message' />
                <button
                    type='submit'
                    className='absolute 
                        inset-y-0 
                        end-0 
                        pe-4 
                        text-green-500'
                >
                    <BiSolidSend />
                </button>
            </div>
        </form>
    );
};
export default MessageInput;
