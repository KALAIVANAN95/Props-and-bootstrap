import React from "react";
import Five from "./Five";
import data from './Eight'

const Nine = (props)=> {

    return(
        <>
          <div className='container my-3'>
        <div className='row'>
            <data
            imagesSrc={data[0].imagesSrc}
            title={data[0].title}
            text={data[0].text}
            btn={data[0].btn}
            />
            
                       
            

        </div>



      </div>
       
        </>
    );
}


export default Nine;