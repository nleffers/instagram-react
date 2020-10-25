import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import axios from '../../axios/axios'
import withErrorHandler from '../../hoc/withErrorHandler'
import Header from '../../components/Profile/Header/Header'
import ProfileWall from '../../components/Wall/ProfileWall/ProfileWall'
import Spinner from '../../components/UI/Spinner/Spinner'
import * as actions from '../../store/actions/index'
import classes from './Profile.module.css'

const Profile = () => {
  const [activeTab, setActiveTab] = useState('POSTS')

  const token = useSelector(state => state.auth.token)
  const isAuthUserPage = useSelector(state => state.auth.userId !== state.user.userId)
  const userId = useSelector(state => state.user.userId)
  const username = useSelector(state => state.user.username)
  const fullName = useSelector(state => state.user.fullName)
  const bio = useSelector(state => state.user.bio)
  const website = useSelector(state => state.user.website)
  const pictures = useSelector(state => state.user.pictures)
  const taggedPictures = useSelector(state => state.user.taggedPictures)
  const following = useSelector(state => state.user.following)
  const followers = useSelector(state => state.user.followers)
  const loading = useSelector(state => state.user.loading)

  const dispatch = useDispatch()
  const onUserFetch = useCallback((userId, token) => dispatch(actions.userFetch(userId, token)), [dispatch])
  const onUserPicturesFetch = useCallback((userId, token) => dispatch(actions.userPicturesFetch(userId, token)), [dispatch])

  useEffect(() => {
    onUserFetch(userId, token)
  }, [onUserFetch, userId, token])

  useEffect(() => {
    onUserPicturesFetch(userId, token)
  }, [onUserPicturesFetch, userId, token])

  const tabClickHandler = event => {
    event.preventDefault()
    setActiveTab(event.target.innerText)
  }

  let profile = (
    <div className={classes.Profile}>
      <Header
        className={classes.Header}
        username={username}
        fullName={fullName}
        bio={bio}
        website={website}
        following={following}
        followers={followers}
        postCount={pictures.length}
      />
      <ProfileWall
        className={classes.ProfileWall}
        activeTab={activeTab}
        isAuthUserPage={isAuthUserPage}
        pictures={pictures}
        taggedPictures={taggedPictures}
        tabClickHandler={tabClickHandler}
      />
    </div>
  )
  if (loading) {
    profile = <Spinner />
  }

  return profile
}

export default withErrorHandler(Profile, axios)
