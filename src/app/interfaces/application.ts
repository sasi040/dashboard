import { Link } from './link';

export interface Application {
    id: number;
    name: String,
    environment: String,
    applicationUrl: String,
    self: String,
    links: Array<Link>
  }