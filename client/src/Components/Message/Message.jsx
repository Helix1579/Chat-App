import React from 'react';

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-6 rounded-full mr-2'>
                    <img
                        className='bg-green-500'
                        alt='Tailwind CSS chat bubble component'
                        src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
                    />
                </div>
            </div>
            <div
                className='chat-bubble 
                    text-black
                    text-sm
                    flex
                    min-h-7
                    min-w-7
                    items-center
                    justify-center
                    px-3 py-0
                    bg-green-500'
            >
                Message
            </div>
            <div className='chat-footer opacity-50 text-xs'>Seen at 12:46</div>
        </div>
        // <div className='chat chat-end'>
        //     <div className='chat-image avatar'>
        //         <div className='w-8 rounded-full'>
        //             <img
        //                 src='https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png'
        //                 alt='User Avatar'
        //             />
        //         </div>
        //     </div>
        //     <div
        //         className={`chat-bubble
        //         text-black
        //         bg-green-500
        //         px-5 py-0
        //         flex
        //         items-center`}
        //     >
        //         Message
        //     </div>
        //     <div
        //         className='chat-footer
        //         opacity-50
        //         text-xs
        //         flex
        //         gap-1
        //         items-center'
        //     >Time</div>
        // </div>
    );
};

export default Message;
