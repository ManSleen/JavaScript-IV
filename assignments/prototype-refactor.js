/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
  constructor(attributes) {
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions;
  }
  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

// function GameObject(attributes) {
//     this.createdAt = attributes.createdAt;
//     this.name = attributes.name;
//     this.dimensions = attributes.dimensions;
//   }

//   GameObject.prototype.destroy = function() {
//     return `${this.name} was removed from the game.`;
//   };

/*
    === CharacterStats ===
    * healthPoints
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
  */

class CharacterStats extends GameObject {
  constructor(characterAttributes) {
    super(characterAttributes);
    this.healthPoints = characterAttributes.healthPoints;
  }
  takeDamage() {
    if (this.healthPoints > 0) {
      return `${this.name} took damage.`;
    } else {
      this.destroy;
      return `${this.name} is dead.`;
    }
  }
}

//   function CharacterStats(characterAttributes) {
//     GameObject.call(this, characterAttributes);
//     this.healthPoints = characterAttributes.healthPoints;
//   }

//   CharacterStats.prototype = Object.create(GameObject.prototype);
//   CharacterStats.prototype.takeDamage = function() {
//     if (this.healthPoints > 0) {
//       return `${this.name} took damage.`;
//     } else {
//       this.destroy;
//       return `${this.name} is dead.`;
//     }
//   };

/*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
  */
class Humanoid extends CharacterStats {
  constructor(humanoidAttributes) {
    super(humanoidAttributes);
    this.team = humanoidAttributes.team;
    this.weapons = humanoidAttributes.weapons;
    this.language = humanoidAttributes.language;
  }
  greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
  }
}

//   function Humanoid(humanoidAttributes) {
//     CharacterStats.call(this, humanoidAttributes);
//     this.team = humanoidAttributes.team;
//     this.weapons = humanoidAttributes.weapons;
//     this.language = humanoidAttributes.language;
//   }

//   Humanoid.prototype = Object.create(CharacterStats.prototype);

//   Humanoid.prototype.greet = function() {
//     return `${this.name} offers a greeting in ${this.language}.`;
//   };

/*
 * Inheritance chain: GameObject -> CharacterStats -> Humanoid
 * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
 * Instances of CharacterStats should have all of the same properties as GameObject.
 */

class Villain extends Humanoid {
  constructor(villainAttributes) {
    super(villainAttributes);
  }
  castSpell(otherPlayer) {
    otherPlayer.healthPoints -= 2;
    if (otherPlayer.healthPoints > 0) {
      return `${this.name} attacked ${otherPlayer.name}! ${
        otherPlayer.name
      }'s HP: ${otherPlayer.healthPoints}`;
    } else {
      console.log(otherPlayer.destroy());
      return `${this.name} KILLED ${otherPlayer.name}!`;
    }
  }
}

//   function Villain(villainAttributes) {
//     Humanoid.call(this, villainAttributes);
//   }

//   Villain.prototype = Object.create(Humanoid.prototype);

//   Villain.prototype.castSpell = function(otherPlayer) {
//     otherPlayer.healthPoints -= 2;
//     if (otherPlayer.healthPoints > 0) {
//       return `${this.name} attacked ${otherPlayer.name}! Health: ${
//         otherPlayer.healthPoints
//       }`;
//     } else {
//       console.log(otherPlayer.destroy());
//       return `${this.name} KILLED ${otherPlayer.name}! Health: ${
//         otherPlayer.healthPoints
//       }`;
//     }
//   };

class Hero extends Humanoid {
  constructor(heroAttributes) {
    super(heroAttributes);
  }
  slash(otherPlayer) {
    otherPlayer.healthPoints -= 2;
    if (otherPlayer.healthPoints > 0) {
      return `${this.name} attacked ${otherPlayer.name}! ${
        otherPlayer.name
      }'s HP: ${otherPlayer.healthPoints}`;
    } else {
      console.log(otherPlayer.destroy());
      return `${this.name} KILLED ${otherPlayer.name}!`;
    }
  }
}

//   function Hero(heroAttributes) {
//     Humanoid.call(this, heroAttributes);
//   }

//   Hero.prototype = Object.create(Humanoid.prototype);

// Test you work by un-commenting these 3 objects and the list of console logs below:

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1
  },
  healthPoints: 5,
  name: "Bruce",
  team: "Mage Guild",
  weapons: ["Staff of Shamalama"],
  language: "Common Tongue"
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2
  },
  healthPoints: 15,
  name: "Sir Mustachio",
  team: "The Round Table",
  weapons: ["Giant Sword", "Shield"],
  language: "Common Tongue"
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4
  },
  healthPoints: 10,
  name: "Lilith",
  team: "Forest Kingdom",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

const mephisto = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 6
  },
  healthPoints: 10,
  name: "Mephisto",
  team: "Demon World",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

const gargantuan = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 6
  },
  healthPoints: 10,
  name: "Gargantuan",
  team: "Sky World",
  weapons: ["Bow", "Dagger"],
  language: "Elvish"
});

console.log(mage.createdAt); // Today's date
console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
console.log(swordsman.healthPoints); // 15
console.log(mage.name); // Bruce
console.log(swordsman.team); // The Round Table
console.log(mage.weapons); // Staff of Shamalama
console.log(archer.language); // Elvish
console.log(archer.greet()); // Lilith offers a greeting in Elvish.
console.log(mage.takeDamage()); // Bruce took damage.
console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

console.log("--------------------------");

console.log(mephisto.castSpell(gargantuan));

console.log(gargantuan.healthPoints);
console.log(mephisto.healthPoints);

console.log(mephisto.castSpell(gargantuan));

console.log(gargantuan.healthPoints);

console.log(mephisto.castSpell(gargantuan));

console.log(gargantuan.healthPoints);

console.log(mephisto.castSpell(gargantuan));

console.log(gargantuan.healthPoints);

console.log(mephisto.castSpell(gargantuan));

console.log(gargantuan.healthPoints);

// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!
