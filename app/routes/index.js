import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return [
		{
			"name": "Brand",
			"key": "Brand",
			"description": "AP burst mage with no mobility.",
			"difficulty": 2,
			"primary": 3,
			"secondary": 5,
			"tips": [
				"Consider Merc's and Cowl if he plays well.",
				"2 or 3 levels into W."
			]
		},
		{
			"name": "Camille",
			"key": "Camille",
			"description": "Bruiser top lane that might harass with Comet. Great at setting up ganks.",
			"difficulty": 2,
			"primary": 3,
			"secondary": 4,
			"tips": [
				"Armor Boots into damage. Frozen Mallet if behind.",
				"Be careful of harassing with Q, because you'll need it in her all-in."
			]
		},
		{
			"name": "Cassiopeia",
			"key": "Cassiopeia",
			"description": "Painful long-distance harass to deny you farming.",
			"difficulty": 4,
			"primary": 4,
			"secondary": 3,
			"tips": [
				"Spectre's Cowl, Wit's End",
				"Consider Nullifying Orb in Sorcery path."
			]
		},
		{
			"name": "Darius",
			"key": "Darius",
			"description": "A dance of death around his E.",
			"difficulty": 1,
			"primary": 3,
			"secondary": 4,
			"tips": [
				"If you mess up and get pulled, RUN - DONT FIGHT.",
				"Consider putting 2 or 3 points in W early.",
				"A good Darius will go Phase Rush to beat Teemo."
			]
		},
		{
			"name": "Dr. Mundo",
			"key": "DrMundo",
			"description": "Tanky sustain champion who can be freely poked. Easy laning phase, but hard midgame.",
			"difficulty": 1,
			"primary": 3,
			"secondary": 0,
			"tips": [
				"Recent Mundo buff means you cannot win 1v1 past level 6. Split push won't work.",
				"Prioritise damage, and concentrate on farming. Join teamfights mid to lategame.",
				"Ignore Mundo in teamfights (unless he's going for you). Focus on bursting down their carries."
			]
		},
		{
			"name": "Ekko",
			"key": "Ekko",
			"description": "AP burst mage with Thunderlords and pushing power.",
			"difficulty": 2,
			"primary": 3,
			"secondary": 0,
			"tips": [
				"Merc's and magic burst damage.",
				"Back off if his Q hits you. He will try and use his E to proc Thunderlords."
			]
		},
		{
			"name": "Fiora",
			"key": "Fiora",
			"description": "Grand Duelist of League of Legends. You must counter her split push.",
			"difficulty": 2,
			"primary": 4,
			"secondary": 2,
			"tips": [
				"Grasp + Armor Boots rush. If ahead, buy damage, else Frozen Mallet.",
				"Her Reposte MUST NOT block your Q. Hold onto it!",
				"Consider Phantom Dancers to drastically reduce her burst when you're splitpushing her."
			]
		},
		{
			"name": "Fizz",
			"key": "Fizz",
			"description": "AP burster. Destroy him level 1-5. Once he is 6, he will all-in you.",
			"difficulty": 3,
			"primary": 3,
			"secondary": 5,
			"tips": [
				"Consider Null-magic Mantle start.",
				"Rush Cowl to prevent all-ins."
			]
		},
		{
			"name": "Galio",
			"key": "Galio",
			"description": "A great teamfighter. Not so great top laner. Split push to death.",
			"difficulty": 1,
			"primary": 3,
			"secondary": 0,
			"tips": [
				"Should be easy to maneuver around his Q and charge.",
				"He will try to charge/taunt you. Keep your distance and try to predict his movements."
			]
		},
		{
			"name": "Gangplank",
			"key": "Gangplank",
			"description": "Sustain war. You win by doing more damage midgame.",
			"difficulty": 2,
			"primary": 4,
			"secondary": 2,
			"tips": [
				"Dark Seal + Flask -> Corrupting Potion -> Armor Boots -> Vamp Scepter.",
				"Grasp of the Undying + Taste of Blood in Domination secondary.",
				"Don't expect to kill him. Don't tower dive unless you for some reason run Ignite and have Stopwatch."
			]
		},
		{
			"name": "Illaoi",
			"key": "Illaoi",
			"description": "Tanky sustain champion. Cannot be safely poked. Scale to midgame.",
			"difficulty": 2,
			"primary": 4,
			"secondary": 2,
			"tips": [
				"Grasp of the Undying.",
				"Armor Boots into damage. On-hit build, and consider Bork."
			]
		},
		{
			"name": "Irelia",
			"key": "Irelia",
			"description": "Dance of death around her ranged stun.",
			"difficulty": 1,
			"primary": 4,
			"secondary": 2,
			"tips": [
				"Grasp + armor boots is enough to survive. Damage afterwards.",
				"New Irelia now has a RANGED stun. Watch carefully for the placement of the first blade."
			]
		},
		{
			"name": "Jax",
			"key": "Jax",
			"description": "Split pushing monster, but predictable laning phase.",
			"difficulty": 1,
			"primary": 3,
			"secondary": 4,
			"tips": [
				"Aery + Armor boots into damage.",
				"Keep close attention to his build. When he reaches Trinity Force, he gets a massive spike"
			]
		},
		{
			"name": "Jayce",
			"key": "Jayce",
			"description": "Ranged poker who can jump in and deal lots of damage once you fall too low.",
			"difficulty": 3,
			"primary": 3,
			"secondary": 4,
			"tips": [
				"Take some early points into Q for some poke.",
				"Armor boots, but otherwise damage."
			]
		},
		{
			"name": "Kennen",
			"key": "Kennen",
			"description": "All in potential at level 6 and onwards. Build to survive all-in.",
			"difficulty": 2,
			"primary": 4,
			"secondary": 5,
			"tips": [
				"xBlotter runs Grasp as his only defensive build. Rushed Oblivion Orb for magic pen.",
				"Consider Spectre's Cowl to survive all-in.",
				"Nullifying Orb in secondary Sorcery path."
			]
		},
		{
			"name": "Kled",
			"key": "Kled",
			"description": "Terrible laner, outstanding team-fighter. You must win laning phase.",
			"difficulty": 1,
			"primary": 3,
			"secondary": 4,
			"tips": [
				"Play around his grappling hook, and poke him to death.",
				"Only danger is forgetting about his Confidence Bar, where he get's a significant HP boost!"
			]
		},
		{
			"name": "Malphite",
			"key": "Malphite",
			"description": "Has decent harass, but not better than Teemo. Split push strategy.",
			"difficulty": 1,
			"primary": 4,
			"secondary": 3,
			"tips": [
				"Dark Seal + Flask",
				"His shield passive can negate lots of your damage. This forces you to constantly harass.",
				"If he goes full AP, you MUST buy a Cowl to survive his level 6."
			]
		},
		{
			"name": "Maokai",
			"key": "Maokai",
			"description": "Great teamfight initiator. Poor laning phase. Split push him to death.",
			"difficulty": 2,
			"primary": 3,
			"secondary": 2,
			"tips": [
				"Aery + Dark Seal into Gunblade -> Nashor's.",
				"Assassination build also viable."
			]
		},
		{
			"name": "Mordekaiser",
			"key": "Mordekaiser",
			"description": "Shields and heals all day. Poor mobility - ask for ganks and keep your HP topped.",
			"difficulty": 3,
			"primary": 3,
			"secondary": 0,
			"tips": [
				"Dark Seal + Flask into Gunblade.",
				"Wait for his W to go on cooldown (cone of damage, outranges you, low cooldown)",
				"Beware his Hextech Protobelt + Flash combo. Insane damage with his Q."
			]
		},
		{
			"name": "Nasus",
			"key": "Nasus",
			"description": "AP Nasus will max E, and run AP/pen and cdr runes. Hard to poke.",
			"difficulty": 2,
			"primary": 3,
			"secondary": 0,
			"tips": [
				"Consider Null-magic Mantle start. Rush Cowl, then go damage.",
				"When he has Sheen, watch out for Flash + Q + Thunderlords proc."
			]
		},
		{
			"name": "Ornn",
			"key": "Ornn",
			"description": "Tanky harass lane, kinda like Sion.",
			"difficulty": 2,
			"primary": 4,
			"secondary": 2,
			"tips": [
				"Grasp should be enough sustain.",
				"AVOID RUNNING CLOSE TO WALLS. His E knocks you up!"
			]
		},
		{
			"name": "Pantheon",
			"key": "Pantheon",
			"description": "Direct counter to Teemo. Lane survival is priority.",
			"difficulty": 4,
			"primary": 4,
			"secondary": 2,
			"tips": [
				"Grasp of the Undying and Sorcery secondary with Manaflow Band.",
				"Start Doran's Ring for mana sustain and max Q first.",
				"Rush Armor Boots into Frozen Mallet."
			]
		},
		{
			"name": "Quinn",
			"key": "Quinn",
			"description": "Quinn lives off her Q (blind). Trade when it is down.",
			"difficulty": 1,
			"primary": 3,
			"secondary": 4,
			"tips": [
				"Early points in Q.",
				"She will very likely roam mid often. Make your midlaner aware of this.",
				"You massively outdamage her from level 6 and onwards. Don't feed early, and you win."
			]
		},
		{
			"name": "Renekton",
			"key": "Renekton",
			"description": "Extremely powerful levels 1-6 before falling off. Outscale him.",
			"difficulty": 2,
			"primary": 4,
			"secondary": 2,
			"tips": [
				"Focus on his rage bar. If its full, he heavily outtrades you (it regens health)",
				"Armor boots into damage items."
			]
		},
		{
			"name": "Rengar",
			"key": "Rengar",
			"description": "HUGE damage output levels 1-3. Survive early and split hard.",
			"difficulty": 4,
			"primary": 3,
			"secondary": 4,
			"tips": [
				"Start Doran's Shield. Go Armor Boots into Frozen Mallet.",
				"Bush control is vital in this match up."
			]
		},
		{
			"name": "Riven",
			"key": "Riven",
			"description": "All-in potential at level 6 and onwards. Build depending on success.",
			"difficulty": 2,
			"primary": 3,
			"secondary": 4,
			"tips": [
				"PRO TIP: Put two points in Q at level 4. The cooldown, timed perfect, mitigates 2x AA + 2x Q.",
				"Armor boots first buy. Consider Frozen Mallet if behind.",
				"Shroom control the bushes. Don't let her take you by surprise."
			]
		},
		{
			"name": "Rumble",
			"key": "Rumble",
			"description": "Lane bully with high magic damage. DON'T STAND IN HIS ULT...",
			"difficulty": 2,
			"primary": 3,
			"secondary": 5,
			"tips": [
				"Should be winnable with Aery. Dark Seal + Flask gives good sustain.",
				"Nullifying Orb in Sorcery path.",
				"Wit's End is excellent early game item."
			]
		},
		{
			"name": "Shen",
			"key": "Shen",
			"description": "Tanky strategic team fighter. Split push strategy.",
			"difficulty": 1,
			"primary": 2,
			"secondary": 1,
			"tips": [
				"Push super fucking hard. Gain superior minion advantage, as he sucks at last hitting under tower.",
				"Don't basic attack him while he is in his W shield. Just move away."
			]
		},
		{
			"name": "Singed",
			"key": "Singed",
			"description": "Lane pressure champion. Counter his pressure with hard poke.",
			"difficulty": 1,
			"primary": 3,
			"secondary": 1,
			"tips": [
				"Wait at second outer tower to counter proxy.",
				"He will sustain quite a lot from 2x Dark Seal. Don't panic - keep up poke with Aery."
			]
		},
		{
			"name": "Sion",
			"key": "Sion",
			"description": "A tanky lane bully with excellent harass and shields. Split push - eliminate Sion from teamfights.",
			"difficulty": 3,
			"primary": 4,
			"secondary": 2,
			"tips": [
				"Consider putting 2 or 3 points in W early.",
				"Blade of the Ruined King"
			]
		},
		{
			"name": "Swain",
			"key": "Swain",
			"description": "An AP sustain poke champion who rushes Rod of Ages.",
			"difficulty": 2,
			"primary": 2,
			"secondary": 1,
			"tips": [
				"Early Wit's End is fantastic in duels.",
				"With Assassin build, you will win extended fights.",
				"His claw is the only real threat to be wary of."
			]
		},
		{
			"name": "Tahm Kench",
			"key": "TahmKench",
			"description": "Dance of death around his Q. Press The Attack Tahm wins direct engages.",
			"difficulty": 3,
			"primary": 4,
			"secondary": 2,
			"tips": [
				"If he lands Q on you, get the fuck out of there. Save your Blind until he gets close to AA you.",
				"He will dominate lane levels 1 - 6. At level 6, you gain damage advantage. Don't feed.",
				"Start Doran's Shield to survive early game."
			]
		},
		{
			"name": "Teemo",
			"key": "Teemo",
			"description": "Trading Q's all day. Remember Sweeper.",
			"difficulty": 0,
			"primary": 3,
			"secondary": 5,
			"tips": [
				"Doran's Ring -> Rod of Ages",
				"Max Q"
			]
		},
		{
			"name": "Trundle",
			"key": "Trundle",
			"description": "His R destroys tanks. Go full damage and dominate lane.",
			"difficulty": 1,
			"primary": 3,
			"secondary": 1,
			"tips": [
				"Aery, Doran's Ring, Oblivion Orb. Poke that fucker down.",
				"His pillar makes for effective enemy ganks, so beware early-game junglers.",
				"When you get ganked, DON'T run near walls. Run straight down lane towards your tower."
			]
		},
		{
			"name": "Tryndamere",
			"key": "Tryndamere",
			"description": "Hold onto your Q at all times and poke. Win game before level 6.",
			"difficulty": 1,
			"primary": 3,
			"secondary": 4,
			"tips": [
				"Start Q, to avoid level 2 cheese.",
				"Attempt early Ignite kill."
			]
		},
		{
			"name": "Vladimir",
			"key": "Vladimir",
			"description": "An annoying sustain AP damage dealer. Play around his empowered Q.",
			"difficulty": 3,
			"primary": 4,
			"secondary": 3,
			"tips": [
				"Grasp + Dark Seal, Flask.",
				"Wit's End is fantastic against Vlad. Afterwards, Morellonomicon.",
				"If Vlad has Protobelt, expect an all-in attempt: Protobelt -> R -> Pool -> Ignite."
			]
		},
		{
			"name": "Volibear",
			"key": "Volibear",
			"description": "A very fast bear. Dance of death around his Q.",
			"difficulty": 3,
			"primary": 4,
			"secondary": 5,
			"tips": [
				"Post-buff Volibear is super dangerous and super fast.",
				"Focus on farming and only harass when its totally safe (i.e. not near his tower).",
				"Swiftness might be a good item to rush. More testing required."
			]
		},
		{
			"name": "Wukong",
			"key": "MonkeyKing",
			"description": "Classic burstly armor pen champ. All-in potential at level 6.",
			"difficulty": 2,
			"primary": 4,
			"secondary": 2,
			"tips": [
				"Doran's Shield start. Will be enough to survive his engage.",
				"Win trades pre-6, and expect definite level 6 all-in engage."
			]
		},
		{
			"name": "Yorick",
			"key": "Yorick",
			"description": "Heavy split pusher. Play around his Q (spawns ghoul graves) and expect engage at 3 ghouls.",
			"difficulty": 4,
			"primary": 4,
			"secondary": 2,
			"tips": [
				"Assassin build to prioritise attack speed.",
				"Swiftness boots and early levels in W.",
				"Survive laning phase and join for teamfights"
			]
		},
		{
			"name": "Zac",
			"key": "Zac",
			"description": "Commonly a sustain tank but sometimes played as an AP burster.",
			"difficulty": 3,
			"primary": 3,
			"secondary": 1,
			"tips": [
				"AP Zac has surprising burst, don't approach under 40% HP.",
				"Swiftness boots for dodging.",
				"Focus on farming. Zac passive and sustain makes him near impossible to kill."
			]
		},
		{
			"name": "Zed",
			"key": "Zed",
			"description": "Burst assassin. Run Exhaust in lane, Go Inspiration as secondary for Stopwatch.",
			"difficulty": 2,
			"primary": 3,
			"secondary": 5,
			"tips": [
				"He will 100-0 you when he reaches 6. His ult is main damage output, countered by Exhaust.",
				"Full damage build. Doran's Ring, Armor boots, Oblivion Orb.",
				"You will win trades hard early game. Jungler might recognise this and camp you."
			]
		}];
	}
});
