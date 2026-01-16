
import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  app.post(api.subscribers.create.path, async (req, res) => {
    try {
      const input = api.subscribers.create.input.parse(req.body);
      const subscriber = await storage.createSubscriber(input);
      res.status(201).json(subscriber);
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      // Handle unique constraint violation for email
      if (err instanceof Error && err.message.includes('unique')) {
         return res.status(400).json({ message: 'Email already subscribed' });
      }
      throw err;
    }
  });

  app.get(api.team.list.path, async (req, res) => {
    const team = await storage.getTeamMembers();
    res.json(team);
  });

  return httpServer;
}

// Seed function to add some placeholder data
async function seedDatabase() {
  const existingTeam = await storage.getTeamMembers();
  if (existingTeam.length === 0) {
    await storage.createTeamMember({
      name: "Founder",
      role: "Visionary",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Founder", 
      twitterUrl: "#"
    });
    await storage.createTeamMember({
      name: "Artist",
      role: "Creator",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Artist",
      twitterUrl: "#"
    });
     await storage.createTeamMember({
      name: "Dev",
      role: "Builder",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dev",
      twitterUrl: "#"
    });
  }
}

// Run seed
seedDatabase().catch(console.error);
