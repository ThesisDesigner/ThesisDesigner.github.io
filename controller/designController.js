function loadControllPara(){
	 if(sessionStorage.getItem("design") && sessionStorage.getItem("design") != null){
			document.getElementById("controllpage").innerHTML = sessionStorage.getItem("design");
	}
}
	
	
	function saveInSession() {
		var data = document.getElementById("design").value
		sessionStorage.setItem("design", data);
	}


	function loadparameter(){
			if(sessionStorage.getItem("problem")){
				document.getElementById("lblproblem").innerHTML = sessionStorage.getItem("problem")
			}
			if(sessionStorage.getItem("problem") == "" || sessionStorage.getItem("problem") == "undefined" || sessionStorage.getItem("problem") == null){
				document.getElementById("lblproblem").innerHTML = "The research problem is not defined.";
			}
			if(sessionStorage.getItem("questions")){
				document.getElementById("lblquestion").innerHTML = sessionStorage.getItem("questions")
			}
			if(sessionStorage.getItem("questions") == "" || sessionStorage.getItem("questions") == "undefined" || sessionStorage.getItem("questions") == null){
				document.getElementById("lblquestion").innerHTML = "The research question is not defined.";
			}
			if(sessionStorage.getItem("design")){
				document.getElementById("design").innerHTML = sessionStorage.getItem("design")
			}
	 }

	function save(){
		var data = document.getElementById("controllpage").value
		sessionStorage.setItem("design", data);
		sessionStorage.setItem("isDesignSet", true);
		alert("Das Speichern war erfolgreich");
	}
	
