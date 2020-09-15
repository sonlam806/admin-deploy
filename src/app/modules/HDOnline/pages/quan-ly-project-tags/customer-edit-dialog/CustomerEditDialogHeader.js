import React, { useState, useEffect } from 'react';
import { shallowEqual, useSelector } from 'react-redux';
import { Modal } from 'react-bootstrap';
import { ModalProgressBar } from '../../../../../../_metronic/_partials/controls';

export function CustomerEditDialogHeader({ id }) {
  // Customers Redux state
  const { tagForEdit, actionsLoading } = useSelector(
    (state) => ({
      tagForEdit: state.tags.tagForEdit,
      actionsLoading: state.tags.actionsLoading,
    }),
    shallowEqual
  );

  const [title, setTitle] = useState('');
  // Title couting
  useEffect(() => {
    let _title = id ? '' : 'Thêm tag mới';
    if (tagForEdit && id) {
      _title = `Chỉnh sửa '${tagForEdit.tagName} ${tagForEdit.slug}'`;
    }

    setTitle(_title);
    // eslint-disable-next-line
  }, [tagForEdit, actionsLoading]);

  return (
    <>
      {actionsLoading && <ModalProgressBar />}
      <Modal.Header closeButton>
        <Modal.Title id='example-modal-sizes-title-lg'>{title}</Modal.Title>
      </Modal.Header>
    </>
  );
}
