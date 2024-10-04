import React from 'react';
import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

// Define the props interface
interface TotalBalanceBoxProps {
  accounts: string[]; // Adjust this according to the actual structure of `accounts`
  totalbanks: number;
  totalCurrencyBalance: number;
}

const TotalBalanceBox = ({ accounts = [], totalbanks, totalCurrencyBalance }: TotalBalanceBoxProps) => {
  return (
    <section className='total-balance'>
      <div className='total-balance-chart'>
        {/* Doughnut Chart */}
        <DoughnutChart accounts={accounts} />
      </div>
      <div className='flex flex-col gap-6 '>
        <h2 className='header-2'>
          Bank Accounts: {totalbanks}
        </h2>
        <div className='flex flex-col gap-6'>
          <p className='total-balance-label'>Total Currency Balance</p>
          <div className='total-balance-amount flex-center gap-2'>
            <AnimatedCounter amount={totalCurrencyBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
