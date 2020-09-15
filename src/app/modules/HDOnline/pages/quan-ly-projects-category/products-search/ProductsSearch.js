import React, { useMemo } from 'react';
import { Formik } from 'formik';
import { isEqual } from 'lodash';
import { useProductsUIContext } from '../ProductsUIContext';

const prepareFilter = (queryParams, values) => {
  const { status, condition, searchText } = values;
  const newQueryParams = { ...queryParams };
  const filter = {};
  // Filter by status
  filter.status = status !== '' ? +status : undefined;
  // Filter by condition
  filter.condition = condition !== '' ? +condition : undefined;
  // Filter by all fields
  filter.postName = searchText;
  if (searchText) {
    // filter.manufacture = searchText;
    filter.postName = searchText;
  }
  newQueryParams.filter = filter;
  return newQueryParams;
};

export function ProductsSearch({ listLoading }) {
  // Products UI Context
  const productsUIContext = useProductsUIContext();
  const productsUIProps = useMemo(() => {
    return {
      setQueryParams: productsUIContext.setQueryParams,
      queryParams: productsUIContext.queryParams,
    };
  }, [productsUIContext]);

  const applyFilter = (values) => {
    const newQueryParams = prepareFilter(productsUIProps.queryParams, values);
    if (!isEqual(newQueryParams, productsUIProps.queryParams)) {
      newQueryParams.pageNumber = 1;
      productsUIProps.setQueryParams(newQueryParams);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          status: '', // values => All=""/Selling=0/Sold=1
          condition: '', // values => All=""/New=0/Used=1
          searchText: '',
        }}
        onSubmit={(values) => {
          applyFilter(values);
        }}
      >
        {({
          values,
          handleSubmit,
          handleBlur,
          handleChange,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit} className='form form-label-right'>
            <div className='form-group row'>
              <div className='col-lg-12'>
                <input
                  type='text'
                  className='form-control'
                  name='searchText'
                  placeholder='Tìm kiếm'
                  onBlur={handleBlur}
                  value={values.searchText}
                  onChange={(e) => {
                    setFieldValue('searchText', e.target.value);
                    handleSubmit();
                  }}
                />
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
}
