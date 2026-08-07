import hmscImage from "../assets/hmsc.jpeg";
import vipImage from "../assets/vip.jpeg";
import targetImage from "../assets/target.jpeg";

export const experience = [
   {
      title: "Advancement Coordinator",
      company: "High Meadows School & Camp",
      description:
         "Leadership role tasked with coordinating record submissions from dozens of staff members and modernizing how camper progress was tracked and analyzed. I also previously worked as a Senior Counselor.",
      bullets: [
         "Built and modernized internal workflows for advancement tracking, roster imports, and camper progression analytics.",
         "Implemented data validation and review processes to improve record accuracy and support safer, more informed camper placement decisions.",
      ],
      tech: [
         "Staff Coordination",
         "Data Analysis",
         "Process Improvement",
         "Workflow Design",
      ],
      imageSrc: hmscImage,
      links: {},
   },
   {
      title: "Godot Team Lead",
      company: "Georgia Tech Vertically Integrated Projects",
      description:
         "Part-time role as a team leader in the Vertically Integrated Projects Program at The Georgia Institute of Technology.",
      bullets: [
         "Led and coordinated programming, art, audio, and systems design tasks across an interdisciplinary game development team.",
         "Designed and built foundational gameplay architecture and reusable systems in Godot to support continued development.",
      ],
      tech: ["Project Management", "Leadership", "Godot"],
      imageSrc: vipImage,
      links: {},
   },
   {
      title: "Technology Specialist",
      company: "Target",
      description: "Seasonal role as an in-store retail employee.",
      bullets: [
         "Diagnosed hardware and software issues and performed device configuration steps to improve first-contact resolution.",
         "Translated technical issues into clear, actionable guidance for non-technical customers in a fast-paced retail environment.",
      ],
      tech: ["Sales", "Customer Service", "Inventory Management"],
      imageSrc: targetImage,
      links: {},
   },
];
