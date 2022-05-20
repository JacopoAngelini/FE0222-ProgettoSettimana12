export interface UserLogged{
accessToken: string;
  user: {
    email: string;
    id: number;
    name: string;
  };
}