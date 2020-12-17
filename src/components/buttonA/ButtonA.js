import React from 'react'
import {Link} from 'react-router-dom'
import './ButtonA.css'

 const ButtonA = ({content,path,callback,clase,icon})=> 
    {
        {console.log('button content :'+content)}
        {console.log('button path :'+path)}
    return (
        <div id="ButtonA">
            <Link to={path}>
                {content.startsWith('http')|| content.startsWith('data')?(
                    <img src={content} alt="" className={clase}/> ):(  
                                
                    <button className={clase} id='Button' onclick={callback}>
                    <span className={icon}/>  {content}
                    </button>
                )}
                </Link>  
            </div>
            )       
    }
export default ButtonA