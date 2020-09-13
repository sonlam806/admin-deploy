import React from 'react';
import { Route } from 'react-router-dom';
import { ProductsLoadingDialog } from './products-loading-dialog/ProductsLoadingDialog';
import { ProductDeleteDialog } from './product-delete-dialog/ProductDeleteDialog';
import { ProductsDeleteDialog } from './products-delete-dialog/ProductsDeleteDialog';
import { ProductsFetchDialog } from './products-fetch-dialog/ProductsFetchDialog';
import { ProductsUpdateStatusDialog } from './products-update-status-dialog/ProductsUpdateStatusDialog';
import { PostsCard } from './PostsCard';
import { ProductsUIProvider } from './ProductsUIContext';

export function PostsPage({ history }) {
  const productsUIEvents = {
    newProductButtonClick: () => {
      history.push('/huong-da-online/posts/post/new');
    },
    openEditProductPage: (id) => {
      history.push(`/huong-da-online/posts/post/${id}/edit`);
    },
    openDeleteProductDialog: (id) => {
      history.push(`/huong-da-online/posts/post/${id}/delete`);
    },
    openDeleteProductsDialog: () => {
      history.push(`/huong-da-online/posts/post/deleteProducts`);
    },
    openFetchProductsDialog: () => {
      history.push(`/huong-da-online/posts/post/fetch`);
    },
    openUpdateProductsStatusDialog: () => {
      history.push('/huong-da-online/posts/post/updateStatus');
    },
  };

  return (
    <ProductsUIProvider productsUIEvents={productsUIEvents}>
      <ProductsLoadingDialog />
      <Route path='/huong-da-online/posts/post/deleteProducts'>
        {({ history, match }) => (
          <ProductsDeleteDialog
            show={match != null}
            onHide={() => {
              history.push('/huong-da-online/posts/post');
            }}
          />
        )}
      </Route>
      <Route path='/huong-da-online/posts/post/:id/delete'>
        {({ history, match }) => (
          <ProductDeleteDialog
            show={match != null}
            id={match && match.params.id}
            onHide={() => {
              history.push('/huong-da-online/posts/post');
            }}
          />
        )}
      </Route>
      <Route path='/huong-da-online/posts/post/fetch'>
        {({ history, match }) => (
          <ProductsFetchDialog
            show={match != null}
            onHide={() => {
              history.push('/huong-da-online/posts/post');
            }}
          />
        )}
      </Route>
      <Route path='/huong-da-online/posts/post/updateStatus'>
        {({ history, match }) => (
          <ProductsUpdateStatusDialog
            show={match != null}
            onHide={() => {
              history.push('/huong-da-online/posts/post');
            }}
          />
        )}
      </Route>
      <PostsCard />
    </ProductsUIProvider>
  );
}
