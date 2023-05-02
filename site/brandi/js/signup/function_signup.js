$(document).ready(function(){
	
	//필수 동의 안 누늘 시 안 넘어감 index_signup
	function chk(){
	 var req = document.form.req.checked && document.form.req2.checked && document.form.req3.checked;
	 var num = 0;
	 if(req == true){
	  num = 1;
	 }
	 if(num==1){
	  document.form.submit();
	 }else{
	  alert("개인정보 약관에 동의 하세요.");
	 location.href="index_signup.html";}
	}
	$(".agree").click(chk);
	
	function nochk(){
		alert("가입이 취소되었습니다.");
		location.href="index_signup.html";	
	}
	
	$(".disagree").click(nochk);
	
	//이메일 직접입력란 index_signup4
	function emailChange(){

	if(document.join.email.options[document.join.email.selectedIndex].value == '0'){

	 document.join.email2.disabled = true;

	 document.join.email2.value = "";

		}

	if(document.join.email.options[document.join.email.selectedIndex].value == '9'){

	 document.join.email2.disabled = false;

	 document.join.email2.value = "";

	 document.join.email2.focus();

		} else{

	 document.join.email2.disabled = true;

	 document.join.email2.value = document.join.email.options[document.join.email.selectedIndex].value;
		}
	}	
	
	$(".email_change").click(emailChange);
	
	

	
	console.log(1);
	//로그인 페이지
	$(".frm").submit(function() {
		
		if (!$("#id").val()) {
				$(".msg1").css("display", "block");
				$("#id").focus();
				   return false;
			}else {
				$(".msg1").css("display", "none");
			}
			
			if (!$("#pw").val()) {
				$(".msg2").css("display", "block");
				$("#pw").focus();
				return false;
			}
	});
	
	
	//index_signup2
	 var login = document.login;//document.폼명
			
			login.onsubmit = function(){ //폼이 제출되었을 때 실행
				if(!login.id.value){//document.폼명.요소명.value -> value값이 없으면 false -> !을 붙이면 true
					alert("아이디를 입력하세요.");
					login.focus(); //자동으로 해당 요소에 포커스가 가게 함	
					return false; //submit 임무완수하지 않고 함수 밖으로 빠져나가게 함
					}
				if (!login.pw.value){
					alert("비밀번호를 입력하세요.");
					login.focus();
					return false;
					}	
				if (!login.conform_pw.value){
					alert("비밀번호을 한번 더 입력하세요.");
					login.focus();
				
					return false;
					}		
				}
	
	
	
	
});