import { Button } from 'bootstrap'
import React from 'react'

export default function LandingPage() {
  return ( 
    <div>
        <div className='row'>
            <div className='col'>MBA</div>
            <div className='col'><input type='text' className='form-control' placeholder='Search Movie'/></div>
            <div className='col'>
                <Button className='btn btn-danger'>Login</Button>
            </div>
        </div>
    </div>
  ) 
}
