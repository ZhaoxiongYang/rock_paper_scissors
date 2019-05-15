let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');
const reset_img = document.getElementById('resetButton');

function getComputerChoice() {
	const choices = ['r','p','s'];
	const randomNumber = Math.floor(Math.random()*3);
	return choices[randomNumber];
}

function converToWord(letter) {
	if(letter==='r'){return 'Rock'}
	else if(letter==='p'){return 'Paper'}
	return 'Scissors'
 }

function win(userChoice,computerChoice) {
	const smallUserWord = 'YOU'.fontsize(4).sub();
	const smallComputerWord = 'COM'.fontsize(4).sub();
	const userChoice_div = document.getElementById(userChoice);
	
	userScore ++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;

	result_p.innerHTML = `${converToWord(userChoice)} ${smallUserWord} beats ${converToWord(computerChoice)}${smallComputerWord}. You Win!!!`;
	userChoice_div.classList.add('green-glow');
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice,computerChoice) {
	const smallUserWord = 'YOU'.fontsize(4).sub();
	const smallComputerWord = 'COM'.fontsize(4).sub();
	const userChoice_div = document.getElementById(userChoice);
	
	computerScore ++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_p.innerHTML = `${converToWord(computerChoice)} ${smallComputerWord} beats ${converToWord(userChoice)}${smallUserWord}. You lost...`;
	userChoice_div.classList.add('red-glow');
	setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice,computerChoice) {
	const smallUserWord = 'YOU'.fontsize(4).sub();
	const smallComputerWord = 'COM'.fontsize(4).sub();
	const userChoice_div = document.getElementById(userChoice);
	result_p.innerHTML = `${converToWord(userChoice)} ${smallUserWord} equals ${converToWord(computerChoice)}${smallComputerWord}. It's a draw.`;
	userChoice_div.classList.add('gray-glow');
	setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch(userChoice+computerChoice){
		case 'rs':
		case 'pr':
		case 'sp':
			win(userChoice, computerChoice);
			break;
		case 'sr':
		case 'rp':
		case 'ps':
			lose(userChoice, computerChoice);
			break;
		case 'ss':
		case 'rr':
		case 'ss':
			draw(userChoice, computerChoice);
			break; 
	}
}

function resetScoreBoard() {
	userScore = 0;
	computerScore = 0;
	userScore_span.innerHTML = 0;
	computerScore_span.innerHTML = 0;
	result_p.innerHTML = `Let's play a new round! `;

}

function main () {
	rock_div.addEventListener('click', () => game("r"));

	paper_div.addEventListener('click', () => game("p"));

	scissors_div.addEventListener('click', () => game("s"));

	reset_img.addEventListener('click', () => resetScoreBoard());
}

main();