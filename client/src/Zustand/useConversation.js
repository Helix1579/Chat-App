import { create } from 'zustand';

const useConversation = create((set) => ({
    SelectedConversation: null,
    setSelectedConversation: (SelectedConversation) =>
        set({ SelectedConversation }),
    Messages: [],
    setMessages: (Messages) => set({ Messages }),
}));

export default useConversation;
