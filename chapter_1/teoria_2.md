# A Programmers Guide To The Internet

Embark on a journey to understand what actually happens when you go to an internet browser, type in a website URL, and hit Enter. 

Understanding this journey is key to understanding all the core interconnected components that exist in harmony to create what we experience when we connect to the internet.

___________________

## Chapter 1 - The Client

You, are a user.

One day, like many other days, you log on to your computer to access the modern age wonder we call the internet.

You open up a browser, perhaps chrome, perhaps firefox, perhaps another, and as you type in a web address to load up your favorite site youtube to watch your favorite channel [smoljames](https://www.youtube.com/smoljames), you have become **A USER**.

* *A user is the individual who interacts with a system, device, or application to accomplish specific tasks or access information*

So you are a user, who uses things. Logical.

And on the other hand we have this concept known as **THE CLIENT**. So if you are a user, then what is the client?

The client is the software that enables a user to interact with what we know as the internet; so in this case, the client is commonly your web browser.

And finally, what do users using their browsers do access the internet do? They use websites.

The programmer term we use for websites is **THE FRONTEND**. The frontend is simply the face or interactive interface that a user can interact with! It's literally the front end or visible / tangible portion of web infrastructure.

### So to summarise chapter 1...

* You are a **User**
* The browser e.g. firefox through which you access the internet is the **Client**
* And the websites you see are the **Frontend**

## Chapter 2 - The Network

So we now understand a bit about the client. And this lets us introduce another concept called *client-side*.

When code is run or stuff is done in your browser or on your device, and ultimately in an environment accessible by the user, these operations are referred to as *client-side*.

They happen on your side of the equation.

* *In the context of websites, browsers, and the internet, this code is typically JavaScript!*

But now the question arises... If we have a client side, then what is on the other side or sides? 

And also, where are these sides, and how do they communicate?

Great questions! I'm glad you asked :D

### The Internet

Before we answer your questions, first we need to learn about the internet.

You might think of the internet as your ability to go to a website, communicate online, play videogames with others, watch youtube, and save stuff to the cloud. 

And if that's the case, then you're already half way to the complete answer.

What's missing, is that this explanation doesn't give any insight on what the entitity is that you connect to. When your computer connects to the wifi, or your phone has access to 3/4/5g - what exactly is that?

At it's core, both of these are what we call **NETWORKS**.

Where a network is literally encrypted electromagnetic waves or signals filling the air around all of us. And our devices, when authenticated, are allowed to read these signals.

Some signals are emitted from wifi routers, and others from your local cell towers. As some point, almost all of these signals end up in a global physical network of fibre optic cables (called the Backhaul) that carry encrypted data around the world.

So to ammend our original answer, the internet is a global network that computers, devices, and other types of hardware can connect to, allowing them to exchange information and provide access to a huge number of services and resources.

### IP Addresses & URLS

So we're connected to a network, and we as a user can interact with the network via the client which for most of us is a humble browser. Now we can really dive in to answering our original question and explaining what happens when we type in a URL and hit Enter.

But first, what on earth is a URL? (Jeepers you're really asking all the great questions today!)

**A URL IS** a Uniform Resource Locator, or in simple terms just a web-friendly address in a similar way that your physical address is an address; they're both just means of locating something.

A URL has many parts to it, just as our addresses often have a number component, a city component, an area code and so forth.

One part of a URL is called the **DOMAIN**, which is normally the most human readible and recognisable part of a URL (excluding the rest of it!).

Some examples are...

* google.com
* hyr.sh
* smoljames.com

And some other parts the protocol (http / https), the subdomain (www, store, blog), the port (:443, :80, :3000, :5173 | optional), the path (/auth/dashboard), the query (?page=4) and the fragment or section (#about).

And every domain is mapped to what is known as an **IP ADDRESS**.

Now an IP address is the legit version of the address (where the URL is more like a human friendly version). And the reason they are distinct is because every connected device on the planet has an IP address, but not all of them have associated URLs.

An IP address is typically a series of numbers which is much harder for humans to remember, hence the URL. 

Domain names within URLs are mapped to these IP addresses via the **DNS**, which is the Domain Naming Service.

### Network Requests

So that means that when I type a URL into my browser to load a website, I'm actually typing in a physical address paired to another device? How on earth does that make any sense? And why is the outcome of that a website appearing in my browser?

More good questions, you really are quite the inquisitive student!

When you hit Enter after typing in the address, a few things happen. First, your device emits a signal (if over a wireless network then it's literally an eletromagnetic signal) known as a **NETWORK REQUEST**. 

Quite literally, it is making a request to the network, where there are many different networks such as the local network, a global network, a military network or a mobile network.

This network request is encrypted with lots of different information that defines the nature and intent of the request as it is sent out into the ether.

Obviously one property is the address, which determines to where the network request should go.

Another common example is what is known as the **HTTP VERB or METHOD**. Verbs are action words, and as such, these verbs describe the action of the request. For example, if the request is intented to *get* information, then it is likely a **GET** request. If the request is sending information, then it might be a **POST** request. **PUT** requests are for putting new information where there was already something before, potentially updating or overwriting, and **DELETE** requests are for, you guessed it, deleting information or data.

And another is the URL **PATH** or **ROUTE**. The domain name within the URL gives us access to the IP address and the path is analogous to a room within a home. The address locates the home, and the room is an area within that address, just as the route or path provides even more specificity as to where this network request is to go!

However instead of having a house at the end of the address, we have what is known as a **SERVER**.

## Chapter 3 - Servers

So you are the user. You interact with the internet via a client or browser, which when connected, allows you to interact with the network via network requests. These network requests go in to the internet network with an address that locates a destination.

When we reach the destination, we encounter some hardware running some software which is known as a **SERVER**.

This probably isn't what you expect to hear when you standard experience is seeing a website loading on your computer. But we'll get there...

The way the network is setup is super clever, where IP addresses flexibly locate a device and direct this request right to their door.

Once arrived, a functional server that is connected to the internet and is setup to listen to incoming requests to it's IP address, can then decrypt the request and run some code to see what exactly the intention of the request was.

If you've typed in a URL in your browser, then the request emitted is typically to **GET** information, specifically some HTML code that can be intepreted by your browser to display a website and give the user the frontend experience.

The server registers the intent of your request, and gets together it's HTML code that it knows you want, and sends it back over the network, across the internet to the address of origin specified as a property or **HEADER** of the network request - return to sender in simpler terms.

In this case, the server has literally served up a website, and when your browser gets the response back from the server containing the HTML code, it can then display it on the screen.

All this happens in the time it takes to load a standard website, which is unfathomably quick!

### Types of Servers

In my home, I run a raspberry pi device that is cleverly connected to the internet and is listening to incoming requests that I have enabled it to receive. This is a server.

Google owns facilities full of hardware running code that is setup to listen to incoming request, and then distribute any processing efforts across a huge interconnected system of servers, which are just more machines running code.

Serverless cloud infrastructure is just more hardware running more software, which ultimately just makes it another server listening to incoming requests from the network.

Many of these servers exist with the sole intention of sending HTML code back to users interacting with the network via a client or browser. Others do a whole lot more.

The internet is just clients and servers connected to and communicating via addresses in a network.

### A Network Of Servers

And the plot thickens when you realise that you can have seven different services all deployed on different hardware around the world working via another server that serves to coordinate all incoming network requests to achieve the same outcome; a website loading on a screen.

This is called systems architecture. We design intricate systems of hardware running software that work harmoneously with one-another to deliver a service across the internet.

## Chapter 4 - The Full Stack

And now you have a website that is called a frontend loaded on your device, inside your browser. And all this frontend does is provide you and easier interface for interacting with the internet, and ultimately billions of servers around the world that are all connected to the internet, and are listening for incoming requests across a network to which they respond, and we as the user, receive and experience the information or service provided within said response.

You click the save button, you sign in or create a new account, you select a link, you reload a page, you send a friend request, you share an experience in a video game. Clients and servers interacting via network requests, connected to the internet.
4G