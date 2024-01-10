export interface UserState {
  isSignedIn: boolean;
  uid: string;
  username: string;
  action: () => void;
}

export interface action {
  type: string;
  payload: object;
}
