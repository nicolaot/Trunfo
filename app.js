let voceScore = 0;
let pcScore = 0;
const smallvoce = "você".fontsize(3).sup();
const smallpc = "pc".fontsize(3).sup();
var card = '';
let i = 0;
let deckVoce = [];
let deckPC = [];

// obj
let cartas = [
	{nome: 'Gato',
  int: 'Int:&nbsp&nbsp&nbsp6',
	for: 'For:&nbsp&nbsp&nbsp1',
	img: 'Img/icons8-black-cat-96.png',
	vel: 'Vel:&nbsp&nbsp&nbsp4'},

	{nome: 'Dragão',
	int: 'Int:&nbsp&nbsp&nbsp1',
	for: 'For:&nbsp&nbsp&nbsp5',
	img: 'Img/icons8-european-dragon-96.png',
	vel: 'Vel:&nbsp&nbsp&nbsp5'},

	{nome: 'Canguru',
	int: 'Int:&nbsp&nbsp&nbsp2',
	for: 'For:&nbsp&nbsp&nbsp6',
	img: 'Img/icons8-kangaroo-96.png',
	vel: 'Vel:&nbsp&nbsp&nbsp1'},
	

	{nome: 'Macaco',
	int: 'Int:&nbsp&nbsp&nbsp5',
	for: 'For:&nbsp&nbsp&nbsp4',
	img: 'Img/icons8-monkey-with-a-banana-96.png',
	vel: 'Vel:&nbsp&nbsp&nbsp2'},

	{nome: 'Cobra',
	int: 'Int:&nbsp&nbsp&nbsp4',
	for: 'For:&nbsp&nbsp&nbsp3',
	img: 'Img/icons8-rattlesnake-96.png',
	vel: 'Vel:&nbsp&nbsp&nbsp3'},

	{nome: 'Lebrílope',
	int: 'Int:&nbsp&nbsp&nbsp3',
	for: 'For:&nbsp&nbsp&nbsp2',
	img: 'Img/icons8-jackalope-96.png',
	vel: 'Vel:&nbsp&nbsp&nbsp6'}
]

// elementos html

result_div = document.getElementById('result');
cardUserP = document.getElementById('imgGato');
nameUserP = document.getElementById('gatoP');
atbUserP = document.getElementById('int');
cardPcP = document.getElementById('imgDragão')
namePcP = document.getElementById('dragãoP');
atbPcP = document.getElementById('intPc');
acao = document.getElementById('açao');
cartaUserP = document.getElementById('cartaUserP');
cartaPCP = document.getElementById('cartaPCP');
cartasG = document.getElementById('cartasG');


//carta0
let nome0_p = document.getElementById('nome0');
let int0_p = document.getElementById('int0');
let for0_p = document.getElementById('for0');
let vel0_p = document.getElementById('vel0');
let img0 = document.getElementById('img0');

//carta1
let nome1_p = document.getElementById('nome1');
let int1_p = document.getElementById('int1');
let for1_p = document.getElementById('for1');
let vel1_p = document.getElementById('vel1');
let img1 = document.getElementById('img1');

//carta2
let nome2_p = document.getElementById('nome2');
let int2_p = document.getElementById('int2');
let for2_p = document.getElementById('for2');
let vel2_p = document.getElementById('vel2');
let img2 = document.getElementById('img2');

//funções

function draw() {

	let cartas = [
		{
			nome: 'Gato',
			int: 'Int:&nbsp&nbsp&nbsp6',
			for: 'For:&nbsp&nbsp&nbsp1',
			img: 'Img/icons8-black-cat-96.png',
			vel: 'Vel:&nbsp&nbsp&nbsp4'
		},

		{
			nome: 'Dragão',
			int: 'Int:&nbsp&nbsp&nbsp1',
			for: 'For:&nbsp&nbsp&nbsp5',
			img: 'Img/icons8-european-dragon-96.png',
			vel: 'Vel:&nbsp&nbsp&nbsp5'
		},

		{
			nome: 'Canguru',
			int: 'Int:&nbsp&nbsp&nbsp2',
			for: 'For:&nbsp&nbsp&nbsp6',
			img: 'Img/icons8-kangaroo-96.png',
			vel: 'Vel:&nbsp&nbsp&nbsp1'
		},


		{
			nome: 'Macaco',
			int: 'Int:&nbsp&nbsp&nbsp5',
			for: 'For:&nbsp&nbsp&nbsp4',
			img: 'Img/icons8-monkey-with-a-banana-96.png',
			vel: 'Vel:&nbsp&nbsp&nbsp2'
		},

		{
			nome: 'Cobra',
			int: 'Int:&nbsp&nbsp&nbsp4',
			for: 'For:&nbsp&nbsp&nbsp3',
			img: 'Img/icons8-rattlesnake-96.png',
			vel: 'Vel:&nbsp&nbsp&nbsp3'
		},

		{
			nome: 'Lebrílope',
			int: 'Int:&nbsp&nbsp&nbsp3',
			for: 'For:&nbsp&nbsp&nbsp2',
			img: 'Img/icons8-jackalope-96.png',
			vel: 'Vel:&nbsp&nbsp&nbsp6'
		}
	]

	//monta os decks
	cartas = cartas.sort((a, b) => 0.5 - Math.random());
	const half = Math.ceil(cartas.length / 2);
	deckVoce = cartas.splice(0, half);
	deckPC = cartas.splice(-half);

	//muda as cartas
	//carta 0
	nome0_p.innerHTML = deckVoce[0].nome;
	int0_p.innerHTML = deckVoce[0].int;
	for0_p.innerHTML = deckVoce[0].for;
	vel0_p.innerHTML = deckVoce[0].vel;
	img0.src = deckVoce[0].img;

	//carta 1
	nome1_p.innerHTML = deckVoce[1].nome;
	int1_p.innerHTML = deckVoce[1].int;
	for1_p.innerHTML = deckVoce[1].for;
	vel1_p.innerHTML = deckVoce[1].vel;
	img1.src = deckVoce[1].img;

	//carta 2
	nome2_p.innerHTML = deckVoce[2].nome;
	int2_p.innerHTML = deckVoce[2].int;
	for2_p.innerHTML = deckVoce[2].for;
	vel2_p.innerHTML = deckVoce[2].vel;
	img2.src = deckVoce[2].img;
}

function Int0UserChoice() {
		userNome = deckVoce[0].nome;
		game(deckVoce[0].int, getComputerChoice('int_pc'));
		cardUserP.src = deckVoce[0].img;
		nameUserP.innerHTML = deckVoce[0].nome;
		atbUserP.innerHTML = deckVoce[0].int;
		carta0.classList.add('hidden');
}

function Int1UserChoice() {
	userNome = deckVoce[1].nome;
	game(deckVoce[1].int, getComputerChoice('int_pc'));
	cardUserP.src = deckVoce[1].img;
	nameUserP.innerHTML = deckVoce[1].nome;
	atbUserP.innerHTML = deckVoce[1].int;
	carta1.classList.add('hidden');
}

function Int2UserChoice() {
	userNome = deckVoce[2].nome;
	game(deckVoce[2].int, getComputerChoice('int_pc'));
	cardUserP.src = deckVoce[2].img;;
	nameUserP.innerHTML = deckVoce[2].nome;
	atbUserP.innerHTML = deckVoce[2].int;
	carta2.classList.add('hidden');
}

function vel0UserChoice() {
	userNome = deckVoce[0].nome;
	game(deckVoce[0].vel, getComputerChoice('vel_pc'));
	cardUserP.src = deckVoce[0].img;
	nameUserP.innerHTML = deckVoce[0].nome;
	atbUserP.innerHTML = deckVoce[0].vel;
	carta0.classList.add('hidden');
}

function vel1UserChoice() {
	userNome = deckVoce[1].nome;
	game(deckVoce[1].vel, getComputerChoice('vel_pc'));
	cardUserP.src = deckVoce[1].img;
	nameUserP.innerHTML = deckVoce[1].nome;
	atbUserP.innerHTML = deckVoce[1].vel;
	carta1.classList.add('hidden');
}

function vel2UserChoice() {
	userNome = deckVoce[2].nome;
	game(deckVoce[2].vel, getComputerChoice('vel_pc'));
	cardUserP.src = deckVoce[2].img;
	nameUserP.innerHTML = deckVoce[2].nome;
	atbUserP.innerHTML = deckVoce[2].vel;
	carta2.classList.add('hidden');
}

function for0UserChoice() {
	userNome = deckVoce[0].nome;
	game(deckVoce[0].for, getComputerChoice('for_pc'));
	cardUserP.src = deckVoce[0].img;
	nameUserP.innerHTML = deckVoce[0].nome;
	atbUserP.innerHTML = deckVoce[0].for;
	carta0.classList.add('hidden');
}

function for1UserChoice() {
	userNome = deckVoce[1].nome;
	game(deckVoce[1].for, getComputerChoice('for_pc'));
	cardUserP.src = deckVoce[1].img;
	nameUserP.innerHTML = deckVoce[1].nome;
	atbUserP.innerHTML = deckVoce[1].for;
	carta1.classList.add('hidden');
}

function for2UserChoice() {
	userNome = deckVoce[2].nome;
	game(deckVoce[2].for, getComputerChoice('for_pc'));
	cardUserP.src = deckVoce[2].img;
	nameUserP.innerHTML = deckVoce[2].nome;
	atbUserP.innerHTML = deckVoce[2].for;
	carta2.classList.add('hidden');
}

function getUserChoice() {

	int0_p.addEventListener('click', Int0UserChoice)

	int1_p.addEventListener('click', Int1UserChoice)

	int2_p.addEventListener('click', Int2UserChoice)

	vel0_p.addEventListener('click', vel0UserChoice)

	vel1_p.addEventListener('click', vel1UserChoice)

	vel2_p.addEventListener('click', vel2UserChoice)

	for0_p.addEventListener('click', for0UserChoice)

	for1_p.addEventListener('click', for1UserChoice)

	for2_p.addEventListener('click', for2UserChoice)
}

function getPCname() {
	if (Math.max(deckPC0, deckPC1, deckPC2) == deckPC0) {
		pcNome = deckPC[0].nome;
		pcImg = deckPC[0].img;
	};

	if (Math.max(deckPC0, deckPC1, deckPC2) == deckPC1) {
		pcNome = deckPC[1].nome;
		pcImg = deckPC[1].img;
	};

	if (Math.max(deckPC0, deckPC1, deckPC2) == deckPC2) {
		pcNome = deckPC[2].nome;
		pcImg = deckPC[2].img;
	};
	namePcP.innerHTML = pcNome;
	cardPcP.src = pcImg;
	return pcNome
}

function getPCint() {
	if (Math.max(deckPC0, deckPC1, deckPC2) == deckPC0) {
		pcAtb = deckPC[0].int;
	};

	if (Math.max(deckPC0, deckPC1, deckPC2) == deckPC1) {
		pcAtb = deckPC[1].int;
	};

	if (Math.max(deckPC0, deckPC1, deckPC2) == deckPC2) {
		pcAtb = deckPC[2].int;
	};

	atbPcP.innerHTML = pcAtb;
}

function getPCvel() {
	if (Math.max(deckPC0, deckPC1, deckPC2) == deckPC0) {
		pcAtb = deckPC[0].vel;
	};

	if (Math.max(deckPC0, deckPC1, deckPC2) == deckPC1) {
		pcAtb = deckPC[1].vel;
	};

	if (Math.max(deckPC0, deckPC1, deckPC2) == deckPC2) {
		pcAtb = deckPC[2].vel;
	};

	atbPcP.innerHTML = pcAtb;
}

function getPCfor() {
	if (Math.max(deckPC0, deckPC1, deckPC2) == deckPC0) {
		pcAtb = deckPC[0].for;
	};

	if (Math.max(deckPC0, deckPC1, deckPC2) == deckPC1) {
		pcAtb = deckPC[1].for;
	};

	if (Math.max(deckPC0, deckPC1, deckPC2) == deckPC2) {
		pcAtb = deckPC[2].for;
	};

	atbPcP.innerHTML = pcAtb;
}

function intChoice() {
	pcAtr = 'inteligência';
	deckPC0 = deckPC[0].int.slice(-1);
	deckPC1 = deckPC[1].int.slice(-1);
	deckPC2 = deckPC[2].int.slice(-1);
	getPCname(Math.max(deckPC0, deckPC1, deckPC2));
	getPCint(Math.max(deckPC0, deckPC1, deckPC2));
	return Math.max(deckPC0, deckPC1, deckPC2);
}

function velChoice() {
	pcAtr = 'velocidade';
	deckPC0 = deckPC[0].vel.slice(-1);
	deckPC1 = deckPC[1].vel.slice(-1);
	deckPC2 = deckPC[2].vel.slice(-1);
	getPCname(Math.max(deckPC0, deckPC1, deckPC2));
	getPCvel(Math.max(deckPC0, deckPC1, deckPC2));
	return Math.max(deckPC0, deckPC1, deckPC2);
}

function forChoice() {
	pcAtr = 'força';
	deckPC0 = deckPC[0].for.slice(-1);
	deckPC1 = deckPC[1].for.slice(-1);
	deckPC2 = deckPC[2].for.slice(-1);
	getPCname(Math.max(deckPC0, deckPC1, deckPC2));
	getPCfor(Math.max(deckPC0, deckPC1, deckPC2));
	return Math.max(deckPC0, deckPC1, deckPC2);
}

function getComputerChoice(computerChoice) {
	switch (computerChoice) {
		case 'int_pc':
			return intChoice();
			break;

		case 'vel_pc':
			return velChoice();
			break;		

		case 'for_pc':
			return forChoice();
			break;			
	}
}

function perdeu() {
	pcScore ++;
	score.classList.add('red-glow');
	cartaUserP.classList.add('red-glow');
	cartaPCP.classList.add('green-glow');
	setTimeout(() => cartaUserP.classList.remove('red-glow'), 300);
	setTimeout(() => cartaPCP.classList.remove('green-glow'), 300);
	result_div.innerHTML = `A ${pcAtr} do ${pcNome}${smallpc} é maior que a do ${userNome}${smallvoce}... Você perdeu ):`;
}

function ganhou() {
	voceScore ++;
	score.classList.add('green-glow');
	cartaUserP.classList.add('green-glow');
	cartaPCP.classList.add('red-glow');
	setTimeout(() => cartaUserP.classList.remove('green-glow'), 300);
	setTimeout(() => cartaPCP.classList.remove('red-glow'), 300);
	result_div.innerHTML = `A ${pcAtr} do ${userNome}${smallvoce} é maior que a do ${pcNome}${smallpc}. Você ganhou!!!`;
}

function game(UserChoice, computerChoice) {
	console.log(i);
	var UserChoice = UserChoice.slice(-1);
	cartaUserP.classList.remove('hidden');
	cartaPCP.classList.remove('hidden');
	result_div.classList.remove('hidden');
	cartasG.classList.remove('hidden');
	score = document.getElementById(`circle${i}`);

	if (i < 2) {
		if (UserChoice < computerChoice) {
			perdeu();
		} else {
			ganhou();
		};
		
		i++;

	} else {
		if (UserChoice < computerChoice) {
			perdeu();
		} else {
			ganhou();
		};

		acao.innerHTML = `Jogar novamente!`;
		acao.classList.add('ponteiro');
		acao.addEventListener('click', function () {
			while (i >= 0) {
				score = document.getElementById(`circle${i}`);
				score.classList.remove('green-glow');
				score.classList.remove('red-glow');
				i--;
			}
			i = 0;
			voceScore = 0;
			pcScore = 0;
			startGame();
		})
	}
}

function startGame() {
	result_div.classList.add('hidden');
	cartaUserP.classList.add('hidden');
	cartaPCP.classList.add('hidden');
	carta0.classList.remove('hidden');
	carta1.classList.remove('hidden');
	carta2.classList.remove('hidden');
	acao.classList.add('ponteiro');
	draw();
	getUserChoice();
}

function main() {
	cartasG.classList.add('hidden');
	acao.innerHTML = `Jogar!`;
	acao.classList.add('ponteiro');
	acao.addEventListener('click', function () {
		cartasG.classList.remove('hidden');
		acao.innerHTML = `Escolha sua jogada!`;
	})
	startGame();
}

main()


// score final
// parabéns vc venceu/que pena vc perdeu add glow score
// n repetir cartas pc
// add regras