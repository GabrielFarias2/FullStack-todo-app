# A Programmer’s Guide to the Internet

Embark on a journey to understand what actually happens when you open an internet browser, type in a website URL, and hit Enter. 

This journey reveals the interconnected components that work together to create what we experience when we connect to the internet.

---

## Chapter 1 - The Client

You are a user.

One day, as usual, you log onto your computer to access the modern marvel we call the internet. 

You open a browser, perhaps Chrome, Firefox, or another, and type in a web address—maybe your favorite site, YouTube, to watch [smoljames](https://www.youtube.com/smoljames). In this moment, you become **A USER**.

You are a user who uses things. 

And your browser is referred to as the **CLIENT**. 

More generally, the client is any medium through which you interact the internet. A videogame per say would also be an acceptable client.

And the [Smoljames Channel](https://www.youtube.com/smoljames), or any other website that loads up in your browser is called the **FRONTEND**. The frontend is simply the visible and tangible interface the user can interact with.

### In Summary

* You are a **User**
* The browser e.g. firefox through which you access the internet is the **Client**
* And the websites you see are the **Frontend**

---

## Chapter 2 - The Network

So we now understand a bit about the client. And this lets us introduce another concept called *client-side*.

When code is run or actions are performed in your browser or on your device, they’re done in an environment accessible to the user. These operations are referred to as *client-side*.

> *Many websites run JavaScript in the background to load properly, and as this code is run in your browser on the client, they are client-side!*

But now the question arises... If we have a client side, then what is on the other side or sides? 

And also, where are these sides, and how do they communicate?

Great questions! I'm glad you asked :D

### The Internet

To answer your questions, first we need learn about the internet.

You might think of the internet as the ability to go to websites, communicate online, play video games with others, watch YouTube, and save stuff to the cloud. 

And if that's the case, then you're already half way to the complete answer.

This doesn't explain what you're actually connecting to.

When your computer connects to WiFi, or your phone has 3G/4G/5G access — what is that, exactly?

At it's core, both of these are what we call **NETWORKS**.

A network is a web of encrypted signals transmitted either through cables or as electromagnetic waves through the air.

Once authenticated, devices can interpret these signals.

Some signals come from WiFi routers; others from local cell towers. Eventually, nearly all signals connect to a global network of fiber optic cables (called the Backhaul), carrying encrypted data around the world.

Thus, the internet is a global network connecting computers, devices, and hardware to enable information exchange and access to countless services.

---

### IP Addresses & URLs

Now that we’re connected, and the user interacts with the network via a client (browser), we can dive into the original question: what happens when we type in a URL and press Enter?

Type in a URL. An URL? What on earth is an URL?

> **A URL** (Uniform Resource Locator) is a web-friendly address that helps locate something, just like a physical address.

At a high level, we can imagine that a URL locates a website perhaps. But in truth it's actually slightly more complicated.

To begin, let's break down the anatomy of a URL:

- **Domain**: The most recognizable part (e.g., google.com, hyr.sh, smoljames.com).
- **Protocol**: (http / https)
- **Subdomain**: (www, store, blog)
- **Port**: (:443, :80, :3000, :5173 | optional)
- **Path**: (/auth/dashboard)
- **Query**: (?page=4)
- **Fragment or Section**: (#about)

Each domain is mapped to an **IP ADDRESS** — a series of numbers difficult to remember, which is why URLs exist; they're much more human friendly. We use the **DNS** (Domain Naming Service) to pair domain names with IP addresses.

The domain allows us to gain access to the IP address, where the series of numbers is the metaphysical address of a device.

Every device connected to the internet has an IP address. Not all of them are linked to a URL. And the IP address of a device may change with the location of your device, or the manner in which it is connected to the internet.

---

### Network Requests

So, when you type a URL into your browser and hit Enter, you’re actually entering a physical address tied to another device. So how then does this result in a website appearing in your browser?

Another excellent question!

Upon pressing Enter, your device, the client, sends a signal called a **NETWORK REQUEST**. This request, possibly wireless, is encrypted with information defining its nature and intent.

And it leaves your computer behind, to be launched into the realm of the internet as it enters the network.

The request includes:

- **Address**: Specifies the destination.
- **HTTP Verb/Method**: Action of the request (e.g., **GET** to retrieve data, **POST** to send data, **PUT** to update/overwrite data, **DELETE** to remove data).
- **Path/Route**: Just as an address locates a home, the path is a room within it, providing specificity.

In addition to potentially many other parameters and attributes that define the request.

And with this IP address, it begins it's journey through the network to the destination, where we it encounters hardware and software known as a **SERVER**.

---


## Chapter 3 - Servers

You are the user. You interact with the internet through a client or browser, which, when connected, allows you to send network requests. These requests are sent into the internet with an address that locates a specific destination.

When we reach this destination, we encounter hardware running software known as a **SERVER**.

This probably isn’t what you expect to hear when your standard experience is simply seeing a website load on your screen. But we'll get there…

The network is cleverly set up so that IP addresses flexibly locate a device and direct requests right to their destination.

Once the request arrives, a functional server connected to the internet and set up to listen to incoming requests to its IP address can decrypt the request and execute code to determine exactly what the request intends.

If you've typed a URL into your browser, the request is typically to **GET** information — specifically, HTML code that your browser can interpret to display a website and provide the user interface, or *frontend* experience.

The server registers the intent of your request, gathers the HTML code it knows you want, and sends it back over the network, across the internet, to the address of origin specified as a property or **HEADER** of the network request — in simpler terms, a “return to sender.”

In this case, the server has literally "served" up a website, and when your browser receives the response from the server containing the HTML code, it displays it on the screen.

All of this happens in the time it takes to load a standard website, which is astonishingly quick!

---

### The Backend

When we think of servers and what they “serve” up to clients, we’re also talking about something called the **backend**.

The backend is the **server-side** of a web application. It includes the software, logic, and database interactions that run behind the scenes to process user requests and deliver the appropriate responses.

If the frontend is what the user sees and interacts with, the backend is everything else that happens behind closed doors to make the frontend functional. This includes:

- **Database Management**: Storing and retrieving data, like user profiles or posts on a social network.
- **Business Logic**: Rules and workflows that define how data should be handled and processed. For instance, calculating prices or managing permissions based on user roles.
- **Authentication and Authorization**: Ensuring that only authorized users can access certain information or perform certain actions.
- **Server Communication**: Receiving requests from the frontend, processing them, and sending the relevant responses back.

In essence, the backend powers the frontend, and together they create a complete application. Without the backend, the frontend would be a static, limited interface. The backend brings it to life by allowing it to access and interact with dynamic data and resources.

---

### Types of Servers

In my home, I run a Raspberry Pi device that’s connected to the internet and listening for incoming requests that I’ve enabled it to receive. This is a server.

Google owns facilities full of hardware running code that is set up to listen for incoming requests and then distributes processing efforts across a massive interconnected system of servers, which are essentially more machines running code. These are servers.

Serverless cloud infrastructure is simply additional hardware running more software, making it, in essence, just another server listening for incoming requests from the network. 

Many servers exist solely to send HTML code back to users interacting with the network via a client or browser. Others perform far more complex functions.

In essence, the internet is simply clients and servers connected and communicating through network requests between addresses within a network.

---

### A Network of Servers

The plot thickens when you realize that seven different services can be deployed on hardware around the world, working together via another server that coordinates all incoming network requests to achieve a single outcome: a website loading on your screen.

This is called systems architecture. We design intricate systems of hardware running software that work harmoniously to deliver a service across the internet.

---

## Chapter 4 - The Full Stack

Now, you have a website loaded on your device within your browser, referred to as the frontend. This frontend provides you with an easier interface for interacting with the internet and, ultimately, billions of servers around the world, all connected to the internet and listening for incoming requests across a network. These servers respond, and as the user, you receive and experience the information or service provided in the response.

You click the save button, sign in or create a new account, select a link, reload a page, send a friend request, or share an experience in a video game. These are **Full Stack** interactions that happen over and over again between the client side the server side; between frontend and backend. Clients and servers interact via network requests, connected across the internet, and you, the User, get to enjoy internet.