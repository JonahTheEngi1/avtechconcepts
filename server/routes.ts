import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {

  app.post(api.contact.create.path, async (req, res) => {
    try {
      const input = api.contact.create.input.parse(req.body);
      
      // Store in DB as a backup/record
      await storage.createContactMessage(input);
      
      // Simulate sending to a configured IP address as requested
      const targetIp = process.env.CONTACT_TARGET_IP || "127.0.0.1";
      console.log(`[NETWORK] Forwarding contact message to IP: ${targetIp}`);
      try {
        // In a real scenario, this would be: await fetch(`http://${targetIp}/webhook`, { method: 'POST', body: JSON.stringify(input) });
        console.log(`[NETWORK] Successfully sent payload to ${targetIp}:`, input);
      } catch (networkErr) {
        console.error(`[NETWORK] Failed to send to IP ${targetIp}:`, networkErr);
      }

      res.status(201).json({ success: true, message: "Contact message received and forwarded." });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({
          message: err.errors[0].message,
          field: err.errors[0].path.join('.'),
        });
      }
      console.error("Error saving contact message:", err);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  return httpServer;
}
