	function loadparameter(){
		 if(sessionStorage.getItem("questions") && sessionStorage.getItem("questions") != null){
				document.getElementById("questions").innerHTML = sessionStorage.getItem("questions");
			}
			if(sessionStorage.getItem("problem") && sessionStorage.getItem("problem") != null){
				document.getElementById("lblallProblems").innerHTML = sessionStorage.getItem("problem");
			}
			if(sessionStorage.getItem("problem") == "" || sessionStorage.getItem("problem") == "undefined" || sessionStorage.getItem("problem") == null){
				document.getElementById("lblallProblems").innerHTML = "The research problem is not defined";
			}
		 
	 }
	function loadControllPara(){
		 if(sessionStorage.getItem("questions")){
				document.getElementById("controllpage").innerHTML = sessionStorage.getItem("questions");
		}
	}
		

	function saveInSession() {
		var data = document.getElementById("questions").value
		sessionStorage.setItem("questions", data);
	}
	
	function save(){
		var data = document.getElementById("controllpage").value
		sessionStorage.setItem("questions", data);
		sessionStorage.setItem("isQuestionSet", true);
		alert("Das Speichern war erfolgreich");
	}
	
