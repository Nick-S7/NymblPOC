import React from 'react';
import TableProducts from '../../components/Tables/TableProducts';
import DefaultLayout from '../../layout/DefaultLayout';

const Products: React.FC = () => {
  return (
    <DefaultLayout>
      <h4 className="text-xl font-semibold text-black dark:text-white">
        Products
      </h4>
      <div className="flex flex-col gap-10">
        <TableProducts/>
      </div>
    </DefaultLayout>
  );
};

export default Products;
