import React from 'react'
function Card(props) {
  let locator = 'location-icon.png'

  return (
    <div className='card'>
        <img src={ `../images/${props.image}`}  className='locator' alt="" />
        <div className="cardcontent">
            <section>
              <div className="card--upper">
                <img src={`../images/${locator}`} className='locator' alt="" />
                <p className='location'>{props.location}, {props.country} &nbsp;</p>
                <p className='map'>Click here to view on Google  Maps</p>
              </div>
                <link className='view_map' rel="stylesheet" href="" />
            </section>
            <h1 className='placename'>{props.title}</h1>
            <h4 className='dates'>{props.startDate}- {props.endDate}</h4>
            <p className='description'>{props.description}</p>
        </div>        
    </div>
  )
}

export default Card