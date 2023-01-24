export interface Board {
  id: string;
  title: string;
  description: string;
  status: string;
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
