import React from 'react'
import Link from "next/link";
import { formatAmount } from '@/lib/utils';
import Image from "next/image";

const BankCard = ({userName, account, showBalance=true}: CreditCardProps) => {
  return (
    <div className='flex flex-col'>
        <Link href="/" className='bank-card'>
            <div className='bank-card_content'>
                <div>
                    <h1 className='text-14 font-semibold text-white-500'>
                        {account.name || userName} 
                    </h1>
                    <p className="font-ibm-plex-sherif font-black text-white">
                        {formatAmount(account.currentBalance)}
                    </p>
                </div>
                <article className="flex flex-col gap-2">
                    <div className="flex justify-between">
                        <h1 className="text-12 font-semibold text-white">
                            {userName}
                        </h1>

                        <h1 className="absolute right-10 text-10 font-semibold text-white">
                        ●● / ●●
                        </h1>
                         
                         <p className="text-10 font-semibold tracking-[1.1px] text-white">
                         ●●●● ●●●● ●●●●
                            <span className='16'>
                                1234
                            </span>
                         </p>
                    </div>

                </article>
            </div>

            <div className="bank-card-icon relative w-12">
                 <Image
                    src="/icons/paypass.svg"
                    height={24}
                    width={20}
                    alt="payPass"
                    
                    className='pt-8 ml-4'
                 />
                 <Image
                    src="/icons/mastercard.svg"
                    height={32}
                    width={45}
                    alt="mastercard"


                    className=' absolute bottom-0'
                 />
            </div>
            <Image
                src="/icons/lines.svg"
                width={316}
                height={190}
                alt="lines"

                className='absolute top-0 left-0'
            />
        </Link>


        {/* copy the card nuber implementationn to be done */ }
    </div>
  )
}

export default BankCard