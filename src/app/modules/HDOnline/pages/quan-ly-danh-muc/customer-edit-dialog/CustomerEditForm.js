// Form is based on Formik
// Data validation is based on Yup
// Please, be familiar with article first:
// https://hackernoon.com/react-form-validation-with-formik-and-yup-8b76bda62e10
import React from 'react';
import { Modal } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Input, Select } from '../../../../../../_metronic/_partials/controls';

// Validation schema
const CategoryEditSchema = Yup.object().shape({
  categoryName: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Bắt buộc phải nhập tên danh mục'),
  // categoryParent: Yup.string()
  //   .min(3, 'Minimum 3 symbols')
  //   .max(50, 'Maximum 50 symbols')
  //   .required('Bắt buộc phải nhập danh mục cha'),
  slug: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols'),
});

export function CustomerEditForm({
  saveCategory,
  category,
  actionsLoading,
  onHide,
}) {
  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={category}
        validationSchema={CategoryEditSchema}
        onSubmit={(values) => {
          saveCategory(values);
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
                  {/* Category Name */}
                  <div className='col-lg-4'>
                    <Field
                      name='categoryName'
                      component={Input}
                      placeholder='Tên'
                      label='Tên'
                    />
                  </div>
                  {/* Parent Category */}
                  <div className='col-lg-4'>
                    <Select label='Chọn danh mục cha' name='categoryParent'>
                      <option value='finance'>Finance</option>
                      <option value='healthcare'>Health Care</option>
                      <option value='technology'>Technology</option>
                    </Select>
                  </div>
                  {/* Slug */}
                  <div className='col-lg-4'>
                    <Field
                      name='slug'
                      component={Input}
                      placeholder='slug'
                      label='slug'
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
