require("./all/module")

global.owner = "6282193222977" //PAKE NO LU BIAR BISA ADD AKSES
global.namabot = "A444MODS" //NAMA BOT GANTI
global.namaCreator = "A444MODS" //NAMA CREATOR GANTI AJA
global.autoJoin = false //NOT CHANGE / JANGAN GANTI
global.antilink = false //NOT CHANGE / JANGAN GANTI
global.versisc = '1.0.0' //NOT CHANGE / JANGAN GANTI
global.codeInvite = ""
global.imageurl = 'https://telegra.ph/file/299847993e8fcc36d444b.jpg' //GANTI PP MU MENGGUNAKAN LINK TELEGRA PH
global.isLink = 'https://chat.whatsapp.com/IdGHtgD7YQo47Z7NrMi68Q' ///GANTI MENGGUNAKAN LINK GRUBMU YA
global.thumb = fs.readFileSync("./thumb.png") ///NOT CHANGE / JANGAN GANTI
global.audionya = fs.readFileSync("./all/sound.mp3") //NOT CHANGE / JANGAN GANTI
global.packname = "A444MODS" //GANTI AJ
global.author = "A444MODS" //GANTI SERAH MU
global.jumlah = "5" ////NOT CHANGE / JANGAN GANTI

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})