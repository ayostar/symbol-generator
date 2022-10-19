import Bowerman from './bowerman';
import Swordsman from './swordsman';
import Magician from './magician';
import Undead from './undead';
import Zombie from './zombie';
import Daemon from './daemon';
import Team from './team';
import Character from './character';

const hero = new Character('Alex', 'Swordman', 100, 1, 25, 25);
const heroBowerman = Bowerman('Лучник');
const heroSwordsman = Swordsman('Jilly');
const heroMagician = Magician('Mike');
const heroUndead = Undead('Holly');
const heroZombie = Zombie('Jully');
const heroDaemon = Daemon('Dady');

const myTeam = new Team([heroBowerman, heroDaemon, heroSwordsman, heroZombie]);
const opponentTeam = new Team([heroUndead, heroMagician, hero]);

/* eslint-disable */

for (let character of myTeam) {
  console.log(character);
}

for (let character of opponentTeam) {
  console.log(character);
}

/* eslint-enable */
