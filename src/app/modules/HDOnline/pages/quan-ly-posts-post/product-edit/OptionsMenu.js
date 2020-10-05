import React from 'react';
import { FormGroup, FormControlLabel, Checkbox } from '@material-ui/core';
// Context
import { AccordionContext, useAccordion } from './AccordionMenuContext';
import { useFormikContext } from 'formik';
import Chips from '../../../../../../_metronic/_partials/controls/forms/Chips';
import { Input } from '../../../../../../_metronic/_partials/controls';

const AccordionHD = ({ children }) => {
  return <div className='accordion  accordion-toggle-arrow'> {children}</div>;
};

const AccordionChild = ({ title, children, index }) => {
  const { openChild, setCurrentOpenChild } = React.useContext(AccordionContext);

  const handleActiveChild = (index) => {
    if (index === openChild) return setCurrentOpenChild(null);
    setCurrentOpenChild(index);
  };
  return (
    <div className='card'>
      <div className='card-header' id='headingOne4'>
        <div
          className={
            openChild === index ? 'card-title' : 'card-title collapsed'
          }
          // data-toggle='collapse'
          // data-target='#collapseOne4'
          onClick={() => handleActiveChild(index)}
        >
          <i className='flaticon2-layers-1'></i> {title}
        </div>
      </div>
      <div
        // id='collapseOne4'
        className={openChild === index ? 'collapse show' : 'collapse'}
        // data-parent='#accordionExample4'
      >
        <div className='card-body'>{children}</div>
      </div>
    </div>
  );
};
// TODO: Change children to use Component
export default function OptionsMenu() {
  const openChild = useAccordion();
  const {
    setFieldValue,
    values,
    getFieldProps,
    touched,
    errors,
  } = useFormikContext();
  return (
    <AccordionContext.Provider value={openChild}>
      <AccordionHD>
        {/* Post title */}
        <AccordionChild title={'Tiêu đề'} index={0}>
          <Input
            field={{ ...getFieldProps('title') }}
            form={{
              touched,
              errors,
            }}
            placeholder='Nhập tiêu đề bài viết'
          />
        </AccordionChild>
        {/* Post image */}
        <AccordionChild title={'Ảnh đại diện'} index={1}>
          <input
            type='file'
            name='image'
            placeholder='upload image'
            {...getFieldProps('image')}
          />
        </AccordionChild>
        {/* Post slug */}
        <AccordionChild title={'Slug'} index={2}>
          <Input
            field={{ ...getFieldProps('slug') }}
            form={{
              touched,
              errors,
            }}
            placeholder='Nhập slug'
          />
        </AccordionChild>
        {/* Post status */}
        <AccordionChild title={'Trạng thái'} index={3}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.status === 'public'}
                  onChange={() => setFieldValue('status', 'public')}
                  color='primary'
                />
              }
              label='Công khai'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.status === 'private'}
                  onChange={() => setFieldValue('status', 'private')}
                  color='primary'
                />
              }
              label='Không công khai'
            />
          </FormGroup>
        </AccordionChild>
        {/* Post categories */}
        <AccordionChild title={'Chuyên mục'} index={4}>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.categories === 'technology'}
                  onChange={() => setFieldValue('categories', 'technology')}
                  color='primary'
                />
              }
              label='Technology'
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={values.categories === 'design'}
                  onChange={() => setFieldValue('categories', 'design')}
                  color='primary'
                />
              }
              label='Design'
            />
          </FormGroup>
        </AccordionChild>
        {/* Post tags */}
        <AccordionChild title={'Tags'} index={5}>
          <Chips
            placeholder='Add tags ...'
            name='tags'
            max={5}
            maxlength={20}
          />
        </AccordionChild>
      </AccordionHD>
    </AccordionContext.Provider>
  );
}
