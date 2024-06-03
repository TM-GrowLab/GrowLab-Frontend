
export interface CoachClass {
  UUID: string;

  idOwner: string;

  idMember: string;

  title: string;

  description: string;

  totalCheckpoints: number;

  currentCheckpoint: string;

  postId: string;

  sessionId: string;

  nextSession: string;
}

/*
{
  "UUID": "",
  "idOwner": "",
  "idMember": "",
  "title": "",
  "description": "",
  "totalCheckpoints": 0,
  "currentCheckpoint": "",
  "postId": "",
  "sessionId": ""
}
*/