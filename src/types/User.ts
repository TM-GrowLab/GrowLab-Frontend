export interface User {
    UUID: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
    function: string;
    connectionsCoaches: string;
    connectionsStarters: string;
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