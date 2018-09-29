
         var result = document.querySelector("#result");
         var gameHint=document.querySelector("#gameHint");

        // Player One Always Chooses Paper
        var PlayerOneChoice = " Paper";
        // player two choice is randomly 
        var PlayerTwoChoice = " Randomly For 100 Round"; 
            gameHint.innerHTML =` 
                        <p>Player 1 Always Chooses :`+ PlayerOneChoice +` </p>
                        <br> <button id="play" onclick="RunGame()"> Play </button> 
                        <p>Player Two Chooses :` + PlayerTwoChoice +` </p>
                         
                        `
        // Play for 100 Round 
        function RunGame() {
            var PlayerOneWin = 0;
            var tie = 0;
            var PlayerTwoWin = 0;
                for (let index = 0; index < 100; index++) {
                    var res = (Math.floor(Math.random() * 3) + 1) - 2;
                    //  0 paper
                    if (res == 0) {
                        tie++;
                    }
                    // 1  rock 
                    else if (res == 1) {
                        PlayerOneWin++;
                    }
                    // 2 scissors
                    else {
                        PlayerTwoWin++;
                    }
                }
            
            console.log(PlayerOneWin,PlayerTwoWin,tie);

           result.style.display="block";
            result.innerHTML = `
                                        <br><br>  <p> Player One wins  `+ PlayerOneWin +`  of 100 games  </p>
                                         <br><hr><br>  <p> Player Two wins  `+ PlayerTwoWin +`  of 100 games </p><hr>
                                        <br><hr><br>  <p> Tie Game for  `+ tie +`  of 100 games </p>                    
                                 ` 
                                    }

    

