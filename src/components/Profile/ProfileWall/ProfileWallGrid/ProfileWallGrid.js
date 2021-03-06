import React from 'react'
import { NavLink } from 'react-router-dom';

import classes from './ProfileWallGrid.module.css'

const profileWallGrid = props => {
  const pictureRow = []
  const gridRowsArray = []

  props.pictures.forEach(pic => {
    pictureRow.push(pic)
    if (pictureRow.length === 3) {
      gridRowsArray.push(
        <div
          className={classes.ProfileWallGridRow}
          key={`${pic.id}-row`}
        >
          {pictureRow.map(pic => (
            <div
              className={classes.Thumbnail}
              key={pic.id}
            >
              <NavLink
                to={{
                  pathname: "/picture",
                  state: {
                    pictureId: pic.id,
                    pictureType: 'wide'
                  }
                }}
              >
                <img src={pic.url} alt="Thumbnail" />
              </NavLink>            </div>
          ))}
        </div>
      )
      pictureRow.splice(0, 3)
    }
  })

  if (pictureRow.length > 0) {
    gridRowsArray.push(
      <div
        className={classes.ProfileWallGridRow}
        key={`${pictureRow[0].id}-row`}
      >
        {pictureRow.map(pic => (
          <div
            className={classes.Thumbnail}
            key={pic.id}
          >
            <NavLink
              to={{
                pathname: "/picture",
                state: {
                  pictureId: pic.id,
                  pictureType: 'wide'
                }
              }}
            >
              <img src={pic.url} alt="Thumbnail" />
            </NavLink>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={classes.ProfileWallGrid} >
      {gridRowsArray}
    </div>
  )
}

export default profileWallGrid
