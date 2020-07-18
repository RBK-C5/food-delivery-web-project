$(document).ready(function(){

var state = window.localStorage.getItem('state')

if( state === "logged-out" ){



$.ajax({
	url:"./views/login.html",
	cache: false
})
.done(function(html){
	$("#main-container").append(html);
	$("#signupbtn").click(function(){
		console.log('hi qsd')
    	$("#sign-in").hide();
    	$("#sign-up").show();
	});

	$("#signinbtn").click(function(){
		$("#sign-up").hide();
    	$("#sign-in").show();
	});

	$('#signin').click(function(event){
		var username = $('#username').val()
		var password = $('#password').val()
		var users = JSON.parse(window.localStorage.getItem('users'))
		console.log(users)



		if( username !== '' || password !== '' ){
			for( var i = 0; i < users.length; i++ ){
				//console.log(users[i]['username'], users[i]['password'])
				if( username === users[i]['username'] && password === users[i]['password'] ){
					console.log('logged in')
					window.localStorage.setItem('state','signed-in')
					setTimeout(function(){
						window.localStorage.setItem('state',"logged-out" )
					}, 3000)
					$('#login-container').remove()

					$('#loggedIn').show();
					$('#notLoggedIn').hide()

					$('#loggedIn').click(function(){
						window.localStorage.setItem('state', 'logged-out')
						$(document).load('index.html')
					})
					$.ajax({
						  url: "./views/home.html",
						  cache: false
						})
						  .done(function( html ) {
						  	var restaurants = JSON.parse(window.localStorage.getItem('restaurants'))
						  	console.log(restaurants)
						  	
						  	$("#main-container").append(html);
							$.each( restaurants, function(index, restaurant){
								$(".list-container").append( 
									`<div id="` + restaurant['id'] +`" class="grid-container">
										<img src="https://d2lev5xroqke9e.cloudfront.net/tn/view/dd95b2a289?width=360&height=200">
										<div class="description">
											<h4>` + restaurant['name'] + `</h4>
											<p>` + restaurant['rating'] + `</p>
											<p>`+ restaurant['description'] +`</p>
										</div>
									</div>`
								);
						    });
						    
						    
						    $(".list-container").show("slow").css('display','grid')
						    $('.grid-container').click(function(){
						    	console.log('hi')
								$.ajax({
						  			url: "./views/menu.html",
						  			cache: false
								})
								.done(function( html ) {
									$("#main-container").html('').append(html);
						
						
								})
							})
						    
						
					});
					return;
				}
				else if(username !== users[i]['username'] || password !== users[i]['password'] ){
					alert('Check your username and password')
					return;
				}


			}
			
		}
		else{
			alert('Username or password required')
		}

		event.preventDefault();

	})

	$('#submitBtn').click(function(event){
		var username 	 = $('#user-name').val()
		var password     = $('#passwd').val()
		var passwordCopy = $('#passwordCopy').val()
		var fullname 	 = $('#fullname').val()
		var email    	 = $('#email').val()


		var users = JSON.parse(window.localStorage.getItem('users'))
		console.log(users)
		

		if( username !== '' && password !== '' && passwordCopy !== '' && fullname !== '' && email !== '' ){
			console.log(username,password,passwordCopy,fullname,email)
			if( password.length < 6 ){
				alert('password must be 6 characters or more')
				checked = true
			}
			else if( password !== passwordCopy ){
				alert('passwords dont match')
			}
			else if( email.indexOf('@') === -1 && email.indexOf('.') === -1 ){
				alert('Check your email')
			}
			else{
				for( var i =0; i < users.length; i++){
					if( username === users[i][username] ){
						alert('username exist please pik another one!')
					}
				}
			}
			
			

			var user = {}

			user.username = username
			user.fullname = fullname
			user.password = password
			user.passwordCopy = passwordCopy
			user.email = email

			users.push(user)
			console.log(users)

			window.localStorage.setItem('users',JSON.stringify(users))

			
		}
		

		event.preventDefault();

	})
 
})
}
else{

	$('#loggedIn').show();
	$('#notLoggedIn').hide()

	$('#loggedIn').click(function(){

		window.localStorage.setItem('state','logged-out')
		$(document).load('index.html')
	})
	$.ajax({
		  url: "./views/home.html",
		  cache: false
		})
	  .done(function( html ) {
	  	var restaurants = JSON.parse(window.localStorage.getItem('restaurants'))
	  	console.log(restaurants)
	  	
	  	$("#main-container").append(html);
		$.each( restaurants, function(index, restaurant){
			$(".list-container").append( 
				`<div id="` + restaurant['id'] +`" class="grid-container">
					<img src="https://d2lev5xroqke9e.cloudfront.net/tn/view/dd95b2a289?width=360&height=200">
					<div class="description">
						<h4>` + restaurant['name'] + `</h4>
						<p>` + restaurant['rating'] + `</p>
						<p>`+ restaurant['description'] +`</p>
					</div>
				</div>`
			);
	    });
	    
	    
	    $(".list-container").show("slow").css('display','grid')
	    $('.grid-container').click(function(){
	    	var id = this.id;
			$.ajax({
	  			url: "./views/menu.html",
	  			cache: false
			})
			.done(function( html ) {
				$("#home-container").remove();
				$("#main-container").append(html)
				//console.log(restaurants)
				
				$.each(restaurants,function(index,restaurant){
					
					if(restaurant['id'].toString() === id){
						$.each(restaurant['menu'], function(index,meal){
							console.log(meal)
							$('.left-container').append(
								`<div class="meal-container">
      								<h3>` + meal['title'] + `</h3>
  									<p>` + meal['gredients'].join() + `</p>
      								<p class="price" >` + meal['price'] +`.000</p>
  									<img class='' src="./assets/images/add1.png">
    							</div>
    							<hr>`
								)
						})
					}
				})

				// $('.price::after').click(function(){
				// 				$('.pay').append($('.price').text())
				// 			})
	
	
			})
		})
		    
		
	});
}


});