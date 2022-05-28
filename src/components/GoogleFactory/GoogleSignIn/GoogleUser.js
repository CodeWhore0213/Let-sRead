
import React, { useState } from 'react';
import { GoogleSignin, statusCodes, GoogleSigninButton, User } from '@react-native-google-signin/google-signin';

const googelUser = (_googleUser) => ({
      name: _googleUser.user.name,
      email: _googleUser.user.email,
      photo_url: _googleUser.user.photo,
})

module.exports = googelUser;