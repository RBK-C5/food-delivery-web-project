"use strict";

import Login from './views/login.js';
import About from './views/about.js';
//import Home  from './views/home.js'

$('#main-container').html(Login.render());

// $(document).ready(function(){

// $('#sign-in').click(function(event){
// 	var username = $('#username')
// 	var password = $('#password')
// 	var user = JSON.parse(window.localStorage.getItem('user'))
// 	if( username.val() !== '' || password.val() !== '' ){
// 		if( username.val() === user['username'] ){
// 			//go fetch for the username
// 			if( password.val() === user['password'] ){
// 				alert( username.val() + ', ' + password.val() );
// 				$( "#main-container" ).html( About.render() );
// 			}
// 			else{
// 				password.val("")
// 				alert('password incorrect');
// 			}
// 		}
// 		else{
// 			username.addClass('required')
// 		}
// 	}
// 	else{
// 		alert('username required')
// 	}

// 	event.preventDefault();

// })


// });