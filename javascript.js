
        function getComputerChoice (){
            return Math.floor(Math.random()*3);
        }
        function getHumanChoice(){
            var k = prompt("Enter Your Choice:");
            k = k.toLowerCase();
            console.log(k);
            return k;
        }
        var humanScore = 0;
        var ComputerScore = 0;

        function playRound(c1,c2){
            if(c1 == 0 && c2 == "rock" || c1 == 1 && c2 == "paper" || c1 == 2 && c2 == "scissors"){
                alert("Tie");
            }
            else if(c1 == 0 && c2 == "paper"){
                humanScore += 1;
                alert("Paper beats rock You win");
    
            }else if(c1 == 0 && c2 == "scissors"){
                ComputerScore += 1;
                alert("Rock beats scissors You Lose");
                
            }
            else if(c1 == 1 && c2 == "rock"){
                ComputerScore += 1;
                alert("Paper beats rock You lose ");
    
            }else if(c1 == 1 && c2 == "scissors"){
                humanScore += 1;
                alert("Scissors beat paper You win");
            }
            else if(c1 == 2 && c2 == "paper"){
                ComputerScore += 1;
                alert("Scissors beat paper You Lose");
                
            }else if(c1 == 2 && c2 == "rock"){
                alert("Rock beats sicssors You win");
                humanScore += 1;
            }
        }

        function playGame(){

            
            while(humanScore < 5 && ComputerScore< 5){
                var c1 = getComputerChoice();
                var c2 = getHumanChoice();
                playRound(c1,c2);
                
            }
            if(humanScore > ComputerScore){
                    alert("You Win 🎉");
                }else if(humanScore < ComputerScore){
                    alert("You Lose T T");
                }else{
                    alert("Its a Tie");
            }

        }
        playGame();
        