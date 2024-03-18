import React from 'react';
import { MdOutlineSearch } from 'react-icons/md';
import Input from '../Reusable/Input';
import Button from '../Reusable/Button';

const SearchInput = () => {
    return (
        <div>
            <form
                className='flex
                    items-center
                    gap-2'
            >
                <Input search placeHolder='Search...' />
                <Button name={<MdOutlineSearch size='16px'/>}>
                </Button>
            </form>
        </div>
    );
};

export default SearchInput;
