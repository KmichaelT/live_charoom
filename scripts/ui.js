
class ChatUI{
    constructor(list){
      this.list=list;
      this.chat=list.querySelectorAll('.tab-pane')
    }
    
    // clear(){
    //     this.chat.innerHTML = '';
    //   }
   
    render(data){
        const when=dateFns.distanceInWordsToNow(data.created_at.toDate(),{addSuffix: true});
        const side = data.username == localStorage.username ? "float-end" : " ";
        console.log(this.list.querySelector(`#${data.room}`))
    const html = `
        <div class="card text-bg-light ${side} rounded-5 m-3 w-75">
            <div class="card-header fw-bolder p-1 px-3">${data.username}</div>
            <div class="card-body">
                <p class="m-0 card-text">${data.message}</p>
                <br>
                <small class="float-end  px-2">${when}</small>
            </div>
        </div>
    `;
    this.list.querySelector(`#${data.room}`).innerHTML += html;
    
    }
    
}
