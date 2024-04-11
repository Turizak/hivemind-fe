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

export type TSession = {
  accessToken: string;
}
