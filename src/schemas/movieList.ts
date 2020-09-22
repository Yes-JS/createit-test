export interface MovieList {
  feed: Feed;
}

export interface Feed {
  author: Author;
  entry: Entry[];
  updated: Icon;
  rights: Icon;
  title: Icon;
  icon: Icon;
  link: FeedLink[];
  id: Icon;
}

export interface Author {
  name: Icon;
  uri: Icon;
}

export interface Icon {
  label: string;
}

export interface Entry {
  'im:name': Icon;
  rights: Icon;
  'im:image': IMImage[];
  summary: Icon;
  'im:rentalPrice': IMPrice;
  'im:price': IMPrice;
  'im:contentType': IMContentType;
  title: Icon;
  link: EntryLink[];
  id: ID;
  'im:artist': Icon;
  category: Category;
  'im:releaseDate': IMReleaseDate;
}

export interface Category {
  attributes: CategoryAttributes;
}

export interface CategoryAttributes {
  'im:id': string;
  term: string;
  scheme: string;
  label: string;
}

export interface ID {
  label: string;
  attributes: IDAttributes;
}

export interface IDAttributes {
  'im:id': string;
}

export interface IMContentType {
  attributes: IMContentTypeAttributes;
}

export interface IMContentTypeAttributes {
  term: string;
  label: string;
}

export interface IMImage {
  label: string;
  attributes: IMImageAttributes;
}

export interface IMImageAttributes {
  height: string;
}

export interface IMPrice {
  label: string;
  attributes: IMPriceAttributes;
}

export interface IMPriceAttributes {
  amount: string;
  currency: string;
}

export interface IMReleaseDate {
  label: Date;
  attributes: Icon;
}

export interface EntryLink {
  attributes: PurpleAttributes;
  'im:duration'?: Icon;
}

export interface PurpleAttributes {
  rel: string;
  type: string;
  href: string;
  title?: string;
  'im:assetType'?: string;
}

export interface FeedLink {
  attributes: FluffyAttributes;
}

export interface FluffyAttributes {
  rel: string;
  type?: string;
  href: string;
}
