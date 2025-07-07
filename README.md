For Android 
Add sha certificate by usig thsi comand keytool -list -v -keystore ../../rishtamereliyerelease.keystore -alias rishtamereliyerelease -storepass yourpassword@11 -keypass yourkeypass@11
Add sha1 to firebase app location 
add gogel service json file to your andoird /app
add fireabse confign defautl one 
add two depenceies in variabel .gradle 
    rgcfaIncludeGoogle = true
    androidxCredentialsVersion = '1.3.0'


For ios 
 remove old podlock fiel and fireabse authntication to pod file 
 sync

target 'App' do
  capacitor_pods
  pod 'CapacitorFirebaseAuthentication/Google', :path => '../../node_modules/@capacitor-firebase/authentication'
  # Add your Pods here
end  add capactiro core to pod and then sync 

Add fireabse.core in appdeleagte

   FirebaseApp.configure()

