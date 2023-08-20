import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LoginCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="access-key" source="accessKey" />
        <TextInput label="test-key" source="testKey" />
      </SimpleForm>
    </Create>
  );
};
