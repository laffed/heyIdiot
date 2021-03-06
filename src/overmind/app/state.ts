type AppState = {
  users: {
    [user: string]: {username: string; pwHash: string}
  }
}

export const state: AppState = {
  users: {}
}