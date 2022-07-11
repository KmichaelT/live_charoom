const chatList=document.querySelector('#myTabContent')
const newChatForm=document.querySelector('.new-chat')
const newNameForm=document.querySelector('.new-name')
const menu=document.querySelector('.nav-tabs')
let room=chatList.querySelector('.active').id


newChatForm.addEventListener('submit', e =>{
    e.preventDefault();
    room=chatList.querySelector('.active').id
    const message = newChatForm.message.value.trim()
    chatroom.addChat(message)
        .then(()=> newChatForm.reset())
        .catch(err => console.log(err))
});

newNameForm.addEventListener('submit', e =>{
    e.preventDefault();
    const newName = newNameForm.name.value.trim()
    chatroom.updateName(newName);
    newNameForm.reset();

Swal.fire({
  position: 'center',
  icon: 'success',
  title: 'your name saved successfuly',
  showConfirmButton: false,
  timer: 1500
})
});

const username = localStorage.username ? localStorage.username : 'Anonymous';
const chatUI=new ChatUI(chatList);
const chatroom= new Chatroom(`${room}`,username);



chatroom.getChats(data =>{chatUI.render(data);
});

menu.addEventListener('click' , e =>{ 
    if(e.target.localName==='button' ){
        chatroom.updateRoom(e.target.name);
        room=e.target.name
        document.querySelector(`#${room}`).innerHTML=''
        chatroom.getChats(chat => chatUI.render(chat))
        
    }
    })