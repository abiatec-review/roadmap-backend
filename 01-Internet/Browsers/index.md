https://developer.mozilla.org/en-US/docs/Web/Performance/How_browsers_work
Two main problems of good performance: Latency and Single Threaded Browsers.

Latency problem: before we even start loading the page and rendering it, a bunch of network operations must be done.
DNS lookup=>TSP handshake=>TLS handshake(for https)

DNS Lookup
Once a user enters a website, for example http://example.com browser needs to know what IP address it corresponds to. It either takes it from a cache, or if it's empty a DNS lookup request is send to a name server. Name server responds with an IP value.
Name servers(DNS servers) are usually free.  DNS lookup can be performed over a variety of protocols, such as TCP/UDP as well as HTTPS
For each hostname a separate DNS value is required, furthermore for each different styles import, JS library import a different DNS request must be sent.
"DNS lookups usually only need to be done once per hostname for a page load. However, DNS lookups must be done for each unique hostname the requested page references. If your fonts, images, scripts, ads, and metrics all have different hostnames, a DNS lookup will have to be made for each one."
QUESTION: what part of the address is a hostname? Google says 'www' or 'ftp' but almost everyone uses www so whats the point.

TSP handshake.
Browsers use TSP and establish connection over http/https usually. But, there are cases where UDP is used(DNS lookup is usually done via UDP, due to the ease with which a connection can be established and data sent/received and the speed.) Another use case is when lost data can be easily replaced, such as video streaming, gaming data, Skype. Another more rare use case with multi-host traffic, only UDP can multicast to multiple hosts, while TCP is always a 1 to 1 connection. Unreliability of UDP in practical use cases is not imporant, it's almost always comes through. It's just not perfect and no guarantees.

Why do we need a TSP handshake of 3 ways? For TCP connection both sides generate an initial sequence number. Both parties should exchange it and acknowledge number of the other one.
Client -> server Client: Here is my number
Client <- server Server: Alright, I got ur number and I acknowledge it, here is mine
Client -> server  Client: Ok I got ur number and I acknowledge it
    READY FOR CONNECTION

TLS handshake
Establishes encrypted connection between two parties. Before connection starts following data must be agreed on:
Client => Server Client: Hi, I would like a secure connection, I support this version of a SSL protocol
Client <= Server Server: Great, ur version is fine, here is my certificate and public key
Client => Server Client: Nice, I will verify ur certificate.(Vertification intensifies). Ok now we need a master key for our conversation, I will generate it. I will take ur public key and use it to encrypt our master key in a message. If u have a correct private key u will be able to de-cypher it.
Client <= Server Server: Done
Client => Server Client: Doing a test run, im encrypting my message with a master key, send me decrypted version of the message
Client <= Server Server: Here you go, and I think we have a secure connection now.
How to get such a certificate? You apply and Certificate Authority through a validation process establishes ur identity and ur ownership of the website. Besides security benefits verified websites are ranked higher by Google. 
If your website contains payments, then it has to be PCI(payment card industry) complient, and TSL is one of the dozen requirements.

Response