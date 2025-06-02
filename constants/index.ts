import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

export const interviewer: CreateAssistantDTO = {
  name: "Interviewer",
  firstMessage:
    "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "sarah",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4",
    messages: [
      {
        role: "system",
        content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

Interview Guidelines:
Follow the structured question flow:
{{questions}}

Engage naturally & react appropriately:
Listen actively to responses and acknowledge them before moving forward.
Ask brief follow-up questions if a response is vague or requires more detail.
Keep the conversation flowing smoothly while maintaining control.
Be professional, yet warm and welcoming:

Use official yet friendly language.
Keep responses concise and to the point (like in a real voice interview).
Avoid robotic phrasing—sound natural and conversational.
Answer the candidate’s questions professionally:

If asked about the role, company, or expectations, provide a clear and relevant answer.
If unsure, redirect the candidate to HR for more details.

Conclude the interview properly:
Thank the candidate for their time.
Inform them that the company will reach out soon with feedback.
End the conversation on a polite and positive note.

- Be sure to be professional and polite.
- Keep all your responses short and simple. Use official language, but be kind and welcoming.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
      },
    ],
  },
};

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Communication Skills"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Technical Knowledge"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Problem Solving"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Cultural Fit"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Confidence and Clarity"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: false,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];

export const generator = {
  name: "Generate Interview",
  nodes: [
    {
      name: "introduction",
      type: "conversation",
      isStart: true,
      metadata: {
        position: {
          x: -400,
          y: -100,
        },
      },
      prompt:
        "Hello {{username}}, Let's prepare your interview. I will ask you few questions and generate your interview. Are you ready?",
      model: {
        model: "gpt-4o",
        provider: "openai",
        maxTokens: 1000,
        temperature: 0.7,
      },
      messagePlan: {
        firstMessage: "",
      },
    },
    {
      name: "conversation_1748865765527",
      type: "conversation",
      metadata: {
        position: {
          x: -400,
          y: 150,
        },
      },
      prompt: "What role would you like to train for? ",
      model: {
        model: "gpt-4o",
        provider: "openai",
        maxTokens: 1000,
        temperature: 0.7,
      },
      variableExtractionPlan: {
        output: [
          {
            enum: [],
            type: "string",
            title: "role",
            description: "",
          },
        ],
      },
      messagePlan: {
        firstMessage: "",
      },
    },
    {
      name: "conversation_1748865851101",
      type: "conversation",
      metadata: {
        position: {
          x: -400,
          y: 400,
        },
      },
      prompt: "What type of the interview should it be?",
      model: {
        model: "gpt-4o",
        provider: "openai",
        maxTokens: 1000,
        temperature: 0.7,
      },
      variableExtractionPlan: {
        output: [
          {
            enum: ["technical", "behavioral"],
            type: "string",
            title: "type",
            description: "",
          },
        ],
      },
      messagePlan: {
        firstMessage: "",
      },
    },
    {
      name: "conversation_1748865928260",
      type: "conversation",
      metadata: {
        position: {
          x: -400,
          y: 650,
        },
      },
      prompt: "What job experience level?",
      model: {
        model: "gpt-4o",
        provider: "openai",
        maxTokens: 1000,
        temperature: 0.7,
      },
      variableExtractionPlan: {
        output: [
          {
            enum: ["junior", "mid", "senior"],
            type: "string",
            title: "level",
            description: "",
          },
        ],
      },
      messagePlan: {
        firstMessage: "",
      },
    },
    {
      name: "conversation_1748866273306",
      type: "conversation",
      metadata: {
        position: {
          x: -400,
          y: 900,
        },
      },
      prompt: "What techstack should we cover?",
      model: {
        model: "gpt-4o",
        provider: "openai",
        maxTokens: 1000,
        temperature: 0.7,
      },
      variableExtractionPlan: {
        output: [
          {
            enum: [],
            type: "string",
            title: "techstack",
            description: "",
          },
        ],
      },
      messagePlan: {
        firstMessage: "",
      },
    },
    {
      name: "conversation_1748866308253",
      type: "conversation",
      metadata: {
        position: {
          x: -400,
          y: 1150,
        },
      },
      prompt: "How many questions would you like me to prepare?",
      model: {
        model: "gpt-4o",
        provider: "openai",
        maxTokens: 1000,
        temperature: 0.7,
      },
      variableExtractionPlan: {
        output: [
          {
            enum: [],
            type: "number",
            title: "amount",
            description: "",
          },
        ],
      },
      messagePlan: {
        firstMessage: "",
      },
    },
    {
      name: "API Request",
      type: "tool",
      metadata: {
        position: {
          x: -400,
          y: 1400,
        },
      },
      tool: {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/vapi/generate`,
        body: {
          type: "object",
          required: ["role", "type", "level", "amount", "techstack", "userid"],
          properties: {
            role: {
              type: "string",
              value: "{{ role }}",
              description: "",
            },
            type: {
              type: "string",
              value: "{{ type }}",
              description: "",
            },
            level: {
              type: "string",
              value: "{{ level }}",
              description: "",
            },
            amount: {
              type: "number",
              value: "{{ amount }}",
              description: "",
            },
            userid: {
              type: "string",
              value: "",
              description: "",
            },
            techstack: {
              type: "string",
              value: "{{ techstack }}",
              description: "",
            },
          },
        },
        name: "API",
        type: "apiRequest",
        method: "POST",
        function: {
          name: "untitled_tool",
          parameters: {
            type: "object",
            required: [],
            properties: {},
          },
        },
      },
    },
    {
      name: "conversation_1748866584301",
      type: "conversation",
      metadata: {
        position: {
          x: -400,
          y: 1650,
        },
      },
      prompt:
        "Your interview has been successfully generated! Thank you for the call and best of luck with your preparation!",
      model: {
        model: "gpt-4o",
        provider: "openai",
        maxTokens: 1000,
        temperature: 0.7,
      },
      messagePlan: {
        firstMessage: "",
      },
    },
    {
      name: "hangup_1748866666324",
      type: "tool",
      metadata: {
        position: {
          x: -394.20785017049576,
          y: 1911.4357352266986,
        },
      },
      tool: {
        type: "endCall",
      },
    },
  ],
  edges: [
    {
      from: "introduction",
      to: "conversation_1748865765527",
      condition: {
        type: "ai",
        prompt: "if the user said yes",
      },
    },
    {
      from: "conversation_1748865765527",
      to: "conversation_1748865851101",
      condition: {
        type: "ai",
        prompt: "role is not empty",
      },
    },
    {
      from: "conversation_1748865851101",
      to: "conversation_1748865928260",
      condition: {
        type: "ai",
        prompt:
          'type equals "technical" or type equals "behavioral" or type equals "mixed"',
      },
    },
    {
      from: "conversation_1748865928260",
      to: "conversation_1748866273306",
      condition: {
        type: "ai",
        prompt: "level is not empty",
      },
    },
    {
      from: "conversation_1748866273306",
      to: "conversation_1748866308253",
      condition: {
        type: "ai",
        prompt: "techstack is not empty",
      },
    },
    {
      from: "conversation_1748866308253",
      to: "API Request",
      condition: {
        type: "ai",
        prompt: "amount is greater than 0",
      },
    },
    {
      from: "API Request",
      to: "conversation_1748866584301",
      condition: {
        type: "ai",
        prompt: "Check if questions is not empty",
      },
    },
    {
      from: "conversation_1748866584301",
      to: "hangup_1748866666324",
      condition: {
        type: "ai",
        prompt: "if the user said thank you",
      },
    },
  ],
  globalPrompt:
    "You are a voice assistant helping with creating new AI interviewers. Your task is to collect data from the user. Remember that this is a voice conversation - do not use any special characters. You need to speak first",
};
