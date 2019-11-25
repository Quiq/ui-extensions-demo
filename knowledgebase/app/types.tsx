export type Contact = {
  externalId: string | null;
  phoneNumber: string | null;
  facebookId: string | null;
  kikUsername: string | null;
  firstName: string | null;
  lastName: string | null;
  profilePic: string | null;
  twitter?: string | null;
};

export type Message = {
  author: string;
  fromCustomer: boolean;
  id: string;
  sourcePlatform: "SMS" | "Facebook" | "Kik" | "Centricient" | "Quiq";
  text: string;
  timestamp: number;
};

export type Metrics = {
  startTime: number | null;
  endTime: number | null;
};

export type Conversation = {
  id: string;
  owner?: string;
  contact?: Contact;
  messages: Array<Message>;
  collaboration?: Conversation;
  metrics: Metrics;
  contactPointId?: string;
  customerPlatform?: string;
  status?: string;
};

export type ParsedUrl = {
  hostname?: string;
  port?: string;
  protocol?: string;
  pathname?: string;
  rawUrl: string;
  tenant: string;
  quiqHost: string;
  sdkUrl: string;
};

export type ExtensionData = {
  conversation: {
    contact: Contact;
  };
  converastionId: string;
  extensionData?: Object;
  extensionId: string;
  tenantId: string;
  userId: string;
};

export type MessageReceivedEvent = {
  conversationId: string;
  message: Message;
};

export type Result = {
  title: string;
  url: string;
  body: string;
  id: string;
};
