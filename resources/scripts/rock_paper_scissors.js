class RockPaperScissors {
  constructor(username) {
    this.username = username;
    this.score = {
      user: 0,
      cpu:0 
    },
    this.gameHistoryLog = [];
  }

  /**
   * RETURN: one of the following values (`rock`, `paper`, `scissors`)
   * using Math.random() method, you should be able to get one of the following values
   */
  generateCPUResponse(){
    const acceptedValues = [ `rock`, `paper`, `scissors` ];
    let num = Math.floor(Math.random()* 2);

    return acceptedValues[num];
  }
  /**
   * returns one of the following values: `win`, `lose`, `tie`
   * tie:
   *     the user selection the same as the CPU
   * win: 
   *    (user is `rock` and cpu is `scissors
   *     OR
   *    (user is `paper` and cpu is `rock`) 
   *     OR 
   *    (user is `scissors` and cpu is `paper`)
   * `lose`:
   *    the opposite case :)
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   * @param {string} cpuSelection computer selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  determineWinner(userSelection, cpuSelection){
    if (userSelection == cpuSelection){
      return 'tie';
    } else if(userSelection == 'rock'){
      if(cpuSelection == 'paper'){
        return 'lose';
      } else if (cpuSelection == 'scissors'){
        return 'win';
      }
    } else if(userSelection == 'paper') {
      if(cpuSelection == 'rock'){
        return 'win';
      } else if(cpuSelection == 'scissors'){
        return 'lose';
      }
    } else if(userSelection == 'scissors'){
      if(cpuSelection == 'rock'){
        return 'lose';
      } else if(cpuSelection == 'paper'){
        return 'win';
      }
    }

  }

  /**
   * 
   * @param {string} userSelection user selection. Can only be one of the following values [`rock`, `paper`, `scissors`]
   */
  play(userSelection){
    let cpuResponse = this.generateCPUResponse();
    let winnerloser = this.determineWinner(userSelection, cpuResponse);
    if (winnerloser == 'win'){
      this.score.user ++;
      this.gameHistoryLog.push('User wins!');
    } else if (winnerloser == 'lose'){
      this.score.cpu ++;
      this.gameHistoryLog.push('Cpu wins :(');
    }
    

  }

}