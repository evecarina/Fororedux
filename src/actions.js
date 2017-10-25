
import store from './store'

// export const addname=()=>{
//     this.store.push({name:this.input.value ,comment:this.comment.value,id:Utils.uuid(),confirmed:''});
//     // this.guests.push({comment:this.comment.value,id:Utils.uuid(),confirmed:''});
//     this.input.value='';      
//     this.update();
// }









export const playAction = () => {
   let selectedSong = store.getState().selectedSong  //el estado actual del store 
   if (selectedSong == -1 )
      selectedSong = 0
   //estado inicial
   store.setState({
      selectedSong : selectedSong
   })
}

export const nextAction = () => {

   let selectedSong = store.getState().selectedSong + 1
   if (selectedSong == store.getState().songs.length )
      selectedSong = 0

   store.setState({
      selectedSong : selectedSong
   })
}

export const stopAction = () => {
   store.setState({
      selectedSong : -1
   })
}