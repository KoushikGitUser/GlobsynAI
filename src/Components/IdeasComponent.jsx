import React, { useRef } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function IdeasComponent({ideasArray}) {

    const lastElementRef = useRef(null);
    const firstElementRef = useRef(null);
    

    const swipeToLastElement = ()=>{
        lastElementRef.current.scrollIntoView({behavior: "smooth"});
    }

    const swipeToFirstElement = ()=>{
        firstElementRef.current.scrollIntoView({behavior: "smooth"});
    }
  return (
    <div className='idea_compo_main'>
        <div className='idea_compo_inner_main'>
            <div className='idea_arrow'>

            </div>
            <div onClick={swipeToFirstElement} style={{cursor:"pointer"}}>
            <IoIosArrowBack size={25}  />
             </div>
            <div className='ideas_content_main'>
                {ideasArray?.map((items,index)=>{
                    return(
                        <div ref={index === ideasArray.length-1?lastElementRef:index === 0?firstElementRef:null} className='idea_content'>
                            {items?.idea}
                        </div>
                    )
                })}
              
            </div>
            <div onClick={swipeToLastElement} style={{cursor:"pointer"}}>
            <IoIosArrowForward size={25} />
                 </div>

        </div>
    </div>
  )
}
