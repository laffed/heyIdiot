type UserState = {
  username: string;
  //TODO actually implement a hashing function 
  pwHash: string;
  isLoggedIn: boolean;
}

export const state: UserState = {
  username: '',
  pwHash: '',
  isLoggedIn: false
}