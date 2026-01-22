export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  assetType: string;
  assetLocation: string;
  description: string;
  source?: string;
}

export interface FormState {
  status: "idle" | "loading" | "success" | "error";
  message?: string;
}
