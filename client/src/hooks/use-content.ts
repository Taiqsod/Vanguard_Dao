import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { api, type InsertSubscriber } from "@shared/routes";

// ============================================
// TEAM HOOKS
// ============================================

export function useTeam() {
  return useQuery({
    queryKey: [api.team.list.path],
    queryFn: async () => {
      const res = await fetch(api.team.list.path, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch team members");
      return api.team.list.responses[200].parse(await res.json());
    },
  });
}

// ============================================
// SUBSCRIBER HOOKS
// ============================================

export function useCreateSubscriber() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (data: InsertSubscriber) => {
      // Validate with shared schema input
      const validated = api.subscribers.create.input.parse(data);
      
      const res = await fetch(api.subscribers.create.path, {
        method: api.subscribers.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validated),
        credentials: "include",
      });

      if (!res.ok) {
        if (res.status === 400) {
          const error = api.subscribers.create.responses[400].parse(await res.json());
          throw new Error(error.message || "Invalid email address");
        }
        throw new Error("Failed to subscribe");
      }
      
      return api.subscribers.create.responses[201].parse(await res.json());
    },
  });
}
