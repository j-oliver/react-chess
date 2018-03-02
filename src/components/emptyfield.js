import React from 'react';

export default function EmptyField(props) {
  return (
    <div className='emptyfield' onClick={() => props.select(props.name, props.position)}/>
  )
}