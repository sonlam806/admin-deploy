// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from 'react';
import { Modal } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Input } from '../../../../../../_metronic/_partials/controls';

// Validation schema
const CustomerEditSchema = Yup.object().shape({
  techName: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Phải nhập tên công nghệ'),
  slug: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols'),
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
                  {/* profile Image */}
                  <div className='col-lg-4'>
                    <Field
                      name='profileImage'
                      component={Input}
                      value='https://picsum.photos/50'
                      placeholder='Avatar'
                      label='Avatar'
                    />
                  </div>
                  {/* TechName */}
                  <div className='col-lg-4'>
                    <Field
                      name='techName'
                      component={Input}
                      placeholder='Tên công nghệ'
                      label='Tên công nghệ'
                    />
                  </div>
                  {/* SLUG */}
                  <div className='col-lg-4'>
                    <Field
                      name='slug'
                      component={Input}
                      placeholder='Slug'
                      label='Slug'
                    />
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
