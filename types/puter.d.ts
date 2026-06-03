// types/puter.d.ts
export {};

declare global {
  interface Window {
    puter: {
      ai: {
        // Update di sini: tambah parameter options
        chat: (
          messages: string | object[], 
          options?: { model?: string }
        ) => Promise<any>;
      };
    };
  }
}