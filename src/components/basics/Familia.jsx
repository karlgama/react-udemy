import React from 'react'

export default props => {
    return(
        <div>
            {
                // React.Children.map(props.children, (el)=>{
                //     return React.cloneElement(el, props)
                // })
                props.children.map((child, i)=>{
                    return React.cloneElement(child,{...props, key: i});
                })
            }
        </div>
    )
}