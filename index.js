const net = require('net')
var whois = require('whois')

exports.handler = async function (event) {
    console.log(event.query.ip)
    console.log(net.isIP(event.query.ip))
    if (net.isIP(event.query.ip)) {
        whois.lookup(event.query.ip, function (err, data) {
            res.send(data)
        })
    } else {
        res.send('NA')
    }
}
