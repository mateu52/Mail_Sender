
import React from 'react';
import { useParams } from 'react-router-dom';

const SubsDetailInfo = ( {user} ) => {
    const { id } = useParams();
    const { name, email } = user.find((sub) => sub.id === id )
    return(
        <div>
        {console.log(user)}
            <h3>name:{name}</h3>
            <h4>{email}</h4>
        </div>
    )
}
export default SubsDetailInfo;