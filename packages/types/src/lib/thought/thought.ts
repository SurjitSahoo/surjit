interface IBase {
  id: string;
  name: string;
}

export interface IThoughtAuthor extends IBase {
  email: string;
  createdAt: string;
  updatedAt: string;
}

export interface IThoughtContentItem {
  text: string;
}
export interface IThoughtContent {
  type: string; // p, img, span etc..
  children: IThoughtContentItem[];
}

export type IThoughtTag = IBase;

export type IThoughtLang = IBase;

export type IThoughtCategory = IBase;

export interface IThought {
  id: string;
  title: string;
  author: IThoughtAuthor;
  tags: IThoughtTag[];
  language: IThoughtLang;
  category: IThoughtCategory;
  related: IThought[];
  content: IThoughtContent[];

  createdAt: string;
  updatedAt: string;
  publishedDate: string;
  status: 'published' | 'draft';
}
