/**
 * tenant: string
 * This should be the name of your Quiq tenant, e.g.
 */
export const tenant = "YOUR_TENANT";

/**
 * topKeywords: Array<string>
 * This is a list of key words to assist in finding results most relevant to your customer base.
 * This should be tailored to common questions your agents get
 */
export const topKeywords = [
  "track",
  "order",
  "claim",
  "submit",
  "troubleshoot",
  "return",
  "defective",
  "sale",
  "broken",
  "account"
];

/**
 * zendeskDomain: This is the name of your zendesk domain
 */
export const zendeskDomain = "yourZendeskDomain";

/**
 * zendeskAuthToken: string
 * WARNING: This string should be securely stored and retrieved, not placed directly into this file.
 * This is the basic auth token for accessing your Zendesk knowledgebase
 */
export const zendeskAuthToken = "yourZendeskAuthToken";

/**
 * defaultCategoryNumber: string
 * This is the number of a Zendesk knowledgebase category you want to pull extra results from
 * to backfill suggestions to responses that don't have enough related articles.  Something like
 * a FAQ category would work great here.
 */
export const defaultCategoryNumber = "yourDefaultCategoryNumber";
