import { Platform } from 'react-native'
// import AsyncStorage from '@react-native-community/async-storage'
// import * as Keychain from 'react-native-keychain'
import * as SecureStore from 'expo-secure-store'

export enum PinResultStatus {
  initial = 'initial',
  success = 'success',
  failure = 'failure',
  locked = 'locked'
}

// export const hasPinCode = async (serviceName: string) => {
//   return await Keychain.getInternetCredentials(serviceName).then(res => {
//     return !!res && !!res.password
//   })
// }

// export const deletePinCode = async (serviceName: string) => {
//   return await Keychain.resetInternetCredentials(serviceName)
// }

export const resetInternalStates = async (asyncStorageKeys: string[]) => {
  // return await AsyncStorage.multiRemove(asyncStorageKeys)
  for await(let key of asyncStorageKeys) {
    await SecureStore.deleteItemAsync(key);
  }
}

export const noBiometricsConfig = Platform.select({
    android: {
        // accessControl: Keychain.ACCESS_CONTROL.APPLICATION_PASSWORD,
        accessControl: "ApplicationPassword",
    },
    ios: {}
})
