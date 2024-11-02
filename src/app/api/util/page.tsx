import React from 'react';
import { TextAnimate } from '@/ux/ui/TextAnimate';
import { fbapp, fbauth } from '@/ux/api/firebase/firebase';

const YouAintSupposedToBeHere: React.FC = () => {
    console.log(fbapp);
    console.log(fbauth);
    return (
        <>
        text
        </>
    );
};

export default YouAintSupposedToBeHere;
