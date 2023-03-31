export interface Meta {
  totalCount: number;
}

export interface Name {
  name: string;
}

export interface UserInt {
  username: string | never;
  password: string | never;
}

export interface requestOptions {
  method: string;
  headers: string | never;
  body: UserInt;
}
