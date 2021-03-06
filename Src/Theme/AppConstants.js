export const Constants = {
  dummyText:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it ",
};

// base URL for application
const baseURL = {
  local: "http://13.234.31.22:3000",
  staging: "http://13.234.31.22:3000",
  production: "http://13.234.31.22:3000",
};

export const APP_BASE_URL = baseURL.local;

export const appMessages = {
  offline: "Your internet connection appears to be offline. Please try again.",
  // 401 message
  messageStatus401: "The user is not authorized to make the request.",
  messageStatus500: "Something went wrong.",
  resetLinkExpired: "Your password reset link has expired",
  clickBelow: "Click below to generate a new one.",
  wrongPage: "Sorry, we couldn't' find this page",
  tryAgain: "Try again searching or go to",
};

export const BREEDS = [
  { label: "Affenpinscher", value: "Affenpinscher" },
  { label: "Afghan", value: "Afghan" },
  { label: "Airedale", value: "Airedale" },
  { label: "Akita", value: "Akita" },
  { label: "Alaskan", value: "Alaskan" },
  { label: "American", value: "American" },
  { label: "Anatolian", value: "Anatolian" },
  { label: "Andalusian", value: "Andalusian" },
  { label: "Australian", value: "Australian" },
  { label: "Azawakh", value: "Azawakh" },
  { label: "Barbet", value: "Barbet" },
  { label: "Basenji", value: "Basenji" },
  { label: "Basset", value: "Basset" },
  { label: "Bavarian", value: "Bavarian" },
  { label: "Beagle", value: "Beagle" },
  { label: "Bearded", value: "Bearded" },
  { label: "Beauceron", value: "Beauceron" },
  { label: "Bedlington", value: "Bedlington" },
  { label: "Belgian", value: "Belgian" },
  { label: "Bergamasco", value: "Bergamasco" },
  { label: "Berger", value: "Berger" },
  { label: "Bernese", value: "Bernese" },
  { label: "Bichon", value: "Bichon" },
  { label: "Black", value: "Black" },
  { label: "Bloodhound", value: "Bloodhound" },
  { label: "Bluetick", value: "Bluetick" },
  { label: "Boerboel", value: "Boerboel" },
  { label: "Bohemian", value: "Bohemian" },
  { label: "Bolognese", value: "Bolognese" },
  { label: "Border", value: "Border" },
  { label: "Borzoi", value: "Borzoi" },
  { label: "Boston", value: "Boston" },
  { label: "Boxer", value: "Boxer" },
  { label: "Bracco", value: "Bracco" },
  { label: "Briard", value: "Briard" },
  { label: "Brittany", value: "Brittany" },
  { label: "Broholmer", value: "Broholmer" },
  { label: "Brussels", value: "Brussels" },
  { label: "Bull", value: "Bull" },
  { label: "Bullmastiff", value: "Bullmastiff" },
  { label: "Cairn", value: "Cairn" },
  { label: "Canaan", value: "Canaan" },
  { label: "Canadian", value: "Canadian" },
  { label: "Cane", value: "Cane" },
  { label: "Cardigan", value: "Cardigan" },
  { label: "Carolina", value: "Carolina" },
  { label: "Catahoula", value: "Catahoula" },
  { label: "Caucasian", value: "Caucasian" },
  { label: "Cavalier", value: "Cavalier" },
  { label: "Central", value: "Central" },
  { label: "Cesky", value: "Cesky" },
  { label: "Chesapeake", value: "Chesapeake" },
  { label: "Chihuahua", value: "Chihuahua" },
  { label: "Chinese", value: "Chinese" },
  { label: "Chinook", value: "Chinook" },
  { label: "Chow", value: "Chow" },
  { label: "Cirneco", value: "Cirneco" },
  { label: "Clumber", value: "Clumber" },
  { label: "Coton", value: "Coton" },
  { label: "Cotonese", value: "Cotonese" },
  { label: "Curly", value: "Curly" },
  { label: "Dachshund", value: "Dachshund" },
  { label: "Dalmatian", value: "Dalmatian" },
  { label: "Dandie", value: "Dandie" },
  { label: "Danish-SwedishFarmdog", value: "Danish-SwedishFarmdog" },
  { label: "Deutscher", value: "Deutscher" },
  { label: "Dingo", value: "Dingo" },
  { label: "Doberman", value: "Doberman" },
  { label: "Dogo", value: "Dogo" },
  { label: "Dogue", value: "Dogue" },
  { label: "Drentsche", value: "Drentsche" },
  { label: "Drever", value: "Drever" },
  { label: "Dutch", value: "Dutch" },
  { label: "English", value: "English" },
  { label: "Eurasier", value: "Eurasier" },
  { label: "Finnish", value: "Finnish" },
  { label: "French", value: "French" },
  { label: "German", value: "German" },
  { label: "Giant", value: "Giant" },
  { label: "Golden", value: "Golden" },
  { label: "Grand", value: "Grand" },
  { label: "Great", value: "Great" },
  { label: "Greenland", value: "Greenland" },
  { label: "Greyhound", value: "Greyhound" },
  { label: "Harrier", value: "Harrier" },
  { label: "Havanese", value: "Havanese" },
  { label: "Hokkaido", value: "Hokkaido" },
  { label: "Ibizan", value: "Ibizan" },
  { label: "Irish", value: "Irish" },
  { label: "Italian", value: "Italian" },
  { label: "Jack", value: "Jack" },
  { label: "Jamthund", value: "Jamthund" },
  { label: "Japanese", value: "Japanese" },
  { label: "Keeshond", value: "Keeshond" },
  { label: "Kerry", value: "Kerry" },
  { label: "Komondor", value: "Komondor" },
  { label: "Labrador", value: "Labrador" },
  { label: "Lagotto", value: "Lagotto" },
  { label: "Lakeland", value: "Lakeland" },
  { label: "Lancashire", value: "Lancashire" },
  { label: "Lhasa", value: "Lhasa" },
  { label: "Lowchen", value: "Lowchen" },
  { label: "Maltese", value: "Maltese" },
  { label: "Miniature", value: "Miniature" },
  { label: "Neapolitan", value: "Neapolitan" },
  { label: "Newfoundland", value: "Newfoundland" },
  { label: "Norfolk", value: "Norfolk" },
  { label: "Norwefian", value: "Norwefian" },
  { label: "Norwegian", value: "Norwegian" },
  { label: "Norwich", value: "Norwich" },
  { label: "Nova", value: "Nova" },
  { label: "Old", value: "Old" },
  { label: "Otterhound", value: "Otterhound" },
  { label: "Otter", value: "Otter" },
  { label: "Papillon", value: "Papillon" },
  { label: "Parson", value: "Parson" },
  { label: "Parson Russell Terrier", value: "Parson Russell Terrier" },
  { label: "Patagonian", value: "Patagonian" },
  { label: "Patterdale", value: "Patterdale" },
  { label: "Pekingese", value: "Pekingese" },
  { label: "Pembroke", value: "Pembroke" },
  { label: "Petit", value: "Petit" },
  { label: "Pharaoh", value: "Pharaoh" },
  { label: "Pitbull", value: "Pitbull" },
  { label: "Plott", value: "Plott" },
  { label: "Pointer", value: "Pointer" },
  { label: "Polish", value: "Polish" },
  { label: "Pomeranian", value: "Pomeranian" },
  { label: "Poodle", value: "Poodle" },
  { label: "Portuguese", value: "Portuguese" },
  { label: "Pug", value: "Pug" },
  { label: "Puli", value: "Puli" },
  { label: "Pumi", value: "Pumi" },
  { label: "Pyrenean", value: "Pyrenean" },
  { label: "Rat", value: "Rat" },
  { label: "Redbone", value: "Redbone" },
  { label: "Rhodesian", value: "Rhodesian" },
  { label: "Rottweiler", value: "Rottweiler" },
  { label: "Saint", value: "Saint" },
  { label: "Saluki", value: "Saluki" },
  { label: "Samoyed", value: "Samoyed" },
  { label: "Schipperke", value: "Schipperke" },
  { label: "Scottish", value: "Scottish" },
  { label: "Sealyham", value: "Sealyham" },
  { label: "Shar", value: "Shar" },
  { label: "Shetland", value: "Shetland" },
  { label: "Shiba", value: "Shiba" },
  { label: "Shih", value: "Shih" },
  { label: "Siberian", value: "Siberian" },
  { label: "Silky", value: "Silky" },
  { label: "Skye", value: "Skye" },
  { label: "Sloughi", value: "Sloughi" },
  { label: "Smooth", value: "Smooth" },
  { label: "Soft", value: "Soft" },
  { label: "Spanish", value: "Spanish" },
  { label: "Staffordshire", value: "Staffordshire" },
  { label: "Standard", value: "Standard" },
  { label: "Sussex", value: "Sussex" },
  { label: "Swedish", value: "Swedish" },
  { label: "Super Mutt", value: "Super Mutt" },
  { label: "Thai", value: "Thai" },
  { label: "Tibetan", value: "Tibetan" },
  { label: "Treeing", value: "Treeing" },
  { label: "Toy", value: "Toy" },
  { label: "Vizsla", value: "Vizsla" },
  { label: "Weimaraner", value: "Weimaraner" },
  { label: "West", value: "West" },
  { label: "Welsh", value: "Welsh" },
  { label: "Whippet", value: "Whippet" },
  { label: "Wirehaired Pointing Griffon", value: "Wirehaired Pointing Griffon" },
  { label: "Wirehaired Vizsla", value: "Wirehaired Vizsla" },
  { label: "Xoloitzcuintli", value: "Xoloitzcuintli" },
  { label: "Yorkshire Terrier", value: "Yorkshire Terrier" },
  { label: "Other", value: "Other" },
];

export const BREEDS_FOR_FRIEND = [
  { label: "No preference", value: "No preference" },
  { label: "Affenpinscher", value: "Affenpinscher" },
  { label: "Afghan", value: "Afghan" },
  { label: "Airedale", value: "Airedale" },
  { label: "Akita", value: "Akita" },
  { label: "Alaskan", value: "Alaskan" },
  { label: "American", value: "American" },
  { label: "Anatolian", value: "Anatolian" },
  { label: "Andalusian", value: "Andalusian" },
  { label: "Australian", value: "Australian" },
  { label: "Azawakh", value: "Azawakh" },
  { label: "Barbet", value: "Barbet" },
  { label: "Basenji", value: "Basenji" },
  { label: "Basset", value: "Basset" },
  { label: "Bavarian", value: "Bavarian" },
  { label: "Beagle", value: "Beagle" },
  { label: "Bearded", value: "Bearded" },
  { label: "Beauceron", value: "Beauceron" },
  { label: "Bedlington", value: "Bedlington" },
  { label: "Belgian", value: "Belgian" },
  { label: "Bergamasco", value: "Bergamasco" },
  { label: "Berger", value: "Berger" },
  { label: "Bernese", value: "Bernese" },
  { label: "Bichon", value: "Bichon" },
  { label: "Black", value: "Black" },
  { label: "Bloodhound", value: "Bloodhound" },
  { label: "Bluetick", value: "Bluetick" },
  { label: "Boerboel", value: "Boerboel" },
  { label: "Bohemian", value: "Bohemian" },
  { label: "Bolognese", value: "Bolognese" },
  { label: "Border", value: "Border" },
  { label: "Borzoi", value: "Borzoi" },
  { label: "Boston", value: "Boston" },
  { label: "Boxer", value: "Boxer" },
  { label: "Bracco", value: "Bracco" },
  { label: "Briard", value: "Briard" },
  { label: "Brittany", value: "Brittany" },
  { label: "Broholmer", value: "Broholmer" },
  { label: "Brussels", value: "Brussels" },
  { label: "Bull", value: "Bull" },
  { label: "Bullmastiff", value: "Bullmastiff" },
  { label: "Cairn", value: "Cairn" },
  { label: "Canaan", value: "Canaan" },
  { label: "Canadian", value: "Canadian" },
  { label: "Cane", value: "Cane" },
  { label: "Cardigan", value: "Cardigan" },
  { label: "Carolina", value: "Carolina" },
  { label: "Catahoula", value: "Catahoula" },
  { label: "Caucasian", value: "Caucasian" },
  { label: "Cavalier", value: "Cavalier" },
  { label: "Central", value: "Central" },
  { label: "Cesky", value: "Cesky" },
  { label: "Chesapeake", value: "Chesapeake" },
  { label: "Chihuahua", value: "Chihuahua" },
  { label: "Chinese", value: "Chinese" },
  { label: "Chinook", value: "Chinook" },
  { label: "Chow", value: "Chow" },
  { label: "Cirneco", value: "Cirneco" },
  { label: "Clumber", value: "Clumber" },
  { label: "Coton", value: "Coton" },
  { label: "Cotonese", value: "Cotonese" },
  { label: "Curly", value: "Curly" },
  { label: "Dachshund", value: "Dachshund" },
  { label: "Dalmatian", value: "Dalmatian" },
  { label: "Dandie", value: "Dandie" },
  { label: "Danish-SwedishFarmdog", value: "Danish-SwedishFarmdog" },
  { label: "Deutscher", value: "Deutscher" },
  { label: "Dingo", value: "Dingo" },
  { label: "Doberman", value: "Doberman" },
  { label: "Dogo", value: "Dogo" },
  { label: "Dogue", value: "Dogue" },
  { label: "Drentsche", value: "Drentsche" },
  { label: "Drever", value: "Drever" },
  { label: "Dutch", value: "Dutch" },
  { label: "English", value: "English" },
  { label: "Eurasier", value: "Eurasier" },
  { label: "Finnish", value: "Finnish" },
  { label: "French", value: "French" },
  { label: "German", value: "German" },
  { label: "Giant", value: "Giant" },
  { label: "Golden", value: "Golden" },
  { label: "Grand", value: "Grand" },
  { label: "Great", value: "Great" },
  { label: "Greenland", value: "Greenland" },
  { label: "Greyhound", value: "Greyhound" },
  { label: "Harrier", value: "Harrier" },
  { label: "Havanese", value: "Havanese" },
  { label: "Hokkaido", value: "Hokkaido" },
  { label: "Ibizan", value: "Ibizan" },
  { label: "Irish", value: "Irish" },
  { label: "Italian", value: "Italian" },
  { label: "Jack", value: "Jack" },
  { label: "Jamthund", value: "Jamthund" },
  { label: "Japanese", value: "Japanese" },
  { label: "Keeshond", value: "Keeshond" },
  { label: "Kerry", value: "Kerry" },
  { label: "Komondor", value: "Komondor" },
  { label: "Labrador", value: "Labrador" },
  { label: "Lagotto", value: "Lagotto" },
  { label: "Lakeland", value: "Lakeland" },
  { label: "Lancashire", value: "Lancashire" },
  { label: "Lhasa", value: "Lhasa" },
  { label: "Lowchen", value: "Lowchen" },
  { label: "Maltese", value: "Maltese" },
  { label: "Miniature", value: "Miniature" },
  { label: "Neapolitan", value: "Neapolitan" },
  { label: "Newfoundland", value: "Newfoundland" },
  { label: "Norfolk", value: "Norfolk" },
  { label: "Norwefian", value: "Norwefian" },
  { label: "Norwegian", value: "Norwegian" },
  { label: "Norwich", value: "Norwich" },
  { label: "Nova", value: "Nova" },
  { label: "Old", value: "Old" },
  { label: "Otterhound", value: "Otterhound" },
  { label: "Otter", value: "Otter" },
  { label: "Papillon", value: "Papillon" },
  { label: "Parson", value: "Parson" },
  { label: "Parson Russell Terrier", value: "Parson Russell Terrier" },
  { label: "Patagonian", value: "Patagonian" },
  { label: "Patterdale", value: "Patterdale" },
  { label: "Pekingese", value: "Pekingese" },
  { label: "Pembroke", value: "Pembroke" },
  { label: "Petit", value: "Petit" },
  { label: "Pharaoh", value: "Pharaoh" },
  { label: "Pitbull", value: "Pitbull" },
  { label: "Plott", value: "Plott" },
  { label: "Pointer", value: "Pointer" },
  { label: "Polish", value: "Polish" },
  { label: "Pomeranian", value: "Pomeranian" },
  { label: "Poodle", value: "Poodle" },
  { label: "Portuguese", value: "Portuguese" },
  { label: "Pug", value: "Pug" },
  { label: "Puli", value: "Puli" },
  { label: "Pumi", value: "Pumi" },
  { label: "Pyrenean", value: "Pyrenean" },
  { label: "Rat", value: "Rat" },
  { label: "Redbone", value: "Redbone" },
  { label: "Rhodesian", value: "Rhodesian" },
  { label: "Rottweiler", value: "Rottweiler" },
  { label: "Saint", value: "Saint" },
  { label: "Saluki", value: "Saluki" },
  { label: "Samoyed", value: "Samoyed" },
  { label: "Schipperke", value: "Schipperke" },
  { label: "Scottish", value: "Scottish" },
  { label: "Sealyham", value: "Sealyham" },
  { label: "Shar", value: "Shar" },
  { label: "Shetland", value: "Shetland" },
  { label: "Shiba", value: "Shiba" },
  { label: "Shih", value: "Shih" },
  { label: "Siberian", value: "Siberian" },
  { label: "Silky", value: "Silky" },
  { label: "Skye", value: "Skye" },
  { label: "Sloughi", value: "Sloughi" },
  { label: "Smooth", value: "Smooth" },
  { label: "Soft", value: "Soft" },
  { label: "Spanish", value: "Spanish" },
  { label: "Staffordshire", value: "Staffordshire" },
  { label: "Standard", value: "Standard" },
  { label: "Sussex", value: "Sussex" },
  { label: "Swedish", value: "Swedish" },
  { label: "Super Mutt", value: "Super Mutt" },
  { label: "Thai", value: "Thai" },
  { label: "Tibetan", value: "Tibetan" },
  { label: "Treeing", value: "Treeing" },
  { label: "Toy", value: "Toy" },
  { label: "Vizsla", value: "Vizsla" },
  { label: "Weimaraner", value: "Weimaraner" },
  { label: "West", value: "West" },
  { label: "Welsh", value: "Welsh" },
  { label: "Whippet", value: "Whippet" },
  { label: "Wirehaired Pointing Griffon", value: "Wirehaired Pointing Griffon" },
  { label: "Wirehaired Vizsla", value: "Wirehaired Vizsla" },
  { label: "Xoloitzcuintli", value: "Xoloitzcuintli" },
  { label: "Yorkshire Terrier", value: "Yorkshire Terrier" },
  { label: "Other", value: "Other" },
];

export const AGES = [
  { label: "Less than 1", value: "Less than 1" },
  { label: "1-2 years", value: "1-2 years" },
  { label: "2-4 years", value: "2-4 years" },
  { label: "5-6 years", value: "5-6 years" },
  { label: "6-7 years", value: "6-7 years" },
  { label: "7-8 years", value: "7-8 years" },
  { label: "8-10 years", value: "8-10 years" },
  { label: "10-12 years", value: "10-12 years" },
  { label: "12 or more years", value: "12 or more years" },
]

export const AGES_FOR_FRIEND = [
  { label: "No preference", value: "No preference" },
  { label: "Less than 1", value: "Less than 1" },
  { label: "1-2 years", value: "1-2 years" },
  { label: "2-4 years", value: "2-4 years" },
  { label: "5-6 years", value: "5-6 years" },
  { label: "6-7 years", value: "6-7 years" },
  { label: "7-8 years", value: "7-8 years" },
  { label: "8-10 years", value: "8-10 years" },
  { label: "10-12 years", value: "10-12 years" },
  { label: "12 or more years", value: "12 or more years" },
]

export const SIZE = [
  { label: '15 lbs', value: '15lbs' },
  { label: '15-25 lbs', value: '1525lbs' },
  { label: '25-40 lbs', value: '2540lbs' },
  { label: '40-60 lbs', value: '60lbs' },
  { label: '60+ lbs', value: '60+lbs' },
]

export const SIZES_FOR_FRIEND = [
  { label: "No preference", value: "No preference" },
  { label: '15 lbs', value: '15lbs' },
  { label: '15-25 lbs', value: '1525lbs' },
  { label: '25-40 lbs', value: '2540lbs' },
  { label: '40-60 lbs', value: '60lbs' },
  { label: '60+ lbs', value: '60+lbs' },
]

export const ENERGY_LEVELS = [
  { label: 'High Energy', value: 'Highenergy' },
  { label: 'Work Hard Play Hard', value: 'WorkhardplayHard' },
  { label: 'Sometimes Mellow', value: 'Sometimesmellow' },
  { label: 'Couch Potato', value: 'CouchPotato' },
]

export const ENERGY_LEVELS_FRIEND = [
  { label: "No preference", value: "No preference" },
  { label: 'High Energy', value: 'Highenergy' },
  { label: 'Work Hard Play Hard', value: 'WorkhardplayHard' },
  { label: 'Sometimes Mellow', value: 'Sometimesmellow' },
  { label: 'Couch Potato', value: 'CouchPotato' },
]

export const apiConstants = {
  // Clear state
  CLEAR_STATE: "CLEAR_STATE",
  HANDLE_SIDEBAR_NAVIGATION_STATE: "HANDLE_SIDEBAR_NAVIGATION_STATE",
  HANDLE_SIDEBAR_DRAWER_TOGGLE_STATE: "HANDLE_SIDEBAR_DRAWER_TOGGLE_STATE",

  // ************ AUTHENTICATION ************
  // Authentications types
  API_AUTHENTICATION_FAILED: "API_AUTHENTICATION_FAILED",
  API_AUTHENTICATION_ERROR: "API_AUTHENTICATION_ERROR",

  // Login
  API_LOGIN_LOAD: "API_LOGIN_LOAD",
  API_LOGIN_SUCCESS: "API_LOGIN_SUCCESS",

  //logout
  API_LOGOUT_LOAD: "API_LOGOUT_LOAD",

  API_SIGNUP_LOAD: "API_SIGNUP_LOAD",
  API_SIGNUP_SUCCESS: "API_SIGNUP_SUCCESS",

  // Forgot Password
  API_FORGOT_PASSWORD_LOAD: "API_FORGOT_PASSWORD_LOAD",
  API_FORGOT_PASSWORD_SUCCESS: "API_FORGOT_PASSWORD_SUCCESS",

  // Reset Password
  API_RESET_PASSWORD_LOAD: "API_RESET_PASSWORD_LOAD",
  API_RESET_PASSWORD_SUCCESS: "API_RESET_PASSWORD_SUCCESS",

  // Reset Password
  API_CHECK_RESET_PASSWORD_LOAD: "API_CHECK_RESET_PASSWORD_LOAD",
  API_CHECK_RESET_PASSWORD_SUCCESS: "API_CHECK_RESET_PASSWORD_SUCCESS",

  // ************ USER MANAGEMENT ************
  // User Management
  API_USER_MANAGEMENT_FAILED: "API_USER_MANAGEMENT_FAILED",
  API_USER_MANAGEMENT_ERROR: "API_USER_MANAGEMENT_ERROR",

  //Get User List
  API_GET_USER_LIST_LOAD: "API_GET_USER_LIST_LOAD",
  API_GET_USER_LIST_SUCCESS: "API_GET_USER_LIST_SUCCESS",

  API_GET_MATCH_LIST_LOAD: "API_GET_MATCH_LIST_LOAD",
  API_GET_MATCH_LIST_SUCCESS: "API_GET_MATCH_LIST_SUCCESS",

  //Get User Details
  API_GET_USER_DETAILS_LOAD: "API_GET_USER_DETAILS_LOAD",
  API_GET_USER_DETAILS_SUCCESS: "API_GET_USER_DETAILS_SUCCESS",

  //Edit User Details
  API_EDIT_USER_DETAILS_LOAD: "API_EDIT_USER_DETAILS_LOAD",
  API_EDIT_USER_DETAILS_SUCCESS: "API_EDIT_USER_DETAILS_SUCCESS",

  UPDATE_AVATAR: "UPDATE_AVATAR",
  GET_USER_DETAILS: "GET_USER_DETAILS",
  CHANGE_PWD: "CHANGE_PWD",

  // Notifications
  UPDATE_NOTIFICAIONS_COUNT: "UPDATE_NOTIFICAIONS_COUNT",
  UPDATE_NOTIFICAIONS_COUNT_SUCCESS: "UPDATE_NOTIFICAIONS_COUNT_SUCCESS",
};
