export interface User {
    UUID: number;
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
    educationId: number;
    excperienceId: number;
    talenten: string[];
    interesses: string[];
    aboutMe: Text;
}