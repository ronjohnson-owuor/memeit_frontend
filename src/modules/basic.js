import React from "react";


class Basic {
	constructor(){
		var theme = localStorage.getItem('theme');
		this.theme = theme ? theme : 'dark';
	}
	redirect_to_profile(username,user_id){
		window.location.href=`/user-profile/${username}/${user_id}`;
	}
	// redirect to home
	home(){
		window.location.href =import.meta.env.VITE_FRONTEND_URL;
	}
	
	basic_reload(){
		window.location.reload();
	}
	redirect_user(path){
		window.location.href=`/${path}`;
	}
	
	change_theme(){
		if( this.theme =='light'){
			this.theme ='dark';	
			document.documentElement.classList.remove('light');
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme',"dark");

		}else{
			this.theme = 'light';			
			document.documentElement.classList.remove('dark');
			document.documentElement.classList.add('light');
			localStorage.setItem('theme',"light");
		}
	}
	
	truncate(word){
		var truncated = word.slice(0,20)+"...";
		return truncated;
	}
}

export default Basic;