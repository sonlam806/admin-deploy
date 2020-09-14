import React from 'react';
import { Modal } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import {
  DatePickerField,
  Input,
  Select,
} from '../../../../../../_metronic/_partials/controls';

// Fake Post Item
import postTableMock from '../../../__mocks__/postTableMock';
// Validation schema
const CustomerEditSchema = Yup.object().shape({
  postName: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Phải nhập tên bài viết'),
  slug: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Phải nhập slug'),
  language: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Phải nhập ngôn ngữ'),
});

export function CustomerEditForm({
  saveCustomer,
  customer,
  actionsLoading,
  onHide,
}) {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={customer}
        validationSchema={CustomerEditSchema}
        onSubmit={(values) => {
          saveCustomer(values);
          postTableMock.push(values);
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Modal.Body className='overlay overlay-block cursor-default'>
              {actionsLoading && (
                <div className='overlay-layer bg-transparent'>
                  <div className='spinner spinner-lg spinner-success' />
                </div>
              )}
              <Form className='form form-label-right'>
                <div className='form-group row'>
                  {/* Profile Image */}
                  <div className='col-lg-4'>
                    <Field
                      name='profileImage'
                      component={Input}
                      value='https://picsum.photos/50'
                      placeholder='Ảnh đại diện'
                      label='Ảnh đại diện'
                    />
                  </div>
                  {/* Post Name */}
                  <div className='col-lg-4'>
                    <Field
                      name='postName'
                      component={Input}
                      placeholder='Tên bài viết'
                      label='Tên bài viết'
                    />
                  </div>
                  {/* Slug */}
                  <div className='col-lg-4'>
                    <Field
                      name='slug'
                      component={Input}
                      placeholder='Slug'
                      label='Slug'
                    />
                  </div>
                </div>
                {/* Language */}
                <div className='form-group row'>
                  <div className='col-lg-4'>
                    <Field
                      name='language'
                      component={Input}
                      placeholder='Ngôn ngữ'
                      label='Ngôn ngữ'
                    />
                  </div>
                  {/* createDate */}
                  <div className='col-lg-4'>
                    <DatePickerField
                      name='createDate'
                      label='Ngày tạo bài viết'
                    />
                  </div>
                </div>
                <div className='form-group row'>
                  {/* Owner */}
                  <div className='col-lg-4'>
                    <Select name='owner' label='Người tạo'>
                      <option value='Admin'>Admin</option>
                      <option value='User'>User</option>
                    </Select>
                  </div>
                  {/* Species */}
                  <div className='col-lg-4'>
                    <Select name='species' label='Chuyên mục'>
                      <option value='Business'>Business</option>
                      <option value='Technology'>Technology</option>
                    </Select>
                  </div>
                </div>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <button
                type='button'
                onClick={onHide}
                className='btn btn-light btn-elevate'
              >
                Hủy
              </button>
              <> </>
              <button
                type='submit'
                onClick={() => handleSubmit()}
                className='btn btn-primary btn-elevate'
              >
                Lưu
              </button>
            </Modal.Footer>
          </>
        )}
      </Formik>
    </>
  );
}
