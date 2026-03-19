import { Grant, Organization } from "../types";

export const generateGrants = async (query: string): Promise<Grant[]> => {
  // try {
  //   const response = await fetch(`/api/grants?q=${encodeURIComponent(query)}`);
  //   if (!response.ok) throw new Error("Network response was not ok");
  //   return await response.json();
  // } catch (error) {
  //   console.error("Error fetching grants:", error);
  //   return [];
  // }

  // USING MOCK DATA INSTEAD OF FETCHING:
  return [
    {
      id: "mock-1",
      title: "Community Climate Action Grant",
      amount: "$100,000",
      deadline: "2026-08-15",
      portal: "Environmental Protection Agency",
      matchScore: 92,
      description: "This grant maps well to your primary focus areas.",
      url: "https://grants.gov/example1",
      matchReason: "AI matching score of 92",
      probability: 92,
      probabilityReason: "Based on mock similarity model.",
      requirements: ["Eligible organization", "Matches agency mission", "Timely submission"],
      location: "USA",
      type: "Government"
    },
    {
      id: "mock-2",
      title: "Youth STEM Empowerment Fund",
      amount: "$75,000",
      deadline: "2026-11-01",
      portal: "National Science Foundation",
      matchScore: 88,
      description: "Strong alignment with educational themes.",
      url: "https://grants.gov/example2",
      matchReason: "AI matching score of 88",
      probability: 88,
      probabilityReason: "Based on mock similarity model.",
      requirements: ["Youth-centric programs", "Research component"],
      location: "USA",
      type: "Government"
    },
    {
      id: "mock-3",
      title: "Urban Sustainability Initiative",
      amount: "$250,000",
      deadline: "2027-01-30",
      portal: "Department of Energy",
      matchScore: 85,
      description: "Ideal for city-level infrastructure changes.",
      url: "https://grants.gov/example3",
      matchReason: "AI matching score of 85",
      probability: 85,
      probabilityReason: "Based on mock similarity model.",
      requirements: ["Urban location", "Demonstrable impact"],
      location: "USA",
      type: "Government"
    },
    {
      id: "mock-4",
      title: "Local Community Arts Program",
      amount: "$15,000",
      deadline: "Rolling",
      portal: "National Endowment for the Arts",
      matchScore: 70,
      description: "Good for local community engagement projects.",
      url: "https://grants.gov/example4",
      matchReason: "AI matching score of 70",
      probability: 70,
      probabilityReason: "Based on mock similarity model.",
      requirements: ["Arts focus", "Community involvement"],
      location: "USA",
      type: "Government"
    },
    {
      id: "mock-5",
      title: "Tech For Good Startup Grant",
      amount: "$50,000",
      deadline: "2026-12-15",
      portal: "Private Foundation",
      matchScore: 65,
      description: "Supports innovative technological solutions.",
      url: "https://grants.gov/example5",
      matchReason: "AI matching score of 65",
      probability: 65,
      probabilityReason: "Based on mock similarity model.",
      requirements: ["Tech solutions", "Scalable impact"],
      location: "USA",
      type: "Private"
    }
  ] as any;
};

export const generateApplicationContent = async (grant: Grant, org: Organization) => {
  try {
    const response = await fetch('/api/generate-application', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ grant, org })
    });
    if (!response.ok) throw new Error("Network response was not ok");
    return await response.json();
  } catch (error) {
    console.error("Error generating application content:", error);
    return {
      overview: `We are uniquely positioned to execute the "${grant.title}" project. Our organization has a proven track record of delivering high-impact results in this specific domain. With a dedicated team and robust community partnerships, we ensure that every dollar of the ${grant.amount} is maximized for tangible outcomes.`,
      mission: `To empower communities through sustainable, data-driven solutions that directly address the core objectives of the ${grant.title} initiative.`,
      budget: `The ${grant.amount} will be allocated as follows: 40% to direct program implementation, 30% to community outreach and training, 20% to technology and infrastructure, and 10% to rigorous monitoring and evaluation.`,
      impact: [
        "Directly engage and support over 5,000 community members in the first year.",
        "Establish 3 new sustainable community hubs.",
        "Reduce local environmental impact metrics by 15% within 18 months.",
        "Publish a comprehensive, open-source framework for regional scalability."
      ],
    };
  }
};
