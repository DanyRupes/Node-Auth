import React from 'react'
import Auth from './Auth'

const auth = new Auth();

const headers = async () => ({
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization:await `Bearer ${auth.getAccessToken()}`
  });

  const removeheaders = async () => auth.logout()
  export { headers, removeheaders}