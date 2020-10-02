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
import { PostEditForm } from './PostEditForm';
import { useSubheader } from '../../../../../../_metronic/layout';
import { ModalProgressBar } from '../../../../../../_metronic/_partials/controls';

const initPost = {
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

export function PostEdit({
  history,
  match: {
    params: { id },
  },
}) {
  // Subheader
  const suhbeader = useSubheader();

  // Tabs
  const [tab, setTab] = useState('basic');
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
  }, [id, dispatch]);

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

          <button
            type='submit'
            className='btn btn-primary ml-2'
            onClick={savePostButton}
          >
            Lưu
          </button>
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        <ul className='nav nav-tabs nav-tabs-line ' role='tablist'>
          <li className='nav-item' onClick={() => setTab('basic')}>
            <a
              className={`nav-link ${tab === 'basic' && 'active'}`}
              data-toggle='tab'
              role='tab'
              aria-selected={(tab === 'basic').toString()}
            >
              Basic info
            </a>
          </li>
          {id && (
            <>
              <li className='nav-item' onClick={() => setTab('remarks')}>
                <a
                  className={`nav-link ${tab === 'remarks' && 'active'}`}
                  data-toggle='tab'
                  role='button'
                  aria-selected={(tab === 'remarks').toString()}
                >
                  Product remarks
                </a>
              </li>
              <li className='nav-item' onClick={() => setTab('specs')}>
                <a
                  className={`nav-link ${tab === 'specs' && 'active'}`}
                  data-toggle='tab'
                  role='tab'
                  aria-selected={(tab === 'specs').toString()}
                >
                  Product specifications
                </a>
              </li>
            </>
          )}
        </ul>
        <div className='mt-5'>
          {tab === 'basic' && (
            <PostEditForm
              actionsLoading={actionsLoading}
              product={postForEdit || initPost}
              btnRef={btnRef}
              savePost={savePost}
            />
          )}
        </div>
      </CardBody>
    </Card>
  );
}
