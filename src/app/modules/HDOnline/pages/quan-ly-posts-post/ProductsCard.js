import React, { useMemo } from 'react';
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
} from '../../../../../_metronic/_partials/controls';
import { ProductsTable } from './products-table/ProductsTable';
import { ProductsGrouping } from './products-grouping/ProductsGrouping';
import { useProductsUIContext } from './ProductsUIContext';
import { ProductsSearch } from './products-search/ProductsSearch';

export function ProductsCard() {
  const productsUIContext = useProductsUIContext();
  const productsUIProps = useMemo(() => {
    return {
      ids: productsUIContext.ids,
      queryParams: productsUIContext.queryParams,
      setQueryParams: productsUIContext.setQueryParams,
      newPostButtonClick: productsUIContext.newPostButtonClick,
      openDeleteProductsDialog: productsUIContext.openDeleteProductsDialog,
      openEditProductPage: productsUIContext.openEditProductPage,
      openUpdateProductsStatusDialog:
        productsUIContext.openUpdateProductsStatusDialog,
      openFetchProductsDialog: productsUIContext.openFetchProductsDialog,
    };
  }, [productsUIContext]);
  return (
    <Card>
      <CardHeader title='Danh sách bài viết'>
        <CardHeaderToolbar>
          <button
            type='button'
            className='btn btn-primary'
            onClick={productsUIProps.newPostButtonClick}
          >
            Thêm bài viết
          </button>
        </CardHeaderToolbar>
        <ProductsSearch />
      </CardHeader>
      <CardBody>
        {/* <ProductsFilter /> */}
        {productsUIProps.ids.length > 0 && (
          <>
            <ProductsGrouping />
          </>
        )}
        <ProductsTable />
      </CardBody>
    </Card>
  );
}
