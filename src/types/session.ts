export interface Session {
    UUID: string;
    
    title: string;
    
    description: string;
    
    date: Date;

    urlSession: string;

    completed: boolean;
}