import React from "react";
import avatar from '../assets/default-avatar.svg'
export function Person({ name, nickName, images }) {
  // console.log(images[0].small.url)
  // const img = images[0].small.url

  // const img = images && images[0] && images[0].small && images[0].small.url;
  const img = images?.[0]?.small?.url || avatar
  // const img = images?.[0]?.small?.url ?? avatar

  return (
    <div>
      <img src={img} alt={name} style={{ width: '80px' }} />
      <h4 >{name}</h4>
      <p>Nickname: {nickName}</p>
    </div>
  )
}
