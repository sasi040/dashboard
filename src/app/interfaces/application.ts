import { Link } from './link';

export interface Application {
    id: number;
    name: string,
    environment: string,
    applicationUrl: string,
    links: Array<Link>
  }