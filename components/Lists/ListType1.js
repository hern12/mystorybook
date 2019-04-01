import React from 'react'


function ListType1(props) {
    return(
        <div style={{padding: 20, display: 'flex', background: 'white', borderRadius: '5px'}}>
            <div style={{display: 'flex', flex: "auto", alignItems: 'center'}}>
                <div className="image" style={{marginRight: 20}}>
                    <img src='/images/1.svg' width='40' />
                </div>
                <div 
                  className="description" 
                  style={{display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', fontSize: 16}}>
                    <div className="name">
                        {props.name}
                    </div>
                    <div
                      style={{color: 'hsl(210, 0%, 50%)'}}
                      className="detail">
                        {props.description}
                    </div>
                </div>
            </div>
            <div style={{alignSelf: 'center', fontSize: 18}}>
                {props.price}
            </div>
        </div>
    )
}

export default ListType1