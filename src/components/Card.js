import React from 'react';

const Card = ({name, email, id}) => {
    
    return (
        <div className='tc bg-light-green dib br3 pa2 ma2 grow pw2 shadow-5 '>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
        <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
         </div>
    );
}

export default Card;








// br3-- border , pa3-- padding, ma2--margin, grow--animation