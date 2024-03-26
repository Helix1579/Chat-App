import React, { useState } from 'react';
import { MdOutlineSearch } from 'react-icons/md';
import Input from '../Reusable/Input';
import Button from '../Reusable/Button';
import useConversation from '../../Zustand/useConversation';
import useGetConversations from '../../Hooks/useGetConversations';
import { toast } from 'react-toastify';

const SearchInput = () => {
    const [Search, setSearch] = useState('');
    const { setSelectedConversation } = useConversation();
    const { Conversations, setConversations } = useGetConversations();

    // console.log('Conversations Search : \n', Conversations);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Search) {
            setConversations(Conversations);
        }

        if (Search.length < 3) {
            return toast.error('Search term must be at least 3 characters', {
                theme: 'dark',
            });
        }

        const conversation = Conversations.filter((conversation) =>
            conversation.name.toLowerCase().includes(Search.toLowerCase())
        );

        if (conversation) {
            console.log(conversation);
            setSelectedConversation(conversation[0]);
            setSearch('');
        } else
            toast.error('No such user found!', {
                theme: 'dark',
            });
    };

    return (
        <div>
            <form
                className='flex
                    items-center
                    gap-2'
                onSubmit={handleSubmit}
            >
                <Input
                    search
                    placeHolder='Search...'
                    value={Search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button displayText={<MdOutlineSearch size='16px' />}></Button>
            </form>
        </div>
    );
};

export default SearchInput;
