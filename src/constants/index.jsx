import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import React from "react";
import { Code2, MonitorSmartphone, LayoutDashboard, Rocket, Users, BarChart3 } from "lucide-react";
import { Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Testimonials", href: "#" },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];


export const features = [
  {
    icon: <Code2 />, 
    text: "Custom Web & App Development",
    description:
      "We build tailored websites and applications to meet your business needs, ensuring functionality and performance.",
  },
  {
    icon: <MonitorSmartphone />, 
    text: "Responsive & Multi-Platform Compatibility",
    description:
      "Our solutions work seamlessly across all devices—mobile, tablet, and desktop—for the best user experience.",
  },
  {
    icon: <LayoutDashboard />, 
    text: "Pre-Designed Templates & Custom UI",
    description:
      "Choose from modern, high-quality templates or get a fully customized UI design for your project.",
  },
  {
    icon: <Rocket />, 
    text: "Real-Time Updates & Fast Deployment",
    description:
      "Deploy your website or app quickly with real-time updates and ensure smooth, hassle-free maintenance.",
  },
  {
    icon: <Users />, 
    text: "Collaborative Project Management",
    description:
      "We work closely with clients, providing regular updates, revisions, and collaborative development processes.",
  },
  {
    icon: <BarChart3 />, 
    text: "Analytics & SEO Optimization",
    description:
      "Track user engagement, optimize SEO, and enhance performance with our built-in analytics tools.",
  },
];


export const checklistItems = [
  {
    title: "Seamless Code Integration",
    description:
      "Easily merge and integrate code across multiple development environments without conflicts.",
  },
  {
    title: "Effortless Code Review",
    description:
      "Streamline your code review process with automated tools and collaborative feedback systems.",
  },
  {
    title: "AI-Powered Development Assistance",
    description:
      "Accelerate coding and debugging with AI-driven suggestions, auto-completion, and optimizations.",
  },
  {
    title: "Quick and Secure Deployment",
    description:
      "Deploy your websites and apps with minimal downtime and maximum security in just a few clicks.",
  },
];


export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#features", text: "features" },
  { href: "#", text: "Documentation" },
  { href: "#workflow", text: "Workflow" },
  { href: "#", text: "Projects" },
  { href: "#", text: "Testimonials" },
];

export const contactLinks = [
  { href: "https://instagram.com/yourprofile", text: "Instagram", icon: <Instagram size={12} /> },
  { href: "https://twitter.com/yourprofile", text: "Twitter", icon: <Twitter size={12} /> },
  { href: "https://www.linkedin.com/in/swanjithak", text: "LinkedIn", icon: <Linkedin size={12} /> },
  { href: "mailto:contact@yourstartup.com", text: "Email: contact@yourstartup.com", icon: <Mail size={12} /> },
  { href: "tel:+1234567890", text: "Phone: +123 456 7890", icon: <Phone size={12} /> },
];

export const developmentLinks = [
  { text: "Projects" },
  { text: "Technologies" },
  { text: "Tools" },
  { text: "Best Practices" },
];
