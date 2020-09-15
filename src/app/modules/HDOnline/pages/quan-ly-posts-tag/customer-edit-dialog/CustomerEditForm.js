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
  firstName: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Phải nhập tên tag'),
  userName: Yup.string()
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
                  {/* TAG */}
                  <div className='col-lg-4'>
                    <Field
                      name='firstName'
                      component={Input}
                      placeholder='Tên tags'
                      label='Tên tags'
                    />
                  </div>
                  {/* SLUG */}
                  <div className='col-lg-4'>
                    <Field
                      name='userName'
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
                Cancel
              </button>
              <> </>
              <button
                type='submit'
                onClick={() => handleSubmit()}
                className='btn btn-primary btn-elevate'
              >
                Save
              </button>
            </Modal.Footer>
          </>
        )}
      </Formik>
    </>
  );
}
