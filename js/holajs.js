//Initialize Firebase
var config = {
	apiKey: "AIzaSyAsPycld8k3wVA-36Dups5CYLf5kzL8Cp8",
	authDomain: "dellacquas-shop.firebaseapp.com",
	databaseURL: "https://dellacquas-shop.firebaseio.com",
	projectId: "dellacquas-shop",
	storageBucket: "dellacquas-shop.appspot.com",
	messagingSenderId: "360768524692"
};
firebase.initializeApp(config);



function iniciarConGoogle() {
	var provider = new firebase.auth.GoogleAuthProvider();

	firebase.auth().signInWithPopup(provider).then(function(result) {
		// This gives you a Google Access Token. You can use it to access the Google API.
		var token = result.credential.accessToken;
		// The signed-in user info.
		var user = result.user;
		
		console.log(user);
		console.log(user.displayName);
	}).catch(function(error) {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// The email of the user's account used.
		var email = error.email;
		// The firebase.auth.AuthCredential type that was used.
		var credential = error.credential;
		// ...
	});
}