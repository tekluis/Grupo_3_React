import React from 'react';
import LastMovieInDb from './LastProduct';
import LastUser from './LastUser';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <LastMovieInDb />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <LastUser />

        </div>
    )
}

export default ContentRowCenter;