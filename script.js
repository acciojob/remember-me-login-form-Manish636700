document.addEventListener("DOMContentLoaded", () => {
	const username = document.getElementById("username");
	const password = document.getElementById("password");
	const submit = document.getElementById("submit");
	const exist = document.getElementById("existing");
	const rem = document.getElementById("checkbox");

	const login = document.getElementById("login-form");


	const saveuser = localStorage.getItem("username");
	const savepass = localStorage.getItem("password");

	if(saveuser && savepass)
	{
		exist.style.display="block";
	}

	login.addEventListener("submit",(event)=>{

		event.preventDefault();

		const user = username.value.trim();
        const pass = password.value.trim();
        const rememberMe = rem.checked;
		
		if(user && pass)
		{
		alert(`Logged in as ${user}`);
			
		if(rememberMe){
			localStorage.setItem("saveuser",user);
			localStorage.setItem("savepass",pass);
		}
		else{
			localStorage.removeItem("saveuser");
			localStorage.removeItem("savepass");
			}
		}
		existing.addEventListener("click",()=>{
			alert(`Logged in as ${savedUsername}`);
		})

	})

	

	
	
	

	
	
})