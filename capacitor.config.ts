import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.testfirebase.devsaga',
  appName: 'testfirebase',
  webDir: 'dist',
  plugins: {
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: ['email', 'google.com']
    }
  }
};

export default config;
