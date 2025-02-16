// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file models/movie/v1/movie.proto (package models.movie.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Image } from "../../common/v1/common_pb";
import { file_models_common_v1_common } from "../../common/v1/common_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file models/movie/v1/movie.proto.
 */
export const file_models_movie_v1_movie: GenFile = /*@__PURE__*/
  fileDesc("Chttb2RlbHMvbW92aWUvdjEvbW92aWUucHJvdG8SD21vZGVscy5tb3ZpZS52MSIzCgpDYXN0TWVtYmVyEhEKCXBlcnNvbl9pZBgBIAEoCRISCgpjaGFyYWN0ZXJzGAIgAygJIj4KDlJhdGluZ3NTdW1tYXJ5EhgKEGFnZ3JlZ2F0ZV9yYXRpbmcYASABKAESEgoKdm90ZV9jb3VudBgCIAEoBSLMAgoFTW92aWUSCgoCaWQYASABKAkSDAoEbmFtZRgCIAEoCRITCgtkZXNjcmlwdGlvbhgDIAEoCRIpCgRjYXN0GAQgAygLMhsubW9kZWxzLm1vdmllLnYxLkNhc3RNZW1iZXISMQoLY2VydGlmaWNhdGUYBSABKA4yHC5tb2RlbHMubW92aWUudjEuQ2VydGlmaWNhdGUSDgoGZ2VucmVzGAYgAygJEiYKBWltYWdlGAcgASgLMhcubW9kZWxzLmNvbW1vbi52MS5JbWFnZRIMCgRyYW5rGAggASgFEjgKD3JhdGluZ3Nfc3VtbWFyeRgJIAEoCzIfLm1vZGVscy5tb3ZpZS52MS5SYXRpbmdzU3VtbWFyeRIUCgxyZWxlYXNlX3llYXIYCiABKAUSDwoHcnVudGltZRgLIAEoBRIPCgd0YWdsaW5lGAwgASgJKo8BCgtDZXJ0aWZpY2F0ZRIbChdDRVJUSUZJQ0FURV9VTlNQRUNJRklFRBAAEhEKDUNFUlRJRklDQVRFX0cQARISCg5DRVJUSUZJQ0FURV9OUhACEhUKEUNFUlRJRklDQVRFX1BHXzEzEAMSEgoOQ0VSVElGSUNBVEVfUEcQBBIRCg1DRVJUSUZJQ0FURV9SEAViBnByb3RvMw", [file_models_common_v1_common]);

/**
 * @generated from message models.movie.v1.CastMember
 */
export type CastMember = Message<"models.movie.v1.CastMember"> & {
  /**
   * @generated from field: string person_id = 1;
   */
  personId: string;

  /**
   * @generated from field: repeated string characters = 2;
   */
  characters: string[];
};

/**
 * Describes the message models.movie.v1.CastMember.
 * Use `create(CastMemberSchema)` to create a new message.
 */
export const CastMemberSchema: GenMessage<CastMember> = /*@__PURE__*/
  messageDesc(file_models_movie_v1_movie, 0);

/**
 * @generated from message models.movie.v1.RatingsSummary
 */
export type RatingsSummary = Message<"models.movie.v1.RatingsSummary"> & {
  /**
   * @generated from field: double aggregate_rating = 1;
   */
  aggregateRating: number;

  /**
   * @generated from field: int32 vote_count = 2;
   */
  voteCount: number;
};

/**
 * Describes the message models.movie.v1.RatingsSummary.
 * Use `create(RatingsSummarySchema)` to create a new message.
 */
export const RatingsSummarySchema: GenMessage<RatingsSummary> = /*@__PURE__*/
  messageDesc(file_models_movie_v1_movie, 1);

/**
 * @generated from message models.movie.v1.Movie
 */
export type Movie = Message<"models.movie.v1.Movie"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * @generated from field: repeated models.movie.v1.CastMember cast = 4;
   */
  cast: CastMember[];

  /**
   * @generated from field: models.movie.v1.Certificate certificate = 5;
   */
  certificate: Certificate;

  /**
   * @generated from field: repeated string genres = 6;
   */
  genres: string[];

  /**
   * @generated from field: models.common.v1.Image image = 7;
   */
  image?: Image;

  /**
   * @generated from field: int32 rank = 8;
   */
  rank: number;

  /**
   * @generated from field: models.movie.v1.RatingsSummary ratings_summary = 9;
   */
  ratingsSummary?: RatingsSummary;

  /**
   * @generated from field: int32 release_year = 10;
   */
  releaseYear: number;

  /**
   * @generated from field: int32 runtime = 11;
   */
  runtime: number;

  /**
   * @generated from field: string tagline = 12;
   */
  tagline: string;
};

/**
 * Describes the message models.movie.v1.Movie.
 * Use `create(MovieSchema)` to create a new message.
 */
export const MovieSchema: GenMessage<Movie> = /*@__PURE__*/
  messageDesc(file_models_movie_v1_movie, 2);

/**
 * @generated from enum models.movie.v1.Certificate
 */
export enum Certificate {
  /**
   * @generated from enum value: CERTIFICATE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: CERTIFICATE_G = 1;
   */
  G = 1,

  /**
   * @generated from enum value: CERTIFICATE_NR = 2;
   */
  NR = 2,

  /**
   * @generated from enum value: CERTIFICATE_PG_13 = 3;
   */
  PG_13 = 3,

  /**
   * @generated from enum value: CERTIFICATE_PG = 4;
   */
  PG = 4,

  /**
   * @generated from enum value: CERTIFICATE_R = 5;
   */
  R = 5,
}

/**
 * Describes the enum models.movie.v1.Certificate.
 */
export const CertificateSchema: GenEnum<Certificate> = /*@__PURE__*/
  enumDesc(file_models_movie_v1_movie, 0);

