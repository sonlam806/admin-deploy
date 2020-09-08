import React, { Suspense } from 'react';
import { Redirect, Switch } from 'react-router-dom';
import { CustomersPage } from './customers/CustomersPage';
import { ProductsPage } from './products/ProductsPage';
import { ProductEdit } from './products/product-edit/ProductEdit';
import { LayoutSplashScreen, ContentRoute } from '../../../../_metronic/layout';
import { QuanLyTagPage } from './quan-ly-tag/QuanLyTagPage';
import { QuanLyDanhMucPage } from './quan-ly-danh-muc/QuanLyDanhMucPage';

export default function huongdaOnlinePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {' '}
        {
          /* Redirect from eCommerce root URL to /customers */
          <Redirect
            exact={true}
            from='/huong-da-online'
            to='/huong-da-online/bai-viet'
          />
        }{' '}
        <ContentRoute
          path='/huong-da-online/customers'
          component={CustomersPage}
        />{' '}
        <ContentRoute
          path='/huong-da-online/bai-viet/quan-ly-tag'
          component={QuanLyTagPage}
        />{' '}
        <ContentRoute
          path='/huong-da-online/bai-viet/quan-ly-danh-muc'
          component={QuanLyDanhMucPage}
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
