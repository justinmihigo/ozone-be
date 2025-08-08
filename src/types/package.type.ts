export interface Package {
  name: string;
  price: number;
  stay: string;
  description?: string;
  rating?: number;
  image?: string;
  status: 'outbound' | 'inbound';
  inclusion: string[];
  destination?: string;
}
