import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectArrayInput,
  PasswordInput,
} from "react-admin";

import { ROLES_OPTIONS } from "../user/RolesOptions";

export const LoginCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="access-key" source="accessKey" />
        <TextInput label="test-key" source="testKey" />
        <TextInput label="1mor" source="test" />
        <TextInput label="  tttt" multiline source="tttt" />
        <SelectArrayInput
          label=" test]fd8efue"
          source="testFd8efue"
          choices={[
            { label: "table", value: "_Table_eosbho" },
            { label: "table2", value: "tabpoeol1" },
          ]}
          optionText="label"
          optionValue="value"
        />
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
