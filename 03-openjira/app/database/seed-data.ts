interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description: "pendiente: lorem ipsum 1",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "in progress: lorem ipsum 2",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description: "finish: lorem ipsum 3",
      status: "finish",
      createdAt: Date.now(),
    },
  ],
};
