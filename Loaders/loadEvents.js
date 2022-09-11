const fs = require("fs")

module.exports = async bot => {

fs.readdirSync("./Events").filter(f => f.endsWith(".js")).forEach(async File => {

        let event = require(`../Events/${File}`)
        bot.on(File.split(".js").join(""), event.bind(null, bot))
        console.log(`Evènement ${File} chargé avec succès !`)
    })
}