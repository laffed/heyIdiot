export type Navigation = {
  navigate: (scene: string) => void;
};

export type AuthStackParams = {
  Login: undefined;
  Signup: undefined;
}

export type AppStackParams = {

}

export type LoginFormValues = {
  username: string;
  password: string;
}

export type SignupFormValues = {
  username: string;
  password: string;
}