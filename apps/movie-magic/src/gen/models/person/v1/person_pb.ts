// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file models/person/v1/person.proto (package models.person.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { Image } from "../../common/v1/common_pb";
import { file_models_common_v1_common } from "../../common/v1/common_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file models/person/v1/person.proto.
 */
export const file_models_person_v1_person: GenFile = /*@__PURE__*/
  fileDesc("Ch1tb2RlbHMvcGVyc29uL3YxL3BlcnNvbi5wcm90bxIQbW9kZWxzLnBlcnNvbi52MSJKCgZQZXJzb24SCgoCaWQYASABKAkSDAoEbmFtZRgCIAEoCRImCgVpbWFnZRgDIAEoCzIXLm1vZGVscy5jb21tb24udjEuSW1hZ2ViBnByb3RvMw", [file_models_common_v1_common]);

/**
 * @generated from message models.person.v1.Person
 */
export type Person = Message<"models.person.v1.Person"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: models.common.v1.Image image = 3;
   */
  image?: Image;
};

/**
 * Describes the message models.person.v1.Person.
 * Use `create(PersonSchema)` to create a new message.
 */
export const PersonSchema: GenMessage<Person> = /*@__PURE__*/
  messageDesc(file_models_person_v1_person, 0);

