import React from 'react';

export default function User (props) {


    return ( <div>  {props.user.map( (item, i) =>{
            return <div className={`row  UserStyle  `} style={{backgroundColor:`${props.userClicked ? 'rgba(0, 0, 0, 0.3)' : ' #FEFBF4' }`}} key ={i} >
                <div key ={item.id*0.07}>
                    <button  className={"button"} style={{
                        margin:'3px' ,
                        color:`${props.userClicked ? 'rgba(0, 0, 0, 0.3)' : '#3d89c9 '}`
                    }}onClick={() => props.Clickeduser(item)}>
                        Preview
                    </button></div>

                <div key ={item.id*0.05} className={"userheader"}>Title:{item.title.length > 10 ? `${item.title.substr(0,30)}...` : item.title }
            </div>
                <div key ={item.id*0.06} className={"userbody"}>Body :{item.body.length > 10 ? `${item.body.substr(0,30)}...` : item.body }
                </div>
            </div>
        })}</div>
    )

}