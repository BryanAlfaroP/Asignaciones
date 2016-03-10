/*!
 * All Rights Reserved
 * This software is proprietary information of
 * Intelligent Sense
 * Use is subject to license terms.
 * Filename: main.js
 */

window.addEventListener('load', main);

/** This function starts the logic. */
function main() {
	var pokemonAttack = {
		"name": "Charmander",
		"tipo": "fire",
		"attack": "30",
		"defense": "20"
	};

	var pokemonDefense = {
		"name": "Bulbasaur",
		"tipo": "grass",
		"attack": "15",
		"defense": "50"
	};

	var damageNumber = Math.round(damage(pokemonAttack, pokemonDefense));
};

/**
 * Calculates the damage caused by a Pokemon's attack. 
 * @param {JSON} pPokemonAttack
 * @param {JSON} pPokemonDefense
 */
function damage(pPokemonAttack, pPokemonDefense) {
	var attack = pPokemonAttack.attack;
	var defense = pPokemonDefense.defense;
	var effectiveness = getEffectivenes(pPokemonAttack, pPokemonDefense);
	var finalDamage = 50*(attack/defense)*effectiveness;

	return finalDamage;
};

/**
 * Calculates the effectiveness caused by a Pokemon's attack. 
 * @param {JSON} pPokemonAttack
 * @param {JSON} pPokemonDefense
 */
function getEffectivenes(pPokemonAttack, pPokemonDefense) {
	var superEffective = 2;
	var neutral = 1;
	var lessEffective = 0.5;
	
	if(pPokemonAttack.tipo === "fire") {

		if(pPokemonDefense.tipo === "water") {
			return lessEffective;
		} else if (pPokemonDefense.tipo === "electric") {
			return neutral;
		} else if (pPokemonDefense.tipo === "grass") {
			return superEffective;
		} else if (pPokemonDefense.tipo === "fire") {
			return lessEffective;
		}
	} else if(pPokemonAttack.tipo === "grass") {

		if(pPokemonDefense.tipo === "fire") {
			return lessEffective;
		} else if (pPokemonDefense.tipo === "electric") {
			return neutral;
		} else if (pPokemonDefense.tipo === "water") {
			return superEffective;
		} else if (pPokemonDefense.tipo === "grass") {
			return lessEffective;
		}
	} else if(pPokemonAttack.tipo === "water") {

		if(pPokemonDefense.tipo === "electric") {
			return lessEffective;
		} else if (pPokemonDefense.tipo === "fire") {
			return superEffective;
		} else if (pPokemonDefense.tipo === "grass") {
			return lessEffective;
		} else if (pPokemonDefense.tipo === "water") {
			return lessEffective;
		}
	} else if(pPokemonAttack.tipo === "electric") {

		if(pPokemonDefense.tipo === "fire") {
			return neutral;
		} else if (pPokemonDefense.tipo === "water") {
			return superEffective;
		} else if (pPokemonDefense.tipo === "grass") {
			return neutral;
		} else if (pPokemonDefense.tipo === "electric") {
			return lessEffective;
		}
	} else {
		return 1;
	}
};

