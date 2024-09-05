// Load Firebase dependencies dynamically
async function loadFirebase() {
  await import('https://www.gstatic.com/firebasejs/9.6.4/firebase-app-compat.js');
  await import('https://www.gstatic.com/firebasejs/9.6.4/firebase-auth-compat.js');
}

class PulsarAuth {
  constructor(config) {
    // Ensure Firebase is loaded before initializing
    loadFirebase().then(() => {
      // Initialize Firebase
      this.app = firebase.initializeApp(config);
      this.auth = firebase.auth();

      // Define providers for different OAuth services
      this.googleProvider = new firebase.auth.GoogleAuthProvider();
      this.facebookProvider = new firebase.auth.FacebookAuthProvider();
      this.twitterProvider = new firebase.auth.TwitterAuthProvider();
      this.githubProvider = new firebase.auth.GithubAuthProvider();
      this.microsoftProvider = new firebase.auth.OAuthProvider('microsoft.com');
      this.yahooProvider = new firebase.auth.OAuthProvider('yahoo.com');
      this.appleProvider = new firebase.auth.OAuthProvider('apple.com');
    });
  }

  // Sign in with Google
  googleSignIn() {
    this.auth.signInWithPopup(this.googleProvider)
      .then((result) => {
        const user = result.user;
        console.log('Google User signed in: ', user);
        alert('Google User signed in: ' + user.displayName);
        return user;
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  // Sign in with Facebook
  facebookSignIn() {
    this.auth.signInWithPopup(this.facebookProvider)
      .then((result) => {
        const user = result.user;
        console.log('Facebook User signed in: ', user);
        alert('Facebook User signed in: ' + user.displayName);
        return user;
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  // Sign in with Twitter
  twitterSignIn() {
    this.auth.signInWithPopup(this.twitterProvider)
      .then((result) => {
        const user = result.user;
        console.log('Twitter User signed in: ', user);
        alert('Twitter User signed in: ' + user.displayName);
        return user;
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  // Sign in with GitHub
  githubSignIn() {
    this.auth.signInWithPopup(this.githubProvider)
      .then((result) => {
        const user = result.user;
        console.log('GitHub User signed in: ', user);
        alert('GitHub User signed in: ' + user.displayName);
        return user;
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  // Sign in with Microsoft
  microsoftSignIn() {
    this.auth.signInWithPopup(this.microsoftProvider)
      .then((result) => {
        const user = result.user;
        console.log('Microsoft User signed in: ', user);
        alert('Microsoft User signed in: ' + user.displayName);
        return user;
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  // Sign in with Yahoo
  yahooSignIn() {
    this.auth.signInWithPopup(this.yahooProvider)
      .then((result) => {
        const user = result.user;
        console.log('Yahoo User signed in: ', user);
        alert('Yahoo User signed in: ' + user.displayName);
        return user;
      })
      .catch((error) => {
        this.handleError(error);
      });
  }

  // Sign in with Apple
  appleSignIn() {
    this.auth.signInWithPopup(this.appleProvider)
      .then((result) => {
        const user = result.user;
        console.log('Apple User signed in: ', user);
        alert('Apple User signed in: ' + user.displayName);
        return user;
      })
      .catch((error) => {
        this.handleError(error);
      });
  }
  // Sign out function
  signOut() {
    this.auth.signOut()
      .then(() => {
        console.log('User signed out');
        alert('User signed out');
      })
      .catch((error) => {
        console.error('Sign-out Error: ', error);
      });
  }
  // Handle and log errors
  handleError(error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error('Error during sign-in:', errorCode, errorMessage);
    alert(`Error: ${errorMessage}`);
  }
  
}

