export interface IUser {
  _id: string;
  email: string;
}

export interface INote {
  _id: string;
  title: string;
  content: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginResponse {
  message: string;
  token: string;
  userId: string;
}

export interface NotesResponse extends Array<INote> {}
