/**
 * Takes a string and returns true if its a valid email address.
 * @param  {String}  email Email address to be tested for validity.
 * @return {Boolean}       True if valid email, false if not.
 */

export function isValidEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }