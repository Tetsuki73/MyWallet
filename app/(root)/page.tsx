import React from 'react'
import HeaderBox from './../../components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';



const Home = () => {
    const loggedIn = {FirstName:'Abhinandan'};
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                type='greeting'
                title='Welcome'
                user={loggedIn?.FirstName || 'Guest'}
                subtext = "Acces or manage your account and transactions efficiently."
                />
            </header>
            <TotalBalanceBox
                accounts={[]}
                totalbanks={1}
                totalCurrencyBalance={100000.00}
            />
        </div>
    </section>
  )
}

export default Home