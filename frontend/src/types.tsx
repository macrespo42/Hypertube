// frontend/src/types.tsx

import { ChangeEvent, ReactElement, ReactPortal } from "react";

export interface Movie {
  id: string;
  title: string;
  release: string;
  image: string;
  synopsis: string;
  trailer: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  avatar: string;
}
export type FormInput = { name: string; value: string; placeholder: string; handleChange: (event: ChangeEvent<HTMLInputElement>) => void };
export type ReducerAction = {
  type: string;
  name: string;
  value: string;
};
export interface LoginType {
  username: string;
  password: string;
}

export interface RegisterType {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  password1: string;
}
export type UserData = {
  id?: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  avatar?: string;
  omniauth?: boolean;
};

export type ProfileForm = {
  username?: string;
  email?: string;
  first_name?: string;
  last_name?: string;
  password?: string;
};

export type NotifyType = {
  type: "success" | "warning" | "error";
  msg: string;
};

export interface UserPatchInterface extends ProfileForm {
  avatar?: string;
}
type ReactText = string | number;
type ReactChild = ReactElement | ReactText;

interface ReactNodeArray extends Array<ReactNode> {}
type ReactFragment = ReactNodeArray;
type ReactNode = ReactChild | ReactFragment | ReactPortal | boolean | null | undefined;

export type Props = {
  children: ReactNode;
};
