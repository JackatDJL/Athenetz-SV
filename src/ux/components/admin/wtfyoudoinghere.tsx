import React from 'react';
import { TextAnimate } from '@/ux/ui/TextAnimate';
import Header from '§comp/Header';

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
