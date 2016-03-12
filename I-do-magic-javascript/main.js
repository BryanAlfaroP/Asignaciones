/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Intelligent Sense
 * Use is subject to license terms.
 * Filename: main.js
 */

window.addEventListener('load', main);

var pokemonAttack = {
	'name': 'Pikachu',
	'tipo': 'fire',
	'attack': '30',
	'defense': '20'
};

var pokemonDefense = {
	'name': 'scuartul',
	'tipo': 'grass',
	'attack': '15',
	'defense': '50'
};

/** This function starts the flow of the program */
function main() {
	damage(pokemonAttack, pokemonDefense);
};

/**
 * Calculate the damage caused by a pokemon's attack.
 * @param {string} pPokemonAttack.
 * @param {string} pPokemonDefense.
 */
function damage(pPokemonAttack, pPokemonDefense) {
	var attack = pPokemonAttack.attack;
	var defense = pPokemonDefense.defense;
	var effectiveness = getEffectivenes(pPokemonAttack, pPokemonDefense);
	var final_damage = 50*(attack/defense)*effectiveness;
};

/**
 * Calculate the effectiveness caused by a pokemon's attack.
 * @param {string} pPokemonAttack.
 * @param {string} pPokemonDefense.
 */
function getEffectivenes(pPokemonAttack, pPokemonDefense) {
	var superEfective = 2;
	var neutral = 1;
	var lessEfective = 0.5;
	
	if(pPokemonAttack.tipo === 'fire') {

		if(pPokemonDefense.tipo === 'water') {
			return lessEfective;
		} else if (pPokemonDefense.tipo === 'electric') {
			return neutral;
		} else if (pPokemonDefense.tipo === 'grass') {
			return superEfective;
		}
	} else if(pPokemonAttack.tipo === 'grass') {

		if(pPokemonDefense.tipo === 'fire') {
			return lessEfective;
		} else if (pPokemonDefense.tipo === 'electric') {
			return neutral;
		} else if (pPokemonDefense.tipo === 'water') {
			return superEfective;
		}
	} else if(pPokemonAttack.tipo === 'water') {

		if(pPokemonDefense.tipo === 'electric') {
			return lessEfective;
		} else if (pPokemonDefense.tipo === 'fire') {
			return superEfective;
		} else if (pPokemonDefense.tipo === 'grass') {
			return lessEfective;
		}
	} else if(pPokemonAttack.tipo === 'electric') {

		if(pPokemonDefense.tipo === 'fire') {
			return neutral;
		} else if (pPokemonDefense.tipo === 'water') {
			return superEfective;
		} else if (pPokemonDefense.tipo === 'grass') {
			return neutral;
		}
	} else{
		return 1;
	}
};