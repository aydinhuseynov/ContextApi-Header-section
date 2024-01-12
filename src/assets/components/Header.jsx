import React,{useContext} from 'react'
import { GlobalContext } from '../../Context/GlobalState';

 function Header() {

    const {deger , id,setDeger} = useContext(GlobalContext)
  return (
    <div className='col-md-6'>
      <div className="alert alert-primary">
        <h2 className='text-center'>{id}.Contextdem gelen data: {deger}</h2>
        <button className='btn btn-danger' onClick={()=>{setDeger('Real')}}>Chance</button>
      </div>
    </div>
  )
}
export default Header;