export interface IUser {
  name: string;
  email: string;
  role: "admin" | "user";
  _id?: string;
  password?: string;
  createdAt?: string;
  updatedAt?: string;
}
