import React from 'react';
import { TextAnimate } from '@/ux/ui/TextAnimate';

const YouAintSupposedToBeHere: React.FC = () => {
    return (
        <>
            <Header />
            <main className="bg-l-bg dark:bg-d-bg h-screen w-screen duration-300 flex items-center justify-center">
                <TextAnimate type='calmInUp' className="text-5xl gigalypse font-bold inline" text="You Ain't Supposed To Be Here" />
            </main>
        </>
    );
};

export default YouAintSupposedToBeHere;

import Image from 'next/image';
import { Avatar } from '§ui/Avatar';
import { Dialog, DialogWrapper } from '§lt/Dialog';
/**
 * To Be Moved
 * Just for testing purposes
 */
const Header: React.FC = () => {
    return (
        <>
        <header className="bg-slate-300 dark:bg-d-bg h-20 w-screen  sticky flex items-center top-0 p-1 opacity-0 lg:opacity-100 duration-500 max-lg:hidden">
            <a href="/" className=' flex items-center top-0 p-1  opacity-0 md:opacity-100 duration-500'>
                <Image src={"/brand/Athe.png"} width={150} height={75} alt='Gymnasium Athenaeum Stade' className='p-2 pr-3' />
                <p className='oxanium text-5xl pt-3'>/</p>
                <Image src={"/brand/SV.png"} width={75} height={75} alt='Student Council Athenaeum Stade' className='p-2' />
            </a>
            <section className='flex items-center justify-around flex-grow px-7  opacity-0 sm:opacity-100 duration-500'>
                <a href='/' className='font-xl nscience'>Startseite</a>
                <a href='/robotik' className='font-xl nscience'>Robotik</a>
                <a href='/sv' className='font-xl nscience'>Öffnungszeiten</a>
            </section>
            <a href='/profile' className='right-3 flex items-center p-2 opacity-0 md:opacity-100 duration-500'>
                <div className='text-right p-1'>
                    <p className='font-bold -my-1 text-xl'>Welcome back,</p>
                    <p className='-my-1'>Username</p>
                </div>
                <Avatar username='?' placeholder size={50} />
            </a>
        </header>
        <header className='w-screen sticky flex items-center top-0 p-1 max-md:hidden lg:hidden right-1 text-right'>
            <a href='/' className='flex items-center p-1'>
                <Image src={"/brand/Athe.png"} width={150} height={75} alt='Gymnasium Athenaeum Stade' className='p-2 pr-3' />
                <p className='oxanium text-5xl pt-3'>/</p>
                <Image src={"/brand/SV.png"} width={75} height={75} alt='Student Council Athenaeum Stade' className='p-2' />
            </a>
            <DialogWrapper trigger='Nav'>
                <Dialog
                    title='Navigation'
                >
                    <nav className='flex flex-col items-center justify-center'>
                            <a href='/' className='font-xl nscience'>Startseite</a>
                            <a href='/robotik' className='font-xl nscience'>Robotik</a>
                            <a href='/sv' className='font-xl nscience'>Öffnungszeiten</a>
                    </nav>
                </Dialog>
            </DialogWrapper>
        </header>
        <header className='w-screen sticky flex items-center top-0 p-1 sm:hidden'>
            Placeholder
        </header>
        </>
    );
}