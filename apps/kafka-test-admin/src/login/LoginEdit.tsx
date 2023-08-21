import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const LoginEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
