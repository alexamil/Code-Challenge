class Network {
  constructor(data, users) {
    this._data = data;
    this._users = users;
  }
  get data() {
    return this._data;
  }

  get users() {
    return this._users;
  }

  movieTime(){
    if((this.data-(this.users*5)) >= 10){
  return true;
  } else {
      return false;
    }
  }
    }
  
const library = new Network(20, 2); 
library.movieTime(); 
console.log(library.movieTime());
