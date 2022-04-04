/*
    Possibly some HTML / React template

    Could use jsgui3-server
    Maybe integrate firstpoint / proxy into jsgui3-server?

    Act as a front-end for pm2 even?

*/

const http = require('http');
const httpProxy = require('http-proxy');

// And the proxy list?
//  Maybe could consult pm2 to see which websites are running, and on what ports....
//  Should make a bunch of simple server apps, serving a placeholder or mini web app page.


// dict-port-sites.json possibly.

// config-sites.json
//  could also include their place on disk, what port(s) to load them on.



/*
const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

*/

// Starting the various server apps from a config file?


class FirstPoint_Server {
    constructor(spec) {
        let url_ports = {};

        if (spec) {
            if (spec.url_ports) {
                url_ports = spec.url_ports;
            }
        }

        Object.defineProperty(this, 'url_ports', {
            get: () => {
                return url_ports;
            },
            set: value => {
                url_ports = value;
            }
        })



    }
    start() {

        // What to route / proxy it too...?

        // Test which services are available / serving on which ports.




        const options = {

        }
        
        const proxy = httpProxy.createProxyServer(options);

        proxy.on('proxyReq', function(proxyReq, req, res, options) {
            proxyReq.setHeader('X-Special-Proxy-Header', 'foobar');
            const req_keys = Object.keys(req);
            console.log('proxy req_keys', req_keys);
            console.log('2) req.url', req.url);
            //console.log('req.headers.length', req.headers.length);
            //const header_names = req.getRawHeaderNames();
            //console.log('header_names', header_names);
            //console.log('header_names.length', header_names.length);

        });
        
        const server = http.createServer(function(req, res) {

            const req_keys = Object.keys(req);
            console.log('server req_keys', req_keys);
            console.log('1) req.url', req.url);

            // Need to determine the target from what is in the request.

            // You can define here your custom logic to handle the request
            
            // and then proxy the request.
            console.log('this.url_ports', this.url_ports);


            // a dictionary of urls to serve to which port / which node server file?

            console.log('expect to do proxy.web call');

            // Could return same file for all URLs in some circumstances.



            /*

            proxy.web(req, res, {
                target: 'http://127.0.0.1:5050'
            });
            */
        });

        console.log("listening on port 80");

        server.listen(80);
    }
}





//server.listen(80);

module.exports = FirstPoint_Server;

if (require.main === module) {
    console.log('called directly');

    const server = new FirstPoint_Server();
    server.start();

} else {
    console.log('required as a module');
}