### open up browser and type in url

www.google.com is a url

uniform resource locator

what happens when you hit enter on the url


1. our browser needs to go and get the html code

browser is known as a client and is run by a user (you)

browser fetches the html code

- via a network request (internet request)

client / browser sends out a network request (request to the internet) where the internet is just one of many types of networks

saying.... what does this website look like

request goes to the address (address is the url)
 - just like mail

and the request contains information (what is the intention of the request)
 - to fetch the html code

behind every address is a server running backend code (this tutorial is about to to build these servers)

ultimately, what you experience as the internet, is just a load of computers / hardware / machines or servers, running code (which we refer to as backend code), that are listening to incoming requests that know their address

the backend is just the magic in the background that lets the user interface with the internet

sooo..... we have an address, we send out this network request to the address (www.google.com)asking for a website

that network request which is send from the client  / browser, go out into the network, it finds the address, and consequently the server running the backend code (that is listening to incoming requests), and it interprets that request which in this case is asking for html code

and then it responds. with the html code.

the html code is sent from the backend, from the server, via the network as a respond, which comes all the way back to where we started

which is your computer, your browser

and the browser then reads the html code and makes it look 
pretty as an interface on your screen that you may interact with.

hence we have a website / frontend that a user can interact with.

full stack is the frontend (what a user interfaces with on their computer which is known as the client)

plus, the backend with a whole lot of invisible magic code running in ethereal servers (other hardware) around the earth which can be reached via the network and an address (url)

### what happens when you login on a website

go to login page, as described above

then, you type in your email and password

then you click submit, and your browser probably runs some javascript to check that you have entered your email and password correctly

then, we need to check the database to see if you exist, or to create your account (this happens on a database which isn't on your device - not on the client)

the database, is just another server, some more hardware running some code (specifically a database)

to access the database, we need to go via another server

so we have 2 backend servers running

we go from the frontend, from the client, to the server with our server code, and from the server we can interact with a database on a separate server

this all just happens via network requests of one type or another

now in this case we have two backend instances, and they are simply located via their own addressses

so once we go to the first server, we then go to the database to check the user, and then back to the first server, and then back over to the client(the browser) and let the user know whether or not they can login

### what are the different types of servers very shortly

serverless computer

cloud functions

microservices

ITS ALL JUST SERVERS, configured in one way or another

backend code, runs on a server, that is connected to the internet, 


is accessible via an address, and is listening to incoming requests
