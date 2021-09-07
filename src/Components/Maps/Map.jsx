import React from 'react'
import  GoogleMapReact   from 'google-map-react'

export const Map = () => {
  
        const coordinates = {lat:0,lng:0}
        return (
            <div className="container-fluid" style={{
                height:"85vh",
                width:"100%"
            }}>
                <GoogleMapReact 
                    bootstrapURLKeys={{key:'AIzaSyBopaS4W8InSRKOiSnoEQ_JxV71IVgs2Gw'}}
                    google={window.google}
                    defaultCenter={coordinates}
                    center={coordinates}
                    defaultZoom={14}
                    
                    margin={[50,50,50,50]}
                    options={''}
                    onChange={''}
                    onChildClick={''}
                >
    
                </GoogleMapReact>
            </div>
        )
    
}
