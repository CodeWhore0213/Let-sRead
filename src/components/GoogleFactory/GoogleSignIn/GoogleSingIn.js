
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';
const googelUser = require('./GoogleUser.js');

 class GoogleSignInFactory {
    constructor() {}
     #clientID = '961003373727-4ffdb1r76fl1asqn9d8uv7aiijglpvt5.apps.googleusercontent.com';
    static signInViaGoogle = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            GoogleSignin.configure({
              iosClientId: '961003373727-4ffdb1r76fl1asqn9d8uv7aiijglpvt5.apps.googleusercontent.com',
            });
            const userInfo = await GoogleSignin.signIn();
            googelUser(userInfo);
            console.log(googelUser);
          } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              // user cancelled the log
            } else if (error.code === statusCodes.IN_PROGRESS) {
              // operation (e.g. sign in) is in progress already
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              // play services not available or outdated
            } else {
              console.log(error);
              console.log('This is it');
            }
          }
    }


    static  signOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
        } catch (error) {
          console.error(error);
        }
      };

}

module.exports = GoogleSignInFactory; 