const Discord = require('discord.js')
const { Snake } = require('discord-gamecord')

module.exports = {

    name: "snake",
    description: "🎲 Permet de jouer au jeu du serpent en solo",
    permission: "Aucune",
    dm: true,
    category: "🎲 Jeux",

    async run(bot, message, args) {
        
        new Snake({
            message: message,
            slash_command: true,
            embed: {
                title: 'Snake Game',
                color: '#75f08a',
                overTitle: 'Game Over',
        
                snake: { head: '🟢', body: '🟩', tail: '🟢' },
                emojis: {
                board: '⬛',
                food: '🍎',
                up: '⬆️',
                down: '⬇️',
                right: '➡️',
                left: '⬅️',
                }
            }
        }).startGame()
    }
}