import ChatRoomView from '@/components/chat/ChatRoomView.vue';
import ChatRoomCreate from '@/components/chat/ChatRoomCreate.vue';
import ChatRoomList from '@/views/chat/ChatRoomList.vue';

export const chatRouter = [
    {
        path: '/chatRoom/create',
        name: 'ChatRoomCreatePage',
        component: ChatRoomCreate,
    },

    {
        path: '/chatRoom/list/:userNum',
        name: 'ChatRoomListPage',
        component: ChatRoomList,
    },

    {
        path: '/chatRoom/:id',
        name: 'ChatRoomViewPage',
        component: ChatRoomView,
        // props: route => ({
        //   roomId: Number(route.params.roomId), 
        //   roomName: route.params.roomName
        // })
    }
]