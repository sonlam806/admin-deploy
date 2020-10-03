/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { shallowEqual, useSelector } from 'react-redux';
import * as actions from '../../../_redux/posts/postsActions';
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from '../../../../../../_metronic/_partials/controls';
import { useSubheader } from '../../../../../../_metronic/layout';
import { ModalProgressBar } from '../../../../../../_metronic/_partials/controls';
import OptionsMenu from './OptionsMenu';
import * as Yup from 'yup';
import CKEditorCustom from './CKEditorCustom';
import { Form, Formik } from 'formik';

let initPost = {
  id: undefined,
  title: '',
  image: '',
  slug: '',
  status: 'private',
  categories: 'technology',
  tags: '',
  content: '',
  createdAt: new Date(),
};

// Validation schema
const PostEditSchema = Yup.object().shape({});

export function PostEdit({
  history,
  match: {
    params: { id },
  },
}) {
  // Subheader
  const suhbeader = useSubheader();

  // Tabs
  // const [tab, setTab] = useState('basic');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();
  // const layoutDispatch = useContext(LayoutContext.Dispatch);
  const { actionsLoading, postForEdit } = useSelector(
    (state) => ({
      actionsLoading: state.posts.actionsLoading,
      postForEdit: state.posts.postForEdit,
    }),
    shallowEqual
  );

  useEffect(() => {
    dispatch(actions.fetchPost(id));
    if (postForEdit) {
      initPost = { ...postForEdit };
    }
  }, [id, dispatch, postForEdit]);

  useEffect(() => {
    let _title = id ? '' : 'Thêm bài viết';
    if (postForEdit && id) {
      _title = `Chỉnh sửa bài viết`;
    }

    setTitle(_title);
    suhbeader.setTitle(_title);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postForEdit, id]);

  const savePost = (values) => {
    if (!id) {
      dispatch(actions.createPost(values)).then(() => backToPostsList());
    } else {
      dispatch(actions.updatePost(values)).then(() => backToPostsList());
    }
  };

  const btnRef = useRef();
  const savePostButton = () => {
    if (btnRef && btnRef.current) {
      btnRef.current.click();
    }
  };

  const backToPostsList = () => {
    history.push(`/huong-da-online/posts/post`);
  };

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={initPost}
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
                {actionsLoading && <ModalProgressBar />}
                <CardHeader title={title}>
                  <CardHeaderToolbar>
                    <button
                      type='button'
                      onClick={backToPostsList}
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
                <CardBody>
                  <div className='row'>
                    <div className='col-xl-10'>
                      {/* Content field */}
                      <CKEditorCustom name='content' />
                    </div>
                    <div className='col-xl-2'>
                      {/* Right toolbar */}
                      <OptionsMenu />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
}
