import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AmitEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="name first" source="nameFirst" />
      </SimpleForm>
    </Edit>
  );
};
