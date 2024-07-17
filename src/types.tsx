export type TContent = {
  Id: string;
  Hive: string;
  Title: string;
  Author: string;
  Message: string;
  Uuid: string;
  HiveUuid: string;
  Link: string;
  ImageLink: string;
  Upvote: number;
  Downvote: number;
  CommentCount: number;
  Deleted: number;
  Created: any;
};

export type TComment = {
  Id: string;
  Author: string;
  Message: string;
  Uuid: string;
  AccountUUID: string;
  ContentUuid: string;
  ParentUuid: string;
  Upvote: number;
  Downvote: number;
  Deleted: boolean;
  Created: any;
  LastEdited: any;
};

export type TSession = {
  accessToken: string | null;
  accessTokenExpiry: any;
  refreshToken: string | null;
  username: string | null;
  accountUUID: string | null;
};
