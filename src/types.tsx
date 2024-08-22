// SPDX-License-Identifier: Apache-2.0

export type SvgProps = {
  [key: string]: any
};

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
  accessTokenExpiry: string | null;
  refreshTokenExpiry: string | null;
  refreshToken: string | null;
  username: string | null;
  accountUUID: string | null;
};

export type TPassError = {
  isValid: boolean;
  errorMsg: string;
}

export type TPassValidation = {
  input: string,
  minLength: TPassError;
  upper: TPassError;
  lower: TPassError;
  number: TPassError;
  special: TPassError;
}

export type TEmailValidation = {
  input: string,
  minLength: TPassError;
  format: TPassError
}