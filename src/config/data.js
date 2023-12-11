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
    title: 'How to Host a Website With Apache',
    category: 'Hosting',
    subCategory: ['Web Hosting', 'Linux', 'Debian', 'Apache'],
    createdAt: 'December 11, 2023',
    cover: '/assets/images/apache.png',
    description: [

    ]
  }
];
