declare global {
  interface Window {
    ym?: (
      counterId: number,
      method: string,
      goal: string,
      params?: Record<string, unknown>
    ) => void;
    Marquiz?: {
      showModal: (id: string) => void;
    };
  }
}

export {};
