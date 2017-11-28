$(function(){
	$(".btn").click(function(){
		$("#container img").remove()
		for (var i = 0; i < 5; i++) {
			var posX = Math.floor(Math.random()*90)
			var posY = Math.floor(Math.random()*90)
			console.log(posX + " " + posY)
			$("#container").append("<img src='ninja.png' alt='ninja' style='left: "+posX+"%; top: "+posY+"%'/>")
		}
		var score = 5
		$("#score span").text(score)
		$("#container img").click(function(){
			if ($(this).css("opacity")=="0"){
				score -= 1
				$(this).css("opacity", "1")
				$("#score span").text(score)
			}
		if(score == 0) {
				$("#titre").text("Félicitation, vous avez trouvé tous les ninjas !")
			}
	})
})
})
