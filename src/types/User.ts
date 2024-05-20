export interface User {
    UUID: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    connenctionsCoaches: string[];
    connenctionsStarters: string[];
    isProUser: boolean;
    dateJoined: Date;
    profilePictureUrl: string;
    bannerPictureUrl: string;
    educationId: string;
    experienceId: string;
    talenten: string;
    interesses: string;
    about: string;
}