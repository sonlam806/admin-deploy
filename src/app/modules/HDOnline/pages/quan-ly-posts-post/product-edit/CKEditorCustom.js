import React from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { useFormikContext } from 'formik';

export default function CKEditorCustom({ name }) {
  const { setFieldValue } = useFormikContext();
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data='<p>Hello from HuongDa Group</p>'
        // onInit={(editor) => {
        //   // You can store the "editor" and use when it is needed.
        //   console.log('Editor is ready to use!', editor);
        // }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setFieldValue(name, data);
        }}
        onBlur={(event, editor) => {}}
        onFocus={(event, editor) => {}}
      />
    </div>
  );
}
