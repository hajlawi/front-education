// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlAuth :'http://localhost:8093/auth/signin',
  urlRegistration: 'http://localhost:8093/auth/signup',
  urlFormation:'http://localhost:8099/api/formation',
  urlEnseignant:'http://localhost:8099/api/enseignant',
  urlFile:'http://localhost:8099/api/file',
  urlDoc:'http://localhost:8099/api/document',
  urlMatiere:'http://localhost:8099/api/matiere',
  urlMeeting:'http://localhost:8093/api/meetings',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
