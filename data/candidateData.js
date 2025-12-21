export const candidateData = {
  // Basic Information
  navName: "Md. Shahjahan",
  firstName: "Md. Shahjahan",
  lastName: " ",
  
  // Taglines & Slogans
  tagline: "For Change",
  campaignSlogan: "Vote for Change",
  partySlogan: "Bangladesh Zindabad",
  
  // Images
  images: {
    logo: "/shahjahan/pic_1.png",
    hero: "/shahjahan/pic_1.png",
    about: "/shahjahan/pic_2.jpg",
    banner: "/shahjahan/cover1.jpg",
    banner2: "/shahjahan/bnp_logo.png",
    electoralSymbol: "/shahjahan/marka.jpg",
    bnpPoster: "/shahjahan/Bnp.jpg",
    getInvolved: "/shahjahan/shahjahan_last.png",
    sideImage: "/shahjahan/bnplogo.png"
  },
  
  // Bio & Description
  bio: {
    short: "Committed to serving Noakhali-04 with integrity, justice, and progress. Join us in building a better future for our constituency.",
    long: [
      "Md. Shahjahan is a dedicated political leader representing Noakhali-04 under the Bangladesh Nationalist Party. He has actively worked to improve local infrastructure, education, and healthcare while advocating for transparency and accountability in governance.",
      "His vision is simple yet powerful: a Noakhali-04 where every citizen has access to opportunities, justice is upheld, and development benefits all communities."
    ],
    aboutTitle: "Rooted in Noakhali, Driven by Progress."
  },
  
  // Skills & Expertise
  skills: {
    left: [
      "Community Leadership",
      "Education Advocate",
      "Policy Development"
    ],
    right: [
      "Infrastructure Planning",
      "Youth Empowerment",
      "Economic Growth Strategy"
    ]
  },
  
  // Experience
  experience: {
    years: "40+",
    label: "Years of Service"
  },
  // Video(s)
  // Replaced single video with an array of videos. The old `video` key is kept for backward compatibility (it mirrors the first video).
  videos: [
    {
  title: "BNP Nomination Announcement – Noakhali Subarnachar 4",
  description: "Md. Shahjahan shares his reaction after being officially selected as the BNP candidate for Noakhali–Subarnachar 4 constituency.",
  url: "https://www.youtube.com/embed/PZGM_IqSnOo",
  thumbnail: "/humam/video_thumb1.jpg"
},
{
  title: "Support From District BNP Leadership",
  description: "Statement of support from A.B.M. Zakaria, Joint Convenor of the District BNP, for the candidate and the BNP.",
  url: "https://www.youtube.com/embed/R1dHf-Iq7zo",
  thumbnail: "/humam/video_thumb2.jpg"
},
{
  title: "Md. Shahjahan on Politics & Vision",
  description: "The candidate discusses his political stance, future plans, and dedication to public service.",
  url: "https://www.youtube.com/embed/L-PArWRH1VQ",
  thumbnail: "/humam/video_thumb3.jpg"
}

  ],
  // Video
  video: {
    title: "A Message from Md. Shahjahan",
    description: "Listen to the vision for Noakhali-04 directly from your candidate.",
    url: "https://www.youtube.com/embed/Ub_kbudLFbM",
    thumbnail: ""
  },
  
  // Manifesto
  manifesto: {
    title: "Our Manifesto",
    description: " Key initiatives for sustainable development and better governance in Noakhali-04.",
    items: [
      {
        title: "Transparent Governance",
        description: "Ensuring accountability and integrity at every level of local government.",
        icon: "Users"
      },
      {
        title: "Economic Development",
        description: "Creating jobs, supporting small businesses, and improving infrastructure.",
        icon: "CheckCircle2"
      },
      {
        title: "Education & Youth",
        description: "Investing in quality education and empowering the next generation.",
        icon: "CheckCircle2"
      }
    ]
  },

  manifesto1: {
    title: "Our Manifesto",
    description: "Topic-based policies and commitments for Noakhali-04",
    // topics: order determines the tab order; first topic will be opened by default
    topics: [
      // inside candidateData.manifesto.topics — replace the noakhali-sadar entry with this:
      {
        slug: "noakhali-sadar",
        title: "Noakhali Sadar",
        icon: "MapPin",
        summary: "The candidate's vision is to build a modern, high‑tech, livable town/city in the constituency, focusing on comprehensive development of Noakhali Sadar.",
        sections: [
          {
            title: "Transportation Infrastructure",
            bullets: [
              "Establish a modern, international‑standard inter‑district bus terminal on the Maijdee–Chowmuhani road.",
              "Build a new truck terminal to properly handle freight and reduce congestion in the city center."
            ]
          },
          {
            title: "Education and Skills",
            bullets: [
              "Create a skilled workforce development institute and run a crash program for job creation.",
              "Upgrade the quality of education in schools, colleges and madrasahs with teacher training and modern resources."
            ]
          },
          {
            title: "Healthcare and Social Services",
            bullets: [
              "Upgrade hospitals, clinics and health centre infrastructure and services.",
              "Set up one‑stop service centres for land registration, education, health, expatriate welfare, civil services and related civic tasks."
            ]
          },
          {
            title: "Urban Modernization & Technology",
            bullets: [
              "Implement the plan to develop a modern city with essential facilities and urban services.",
              "Establish an IT / Hi‑Tech Park and a Software Technology Park (STP) to create high‑tech jobs for educated youth.",
              "Ensure reliable, modern electricity and gas supply across the city."
            ]
          },
          {
            title: "Culture & Recreation",
            bullets: [
              "Build a modern Cultural and Sports Complex to provide healthy recreation and opportunities for youth.",
              "Support community arts and cultural programs to celebrate local heritage."
            ]
          },
          {
            title: "Land & Environment",
            bullets: [
              "Implement waterlogging mitigation and flood protection measures to protect agricultural land and urban areas.",
              "Adopt sustainable land‑use planning and preserve important green/open spaces."
            ]
          }
        ],
        cta: {
          title: "Get involved",
          text: "Help implement these plans — volunteer, donate, or join a working group to bring practical solutions to Noakhali Sadar."
        }
      },
      {
        slug: "sikkha",
        title: "Education",
        icon: "BookOpen",
        summary:
          "Expand access to quality education at every level — from primary schools to universities — and equip students with modern skills for employment.",
        sections: [
          {
            title: "Establishment of New Centers",
            bullets: [
              "Set up 10 new academic centers across Sonapur, Amirabad and other remote areas to improve access to schooling and adult education.",
              "Create safe, child-friendly classrooms and playgrounds through community participation to support healthy mental and physical growth."
            ]
          },
          {
            title: "Higher Education Expansion",
            bullets: [
              "Establish a university within the constituency to broaden higher education access locally.",
              "Create an Engineering & Technology College (ETC) and a Technical College (TC) to train skilled professionals."
            ]
          },
          {
            title: "Digital Education & Skills",
            bullets: [
              "Expand IT education and modern digital learning tools in schools and colleges.",
              "Provide career support and placement assistance for graduates to improve job outcomes."
            ]
          },
          {
            title: "Women's & Teacher Development",
            bullets: [
              "Establish a new Noakhali Government Women’s College campus with academic and residential facilities.",
              "Create modern teacher/principal training manuals and regular professional development programs."
            ]
          },
          {
            title: "Support for Non-Government & Madrasah Education",
            bullets: [
              "Take measures to include eligible madrasahs in the MPO system and modernize their infrastructure.",
              "Improve pay and protections for teachers and staff at non-government institutions (MPO support and other benefits)."
            ]
          },
          {
            title: "Technical & Primary Education",
            bullets: [
              "Set up engineering and five new technical & vocational colleges affiliated with the local technical university (NSTU).",
              "Promote primary school enrollment with door-to-door outreach and an annual 'school bag' program to reduce dropouts."
            ]
          },
        ],
        cta: {
          title: "Support Education",
          text: "Join teacher training drives, sponsor a school bag, or help open a learning center in a remote community."
        }
      },

      {
        slug: "jogajog",
        title: "Communication & Transport",
        icon: "Phone",
        summary:
          "Improve connectivity across the constituency — upgrading roads, bridges and water transport to boost trade, safety and mobility.",
        sections: [
          {
            title: "Road & Railway Projects",
            icon: "truck",
            bullets: [
              "Expand the railway line from Noakhali station to the beach area of Subarnachar to improve regional links.",
              "Upgrade the Maijdee → Hatia → Subarnachar main road and all feeder roads to modern standards."
            ]
          },
          {
            title: "Bridges, Culverts & Flood Resilience",
            icon: "mappin",
            bullets: [
              "Construct essential bridges and culverts (including a bridge over the Ilishi river) to connect remote areas and ensure year‑round access.",
              "Implement water management works to protect roads and agricultural land from flooding and erosion."
            ]
          },
          {
            title: "Traffic & Freight Infrastructure",
            icon: "truck",
            bullets: [
              "Widen and reconstruct congested roads and introduce traffic management projects at bottleneck points.",
              "Develop dedicated truck and freight terminals to reduce city center congestion and improve logistics."
            ]
          },
          {
            title: "Water Transport & Connectivity",
            icon: "phone",
            bullets: [
              "Introduce a scheduled water transport route linking Dhaka — Chittagong — Noakhali Sadar — Char Jabbar — Subarnachar (via Barishal route) to expand trade and passenger options.",
              "Strengthen local road networks to integrate water and land transport nodes."
            ]
          }
        ],
        cta: {
          title: "Improve Connectivity",
          text: "Support local infrastructure committees, report problematic roads, or sponsor a small bridge/community culvert project."
        }
      },

      {
        slug: "shashtho",
        title: "Health",
        icon: "Heart",
        summary:
          "Raise the standard and reach of healthcare by expanding facilities, staffing hospitals properly, and ensuring affordable medicines and services.",
        sections: [
          {
            title: "Healthcare Capacity & Infrastructure",
            icon: "heart",
            bullets: [
              "Expand bed capacity across hospitals and clinics, aiming for at least 250 beds across the constituency's major facilities.",
              "Upgrade equipment and renovate facilities at district and upazila health centers."
            ]
          },
          {
            title: "Medicines & Affordability",
            icon: "heart",
            bullets: [
              "Ensure free or heavily subsidized essential medicines are available at public hospitals and health complexes.",
              "Establish transparent supply chains to prevent stockouts of critical drugs and supplies."
            ]
          },
          {
            title: "Workforce & Services",
            icon: "users",
            bullets: [
              "Recruit and retain health professionals for both government and non-government hospitals and clinics.",
              "Introduce telemedicine programs and specialist visit schedules to reach remote communities."
            ]
          },
          {
            title: "Health Promotion & Investment",
            icon: "heart",
            bullets: [
              "Encourage public–private investment in quality health services and promote preventive health campaigns across the constituency.",
              "Run regular community health education drives focusing on maternal & child health, vaccination, and disease prevention."
            ]
          }
        ],
        cta: {
          title: "Support Health",
          text: "Volunteer for health camps, donate medical supplies, or help sponsor a telemedicine outreach visit."
        }
      },

      {
        slug: "seba",
        title: "Good Governance & One‑Stop Services",
        icon: "ShieldCheck",
        summary:
          "Bring government services closer to citizens, fight corruption through transparency, and modernize public offices so people get efficient, friendly service.",
        sections: [
          {
            title: "Transparency & Anti‑Corruption",
            icon: "helpcircle",
            bullets: [
              "Introduce public monitoring for major government activities and publish performance data to reduce corruption.",
              "Create channels for citizens to report problems and track responses openly."
            ]
          },
          {
            title: "One‑Stop Service Centers",
            icon: "helpcircle",
            bullets: [
              "Establish One‑Stop Service Centers at the Upazila level to resolve land, education, health, expatriate welfare and civil service issues quickly.",
              "Digitize common public services so routine tasks can be completed online and via mobile units."
            ]
          },
          {
            title: "Police & Public Safety Modernization",
            icon: "shieldcheck",
            bullets: [
              "Modernize the Sadar Police Station to be more citizen‑friendly and efficient, improving response times and community policing.",
              "Provide training and equipment to frontline public servants to deliver faster, humane services."
            ]
          },
          {
            title: "Local Administrative Reform",
            icon: "helpcircle",
            bullets: [
              "Streamline administrative procedures and reduce unnecessary paperwork so citizens spend less time resolving basic needs.",
              "Introduce performance targets for public offices and regular independent audits."
            ]
          }
        ],
        cta: {
          title: "Demand Better Services",
          text: "Help set up digital kiosks, join a transparency watchdog group, or support the local one‑stop center rollout."
        }
      },
      {
        slug: "subarnachar",
        title: "Subarnachar",
        icon: "Leaf",
        summary:
          "Sustainable development for riverine and island communities — improving infrastructure, protection, livelihoods, health and education in Subarnachar.",
        sections: [
          {
            title: "Infrastructure Development",
            bullets: [
              "Immediately develop essential infrastructure: modern drains, culverts, and reliable drinking-water systems to improve residents' quality of life.",
              "Implement climate-resilient construction and durable local infrastructure tailored to the island environment."
            ]
          },
          {
            title: "Coastal Protection",
            bullets: [
              "Adopt a long-term program to prevent river erosion and saline intrusion by constructing embankments, sluice gates and coastal defenses.",
              "Restore and protect agricultural land through sustainable land-management measures."
            ]
          },
          {
            title: "New River Port",
            bullets: [
              "Build a new river port near Subarnachar to expand trade, reduce transport costs and stimulate local commerce.",
              "Integrate port development with local road and market infrastructure to maximize economic impact."
            ]
          },
          {
            title: "Rehabilitation & Resettlement",
            bullets: [
              "Design and implement well-planned rehabilitation and resettlement programs for families displaced by river erosion and natural disasters.",
              "Provide secure land tenure and livelihood support to relocated families to ensure long-term stability."
            ]
          },
          {
            title: "Land Nationalization",
            bullets: [
              "Recognize and secure newly formed char lands through national-level policies to protect farmers and settlers.",
              "Ensure fair land rights and access to public services for char residents."
            ]
          },
          {
            title: "Healthcare Upgrade",
            bullets: [
              "Upgrade Subarnachar Hospital from 50 to 100 beds and improve on-site accommodation and facilities for doctors and healthcare staff.",
              "Expand basic health services and emergency care to ensure timely treatment for island communities."
            ]
          },
          {
            title: "Education & Training",
            bullets: [
              "Establish an IT / Hi‑Tech institute in Subarnachar to train youth for technology-sector jobs.",
              "Open 10 new primary schools in newly emerged char areas to improve access to basic education.",
              "Construct a 500‑seat multi-purpose auditorium/stadium and build a youth training center with playgrounds and a rest house."
            ]
          },
          {
            title: "Industry & Livelihoods",
            bullets: [
              "Develop a ship-breaking and ship-building industrial zone accessible by river/sea to create thousands of jobs.",
              "Set up cottage industry zones to process local raw materials and boost small-business income.",
              "Establish technical and vocational training institutes focused on fishing, agriculture, livestock and poultry skills."
            ]
          },
          {
            title: "Farmer Support & Digital Markets",
            bullets: [
              "Create a dedicated digital platform at Upazila level to enable direct paddy sales from farmers to the government, removing intermediaries.",
              "Provide training and technology to improve agricultural and aquaculture productivity on the chars."
            ]
          }
        ],
        cta: {
          title: "Support Subarnachar",
          text: "Join efforts for sustainable development in Subarnachar — support rehabilitation, education and local enterprise initiatives."
        }
      },

      {
        slug: "national-commitment",
        title: "National Commitment & Final Plea",
        icon: "Globe",
        summary:
          "A national pledge to prioritize citizens' welfare, social justice, security and dignity — and a call to voters to support development and stability.",
        sections: [
          {
            title: "Priority to Public Needs",
            icon: "globe",
            bullets: [
              "Resolve conflicts and issues through public consultation and transparent decision-making.",
              "Prioritize public-interest projects that address citizens' most urgent needs."
            ]
          },
          {
            title: "Social Equity & Justice",
            icon: "users",
            bullets: [
              "Extend social safety nets and welfare services to genuinely needy households and strengthen support for small traders.",
              "Establish high‑level committees to address the problems of vulnerable groups and ensure fair implementation of programs."
            ]
          },
          {
            title: "Counter‑Terrorism & Security",
            icon: "globe",
            bullets: [
              "Take a firm stance against terrorism and extremism while maintaining continuous vigilance.",
              "Strengthen law enforcement capacity to protect communities and uphold public order."
            ]
          },
          {
            title: "Human Values & Dignity",
            icon: "users",
            bullets: [
              "Promote honesty, human values and communal harmony through policies that protect marginalized communities.",
              "Ensure mechanisms are in place to prevent and remedy injustice or oppression against vulnerable groups."
            ]
          },
          {
            title: "Final Plea to Voters",
            icon: "globe",
            bullets: [
              "The campaign symbol represents development and peace — a promise to pursue progress for both urban and char communities.",
              "A humble appeal to voters: participate in the election and support the path to lasting development and dignity.",
              "The candidate pledges to keep citizens' hopes at heart and serve the public with dedication."
            ]
          }
        ],
        cta: {
          title: "Join the Commitment",
          text: "Support national and local initiatives for development and justice — vote, volunteer, or help your community prepare for a better future."
        }
      },
      
    ]
  },

  
  // Contact Information
  contact: {
    address: {
      line1: "Noakhali-04 Constituency Office",
      line2: "Noakhali, Bangladesh"
    },
    phone: "+880 1711 111111",
    email: "office@mdshahjahan.com"
  },
  
  // Social Media
  socialMedia: {
    facebook: "https://www.facebook.com/mdshajahanmp/",
    twitter: "#",
    instagram: "#",
    youtube: "#"
  },

  // Party Information
  party: {
    name: "Bangladesh Nationalist Party",
    abbreviation: "BNP",
    description: "Committed to serving the people and upholding the values of the Bangladesh Nationalist Party."
  },
  
  // Footer
  footer: {
    copyright: "© 2025 Md. Shahjahan. All rights reserved.",
    officeLabel: "Political Office"
  },
  
  // Calendar
  calendar: {
    embedUrl: "https://calendar.google.com/calendar/embed?src=1fafa8ab28415db6a09b018be97495592b38dba0cf79e60af85612ddcfc83e27%40group.calendar.google.com&ctz=Asia%2FDhaka"
  },

  // Gallery
  gallery: {
    images: [
      
      {
        id: 1,
        src: "/shahjahan/gallery/engagement1.jpg",
        alt: "Events",
        category: "Events"
      },
      {
        id: 2,
        src: "/shahjahan/gallery/event1.jpg",
        alt: "Events",
        category: "Events"
      },
      {
        id: 3,
        src: "/shahjahan/gallery/event2.jpg",
        alt: "Events",
        category: "Events"
      },
      {
        id: 4,
        src: "/shahjahan/gallery/statement1.jpg",
        alt: "Statement",
        category: "Statements"
      }
    ],
    categories: ["All", "Events", "Rallies", "Meetings", "Media","Statements"]
  }
}

