import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const LoginCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="access-key" source="accessKey" />
        <TextInput label="test-key" source="testKey" />
        <TextInput label="1mor" source="test" />
        <TextInput label="  tttt" source="tttt" />
        <TextInput label="Username" source="username" />
        <PasswordInput label="Password" source="password" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
      </SimpleForm>
    </Create>
  );
};
