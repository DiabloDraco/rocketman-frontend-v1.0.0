export interface Meta {
  totalCount: number;
}

export interface Name {
  name: string;
}

export interface UserInt {
  username: string | any;
  password: string | any;
}

export interface requestOptions {
  method: string;
  headers: string | any;
  body: UserInt;
}
