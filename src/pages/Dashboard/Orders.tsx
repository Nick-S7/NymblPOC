import React from 'react';
import TableThree from '../../components/Tables/TableThree';
import DefaultLayout from '../../layout/DefaultLayout';

const Orders: React.FC = () => {
  return (
    <DefaultLayout>
      <h4 className="text-xl font-semibold text-black dark:text-white">
        Orders
      </h4>
      <div className="flex flex-col gap-10">
        <TableThree/>
      </div>
    </DefaultLayout>
  );
};

export default Orders;
