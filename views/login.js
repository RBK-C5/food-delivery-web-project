let Login = {
	render: function(){
		return `<div id="login-container" class="login-container">
					<h1>Sign in</h1>
					<form action="#login">
						<input type="text" id="username" name="username" placeholder="username">
						<input type="password" id="password" name="password" placeholder="password">
						<input type="submit" id="sign-in" name="sign-in" value="Login">
						<a href="#">sign up</a>
					</form>	
				</div>`
	}
}


export default Login;