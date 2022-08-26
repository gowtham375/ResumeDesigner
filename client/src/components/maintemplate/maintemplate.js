import React from 'react';
import './maintemplate.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';
import { Temp1 } from '../template/template1';
import { Temp2 } from '../template2/template2';
import { Temp3 } from '../template3/template3';

export function Mtemplate(){
    return(
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className=''>
                        <div className='d-flex flex-row'>
                            <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>                               
                                <Temp1 />
                            </div>
                            <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                                <Temp2/>
                            </div>
                        </div>
                        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                           <Temp3/>
                        </div>

                    </div>

                </div>

            </div>
        
        </>
    );
}