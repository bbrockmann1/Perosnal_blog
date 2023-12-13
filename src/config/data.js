export const blogList = [
  {
    id: 1,
    title: 'Improving Security with Iptables in Linux',
    category: 'Security',
    subCategory: ['Linux', 'OS', 'Debian', 'Ubuntu'],
    createdAt: 'December 10, 2023',
    cover: '/assets/images/iptables-filter.jpeg',
    description: [
      {
        type: "text",
        value: "I recently started hosting my own web server using my Raspberry Pi and Apache. I quickly realized that as soon as I got the web server facing the public, there were a few malicious IPs every day trying to probe my website for exploits. I quickly realized how important security is for devices that connect to the internet. Iptables is the solution I went with to make firewall rules to only allow traffic that I permit. This blog will go over the installation and configuration for Iptables."
      },
      {
        type: "text",
        value: "So how does Iptables work? Iptables is firewall software built into most Linux distros by default. With Iptables, you can set a set of rules, called 'chains', that will filter your network traffic based on the rules you set. For me and my Raspberry Pi OS, Iptables was not installed by default. So let's check to see if iptables is installed with this command:"
      },
      {
        type: "image",
        value: "/assets/images/iptables-v.jpg"
      },
      {
        type: "text",
        value: "We can now see Iptables is installed. If Iptables is not installed on your OS, you can run 'sudo apt update' to update packages before installation and then 'sudo apt install iptables' to install. Now that Iptables is installed, let's look at what rules are in place with 'sudo iptables -L -v'. With this command, we can see what rules are in place. The '-L' option is used to list all rules, and the '-v' option shows the rules in a more detailed layout."
      },
      {
        type: "image",
        value: "/assets/images/iptablesRules.png"
      },
      {
        type: "text",
        value: "Here we see there are no rules in place yet. But by looking at the chains, we can see there are rules for incoming, outbound, and redirect traffic. In this blog, we will be focusing on the INPUT chain. We can also see the policy for this chain is 'ACCEPT'. This is the default policy by Iptables that allows all incoming traffic. This isn't the best policy since we should only allow the traffic we permit."
      },
      {
        type: "image",
        value: "/assets/images/48314e2db460ff5b0181e0271480bab5.png"
      },
      {
        type: "text",
        value: "Here is our first rule to drop all incoming traffic. The '-P' option specifies the policy we wish to use, applied to the INPUT chain, dropping all traffic. So now all traffic is dropped, and we can set our rules to allow the traffic we want."
      },
      {
        type: 'text',
        value: "It is also very important to note that ORDER MATTERS WHEN MAKING IPTABLE RULES. When an incoming packet arrives at your OS, the packet is filtered through each rule you set in your chain. If your first rule is to allow traffic over port 80, and your second rule is to block a specific IP, your IP will NOT be blocked. This is because order matters. The packet is filtered through the first rule allowing traffic over port 80, thus potentially letting a banned IP establish a connection with the server. It is critical to understand append and input. To input a rule (using '-I') means you will input that rule at the top of your rule chain. When you append a rule (using '-A'), you append that rule to the end of your chain."
      },
      {
        type: "image",
        value: "/assets/images/2cae1e63d89edeb6620f98fc4f68398e.png"
      },
      {
        type: "text",
        value: "Here we add a couple of rules to allow traffic on a few ports. Let's break down one of these commands. The '-A' option specifies we will append this rule to the end of the INPUT chain. '-p' specifies the protocol, in this case, we want TCP. '--dport' specifies the port that will be open. These rules allow 22 for SSH, 80 for HTTP, and 443 for HTTPS. Finally, there is the '-j' option which is used to specify the action to be taken if a packet matches the rule. In this case, it will be accepted if a packet matches that rule."
      },
      {
        type: "text",
        value: "With the basic syntax out of the way, let's take a look at one more important rule: banning an IP. Keeping in mind that order matters with Iptable rules, if you want to ban an IP, you should insert the rule at the top of your chain like so:"
      },
      {
        type: "image",
        value: "/assets/images/505603c4f0e92c89c26c1caa3b0b50f3.png"
      },
      {
        type: "text",
        value: "With some basic rules in place, it is important to know that these rules are saved in memory. Meaning when the system reboots, your firewall rules will be gone. You could save the rules to a config file and restore them each time your system reboots, or you could install iptables-persistent to take care of that each time your system reboots. Run the command 'sudo apt install iptables-persistent'."
      }
  ]
  },
  {
    id: 2,
    title: 'How I Use React Router DOM',
    category: 'Development',
    subCategory: ['Web dev', 'React', 'Single Page Application', 'Internet'],
    createdAt: 'December 11, 2023',
    cover: '/assets/images/react-routing.jpg',
    description: [
        {
            type: 'text',
            value: "React Router is an invaluable tool for any React application. It seamlessly routes all pages throughout your app while only loading the elements that need to be loaded. In this blog, I'll go over how I used React Router v6 in this project: everything from installation to routing and dynamic endpoints. I will share relevant snippets of code in this blog, but if you want to see the code in its entirety, you can find it on my GitHub."
        },
        {
            type: 'text',
            value: "To start off, let's install React Router. This is pretty easy with npm or Yarn. Type either 'npm i react-router-dom' or 'yarn add react-router-dom'. Now that React Router is installed, let's add it to our project. First, go to your index.js file and import BrowserRouter. This component gives all the functionality of routing to your app. Just wrap the <BrowserRouter></BrowserRouter> component around your <App/> component, and your app now has the ability to render specific components based on the URL."
        },
        {
            type: 'image',
            value: '/assets/images/browser-router.png'
        },
        {
            type: 'text',
            value: "Now that our app has routing capabilities, let's add a couple of routes to our project. To define a route, you need to wrap all of your routes in the <Routes/> component. Then you can define a <Route/> by adding a path and element as props. Don't forget to import these at the top of your file. A lot of the time, these are imported automatically as you use them in your IDE."
        },
        {
            type: 'image',
            value: '/assets/images/routes.png'
        },
        {
            type: 'text',
            value: "Here we see that a route is defined with a path and the component we want to route to. Next, let's talk about how we get to these endpoints. You can easily type these endpoints into your browser, but when we use websites, we expect links and buttons to help us navigate. So now we can set up a <Link/> component to help the user route through the website, similar to an onClick event."
        },
        {
            type: 'image',
            value: '/assets/images/link.png'
        },
        {
            type: 'text',
            value: "Here we see how we can use our <Link/> tag to route traffic as if it were an onClick event. This is the code for the 'Go Back' button that you see in the top left of your screen. By wrapping the 'Go Back' span in the link tag, it gives the user the ability to click the button and route back to a destination of your choosing by using the 'to=' prop. It's also important to note that you must import the Link component at the top of your page if you want to use it."
        },
        {
            type: 'text',
            value: "Finally, let's look at how we can dynamically route. Full-stack applications require developers to fetch a resource from an API and route traffic based on an attribute such as a slug or ID. Below, you can see how I use a <Link/> tag to dynamically render a blog based on its ID"
        },
        {
            type: 'image',
            value: '/assets/images/route-id.png'
        },
        {
            type: 'text',
            value: "Here is the code for a blog item that you see on the homepage of this website. As you see, I'm passing in a blog object that also includes the ID. I wrap the entire blog item in the <Link/> tag so that anywhere you click on that card will lead you to that blog. The important bit is on line 10. Using the ID from the blog object we import into this component, we can interpolate the endpoint so it's dynamic. If the blog's ID is 1, then the endpoint will be /blog/1. All you have to do is take the info from an object and interpolate it into the 'to=' endpoint."
        },
    ]
},
{
  id: 3,
  title: 'Integrating Fail2ban Into Your Network',
  category: 'Security',
  subCategory: ['Linux', 'OS', 'Debian', 'Ubuntu'],
  createdAt: 'December 12, 2023',
  cover: '/assets/images/fail2ban-cover.png',
  description: [
    {
      type: 'text',
      value: "Fail2ban is a great way to harden your Linux OS against attackers that probe the open internet for insecure systems. Fail2ban is an intrusion software framework that works alongside iptables, designed to prevent brute-force attacks from malicious IPs attempting to SSH into your OS. After setting up my iptables firewall rules, I came across Fail2ban and integrated it into my OS. This post serves as a short guide for installing and configuring Fail2ban."
    },
    {
      type: 'text',
      value: "First things first, start by upgrading packages before installing Fail2ban. Run the command 'sudo apt update', and then install Fail2ban by running the command 'sudo apt install fail2ban'. If you would like to verify that Fail2ban was installed correctly, you can run 'sudo systemctl status fail2ban.service'."
    },
    {
      type: 'image',
      value: '/assets/images/fail2ban-service.png'
    },
    {
      type: 'text',
      value: "With this command, we can see that Fail2ban was installed, but the service is not running as there are no configurations for it yet. Fail2ban has different options for configuration. Like iptables, Fail2ban's configuration is not persistent by default. You can find all configuration settings in the jail.conf file, but configuring Fail2ban in this file will not save changes over reboots. Fail2ban recommends copying and creating a file called jail.local to make configurations persistent across reboots. You can do this by running this command 'sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local'. With your new jail.local file, 'sudo nano -l /etc/fail2ban/jail.local' (the -l tag gives us lines in our editor that will make finding configurations easier)."
    },
    {
      type: 'image',
      value: "/assets/images/fail2ban-bantime-inc.png"
    },
    {
      type: 'text',
      value: "At line 47, we find the bantime increment section. This configuration setting allows for a ban time that follows a formula that adds more ban time for each failed attempt from a previously banned IP."
    },
    {
      type: 'image',
      value: '/assets/images/fail2ban-ignore-ip.png'
    },
    {
      type: 'text',
      value: "The next section to look for is the ignore IP config at line 89. This section ignores certain IPs from being banned if there are too many attempts. If you are using a VPS through a service like Linode, you should add the public IP address you plan on connecting to that machine. Note, the address that is listed there by default is the loopback address to prevent banning local servers or the system itself."
    },
    {
      type: 'text',
      value: "And that's it. These are basic configurations that will get your Fail2ban service up and running. This is a large config file that has lots of different options so don't be afraid to dig around for settings that are a better fit for your network. Now running the 'sudo systemctl status fail2ban.service' should give you an active message showing your service is now running."
    },
    {
      type: 'image',
      value: '/assets/images/fail2ban-active.png'
    },
    {
      type: 'text',
      value: "There was one problem for me, however. After following the basic configurations above, my service would not start. The problem had to do with the types of logs that my Linux distro was using. Many guides I saw expect your logs to be in the /var/log/auth.log directory; however, my distro uses journalctl for its logging. By going to line 281 and adding the correct directory, I was able to start my service. This might be something worth looking into if your Fail2ban service doesn't start on the first go."
    }
  ]
},
{
  id: 4,
  title: 'How to Clone Your Linux OS',
  category: 'IT',
  subCategory: ['Linux', 'OS', 'Debian', 'ISO'],
  createdAt: 'December 12, 2023',
  cover: '/assets/images/hard-drive.jpg',
  description: [

  ]
}
];
