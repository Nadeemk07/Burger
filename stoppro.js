<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Nadeem Kaisar javascript</title>
</head>
<body>
<div id="first"> 
     <div id="second"> 
      <button>Click here</button>

     </div>
</div>	

<script type="text/javascript">
let a=document.querySelector("#first")
let b=document.querySelector("#second")
let c=document.querySelector("button")
a.addEventListener("mousedown",event=>{
	conlog.log("Outer div")
});

b.addEventListener("mousedown",event=>{
	conlog.log("inner div")
});
c.addEventListener("mousedown",event=>{
	if(event.button==2) event.stopPropagation();
});


</script>
</body>
</html>