import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import type { InsertContactMessage } from "@shared/schema";

export function useSubmitContact() {
  return useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const res = await fetch(api.contact.create.path, {
        method: api.contact.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      const responseData = await res.json();
      
      if (!res.ok) {
        throw new Error(responseData.message || "Failed to send message");
      }
      
      return responseData;
    },
  });
}
