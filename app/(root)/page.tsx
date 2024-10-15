import React from 'react'
import HeaderBox from './../../components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox';
import RightSidebar from '@/components/RightSidebar';



const Home = () => {
    const loggedIn = {firstName:'Abhinandan', lastName:"Biswal", email:"abhinandanbiswal16rr@gmail.com"};
  return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
                <HeaderBox
                type='greeting'
                title='Welcome'
                user={loggedIn?.firstName || 'Guest'}
                subtext = "Acces or manage your account and transactions efficiently."
                />
                <TotalBalanceBox
                accounts={[]}
                totalbanks={1}
                totalCurrencyBalance={100000.00}
            />
            
            </header>
            RECENT TRANSACTIONS  
        </div>
        <RightSidebar
          user={loggedIn}
          transactions={[]}
          banks ={[{currentBalance:123.50},{currentBalance:500.50}]}
        />
        
    </section>
  )
}

export default Home