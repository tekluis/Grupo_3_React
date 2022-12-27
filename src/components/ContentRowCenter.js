import React from 'react';
import LastProduct from './LastProduct';
import LastUser from './LastUser';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastProduct />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <LastUser />

        </div>
    )
}

export default ContentRowCenter;