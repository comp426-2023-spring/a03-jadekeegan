// File that runs when you link/install package and run node-rps.
export function rps(user) {
	if (user !== "rock" || user !== "paper" || user !== "scissors") {

		console.error(`{user} is out of range. Please input 'rock', 'paper', or 'scissors'.`);

	let computer = Math.floor(Math.random()*3);
	computer = computer == 0 ? "rock" :
		computer == 1 ? "paper" :
		computer == 2 ? "scissors";

	let result = '';

	if (computer === user) {
		result = "tie";
	} else if (computer === "rock" && user === "scissors" || computer === "paper" && user === "rock" || computer === "scissors" && user === "paper") {
		result = "lose";
	} else {
		result = "win";
	}

	return { player: user,
		opponent: scissors,
		result: result 
	}
}
