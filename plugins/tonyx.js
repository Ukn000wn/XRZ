let handler  = async (m, { conn, usedPrefix: _p }) => {
    let info = `
    *β£π»ππππ|Ι΄Κα΄ ΓΝΓβ£*
    El ma jakel
    ββββββͺΌΰ½ΰΌΌβΰΌΏπ€ΰΌΎβΰΌ½ΰ½βͺ»βββββ
Canal de YT: https://www.youtube.com/channel/UC_O1R_T3kc1Yn5ioJDWhiww
El ma jakel de iutu oiste elmano
    ββββββͺΌΰ½ΰΌΌβΰΌΏπ€ΰΌΎβΰΌ½ΰ½βͺ»βββββ
    `.trim() 
    
    conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*π₯ JHUSZ X-X*', 'status@broadcast')
    }
    handler.command = /^(Tonyx.06|Tonyx|el ma jakel)$/i
    
    module.exports = handler
