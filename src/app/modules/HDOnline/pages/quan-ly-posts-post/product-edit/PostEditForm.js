import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import CKEditorCustom from './CKEditorCustom';
import {
  Card,
  CardHeader,
  CardHeaderToolbar,
} from '../../../../../../_metronic/_partials/controls';

// Validation schema
const PostEditSchema = Yup.object().shape({});

export function PostEditForm({ post, btnRef, savePost, ...props }) {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={post}
        validationSchema={PostEditSchema}
        onSubmit={(values) => {
          // savePost(values);
          console.log(values);
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Form className='form form-label-right'>
              <Card>
                <CardHeader title={props.title}>
                  <CardHeaderToolbar>
                    <button
                      type='button'
                      onClick={props.backToPostsList}
                      className='btn btn-light'
                    >
                      <i className='fa fa-arrow-left'></i>
                      Quay lại
                    </button>

                    <button className='btn btn-light ml-2'>
                      <i className='fa fa-redo'></i>
                      Reset
                    </button>

                    <button type='submit' className='btn btn-primary ml-2'>
                      Lưu
                    </button>
                  </CardHeaderToolbar>
                </CardHeader>
              </Card>

              {/* Content field */}
              <CKEditorCustom />
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
