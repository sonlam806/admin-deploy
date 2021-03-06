import React, { useEffect, useMemo } from 'react';
import { Modal } from 'react-bootstrap';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../_redux/posts-category/postCategoryActions';
import { useCustomersUIContext } from '../CustomersUIContext';
import { ModalProgressBar } from '../../../../../../_metronic/_partials/controls';

export function CustomersDeleteDialog({ show, onHide }) {
  // Customers UI Context
  const customersUIContext = useCustomersUIContext();
  const customersUIProps = useMemo(() => {
    return {
      ids: customersUIContext.ids,
      setIds: customersUIContext.setIds,
      queryParams: customersUIContext.queryParams,
    };
  }, [customersUIContext]);

  // Customers Redux state
  const dispatch = useDispatch();
  const { isLoading } = useSelector(
    (state) => ({ isLoading: state.postCategories.actionsLoading }),
    shallowEqual
  );

  // if customers weren't selected we should close modal
  useEffect(() => {
    if (!customersUIProps.ids || customersUIProps.ids.length === 0) {
      onHide();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [customersUIProps.ids]);

  // looking for loading/dispatch
  useEffect(() => {}, [isLoading, dispatch]);

  const deleteCustomers = () => {
    // server request for deleting customer by selected ids
    dispatch(actions.deleteCategories(customersUIProps.ids)).then(() => {
      // refresh list after deletion
      dispatch(actions.fetchCategories(customersUIProps.queryParams)).then(
        () => {
          // clear selections list
          customersUIProps.setIds([]);
          // closing delete modal
          onHide();
        }
      );
    });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby='example-modal-sizes-title-lg'
    >
      {/*begin::Loading*/}
      {isLoading && <ModalProgressBar />}
      {/*end::Loading*/}
      <Modal.Header closeButton>
        <Modal.Title id='example-modal-sizes-title-lg'>
          Xóa danh mục
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {!isLoading && (
          <span>Bạn có chắc chắn muốn xóa Danh mục này không ?</span>
        )}
        {isLoading && <span>Đang xóa Danh mục...</span>}
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type='button'
            onClick={onHide}
            className='btn btn-light btn-elevate'
          >
            Cancel
          </button>
          <> </>
          <button
            type='button'
            onClick={deleteCustomers}
            className='btn btn-primary btn-elevate'
          >
            Delete
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  );
}
