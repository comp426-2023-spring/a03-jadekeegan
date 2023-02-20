// Main file where you will put your exported RPS and RPSLS function(s).
export { rps, rpsls }

function rps(user) {
	if (user == null) {
		return { player: user };
	}

	user = user.toLowerCase();

	if (user !== "rock" || user !== "paper" || user !== "scissors") {
                if (user === "lizard" || user === "spock") {
                        throw new RangeError(`${user} is out of range.`);
                } else {
                       throw new RangeError(`${user} is not a valid choice.`);
								}
							}

        let computer = Math.floor(Math.random()*3);
        computer = computer == 0 ? "rock" :
                computer == 1 ? "paper" :
                "scissors";

        let result = '';

        if (computer === user) {
                result = "tie";
        } else if (computer === "rock" && user === "scissors" || computer === "paper" && user === "rock" || computer === "scissors" && user === "paper") {
                result = "lose";
        } else {
                result = "win";
        }

        return { player: user,
                opponent: computer,
                result: result
        };
}

function rpsls(user) {
	if (user == null) {
		return { player: user };
	}

	user = user.toLowerCase();
	if (user !== "rock" || user !== "paper" || user !== "scissors" || user !== "lizard" || user !== "spock") {
		throw new RangeError(`{user} is not a valid choice.`);
	} 

	let computer = Math.floor(Math.random()*5);
	computer = computer == 0 ? "rock" :
		computer == 1 ? "paper" :
		computer == 2 ? "scissors" :
		computer == 3 ? "lizard" :
		"spock";

	let result = '';

	if (computer === user) {
		result = "tie";
	} else if (computer === "rock" && user === "scissors" || computer === "paper" && user === "rock" || computer === "scissors" && user === "paper") {
		result = "lose";
	} else if (computer === "rock" && user === "lizard" || computer === "lizard" && user === "spock" || computer === "spock" && user === "rock") {
		result = "lose";
	} else if (computer === "spock" && user === "scissors" || computer === "scissors" && user === "lizard" || computer === "paper" && user === "spock" || computer === "lizard" && user === "paper") {
		result = "lose";
	} else {
		result = "win";
	}

	return { player: user,
		opponent: computer,
		result: result
	};
}
