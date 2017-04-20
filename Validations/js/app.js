/**
 * Created by mdeepika on 13/3/17.
 */


app.controller('validationController', function(){
	var vm = this;
	vm.name="";
	vm.email="";
	
	vm.submitForm = function(){
	    console.log("hdgj");
	    if(vm.name=="" || vm.email==""){
	        vm.submitted = true;
	    }else if(vm.name!="" && vm.email!=""){
	    	alert("Submitted successfully");
	    }
	 };
});
