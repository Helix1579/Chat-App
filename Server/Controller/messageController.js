import Conversation from '../Models/conversationModel.js';
import Message from '../Models/messageModel.js';

export const sendMessage = async (req, res) => {
    // res.status(200).json({ message: `Message Controller ${req.params.id}` });
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user.id;

        // console.log('Sender: ', senderId);
        // console.log('Reciever: ', recieverId);

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if (newMessage) {
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(), newMessage.save()]);

        res.status(200).json(newMessage);
    } catch (error) {
        res.status(500).json({ message: 'Error in Message Controller' });
        console.log(error);
    }
};

export const getMessage = async (req, res) => {
    try {
        const { id: userChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userChatId] },
        }).populate('messages');

        // res.status(200).json(conversation.messages);

        if (!conversation) {
            return res.status(200).json({ message: 'No Messages' });
        }
        const messages = conversation.messages;
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Error in Message Controller' });
        console.log(error);
    }
};
