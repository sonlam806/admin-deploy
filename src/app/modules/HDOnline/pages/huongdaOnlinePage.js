import React, { Suspense } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { CustomersPage } from './customers/CustomersPage';
import { ProductsPage } from './products/ProductsPage';
import { ProductEdit } from './products/product-edit/ProductEdit';
import { LayoutSplashScreen, ContentRoute } from '../../../../_metronic/layout';
import { PostsPage } from './posts/PostsPage';
import { QuanLyDanhMucPage } from './quan-ly-danh-muc/QuanLyDanhMucPage';
import { QuanLyTagPage } from './quan-ly-tag/QuanLyTagPage';
import { TechnologiesPage } from './quan-ly-cong-nghe/TechnologiesPage';

export default function huongdaOnlinePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {' '}
        {
          /* Redirect from eCommerce root URL to /customers */
          <Redirect
            exact={true}
            from='/huong-da-online/'
            to='/huong-da-online/posts/post'
          />
        }{' '}
        <ContentRoute
          path='/huong-da-online/customers'
          component={CustomersPage}
        />{' '}
        <ContentRoute
          path='/huong-da-online/posts/post'
          component={PostsPage}
        />{' '}
        <ContentRoute
          path='/huong-da-online/posts/tags'
          component={QuanLyTagPage}
        />{' '}
        <ContentRoute
          path='/huong-da-online/posts/category'
          component={QuanLyDanhMucPage}
        />{' '}
        {/* Projects Page */}
        <ContentRoute
          path='/huong-da-online/projects/technology'
          component={TechnologiesPage}
        />{' '}
        <ContentRoute
          path='/huong-da-online/products/new'
          component={ProductEdit}
        />{' '}
        <ContentRoute
          path='/huong-da-online/products/:id/edit'
          component={ProductEdit}
        />{' '}
        <ContentRoute
          path='/huong-da-online/products'
          component={ProductsPage}
        />{' '}
      </Switch>{' '}
    </Suspense>
  );
}
