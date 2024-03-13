import { VueQueryPlugin, QueryClient } from 'vue-query';
import type { App } from 'vue';

const queryClient = new QueryClient();

export function useQueryClient(app: App): App {
  return app.use(VueQueryPlugin, {
    queryClient,
  });
}
