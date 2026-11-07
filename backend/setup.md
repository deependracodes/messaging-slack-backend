### Eslint setup

- npm i -D es-lint
- npx eslint --init
- update/keep changes in eslint.config.ts file

### prettier setup

- npm i -D prettier
- touch .prettierrc file
- add {
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "printWidth": 80,
  "trailingComma": "none"
  }

### scripts for linting and prettier

- {
  "format": "prettier --write .",
  "lint": "eslint .",
  "lint:fix": "eslint . --fix "
  }

### RoboHash is a service that generates unique robot images based on a given input such as a text string or a specific hash code

- GET https://robohash.org/{input}

### Entities

- user
- workspace (group)
- channel (group)
- message

- users : [
  {
  "_id": "60d5ecb8b3b6c214c8f5e001",
  "username": "Deependra",
  "email": "deependra@example.com"
  },
  {
  "_id": "60d5ecb8b3b6c214c8f5e002",
  "username": "Alice",
  "email": "alice@example.com"
  },
  {
  "_id": "60d5ecb8b3b6c214c8f5e003",
  "username": "Bob",
  "email": "bob@example.com"
  }
  ]

- workspace : [
  {
  "_id": "60d5ecb8b3b6c214c8f5e1a1",
  "name": "Engineering Team",
  "description": "Core backend and infrastructure discussions",
  "joinCode": "ENG2026",
  "members": [
  {
  "memberId": "60d5ecb8b3b6c214c8f5e001",
  "role": "admin"
  },
  {
  "memberId": "60d5ecb8b3b6c214c8f5e002",
  "role": "member"
  }
  ],
  "channels": [
  "60d5ecb8b3b6c214c8f5e2a1",
  "60d5ecb8b3b6c214c8f5e2a2"
  ]
  },
  {
  "_id": "60d5ecb8b3b6c214c8f5e1b2",
  "name": "Marketing Team",
  "description": "Campaign strategy and public relations",
  "joinCode": "MKT2026",
  "members": [
  {
  "memberId": "60d5ecb8b3b6c214c8f5e001",
  "role": "admin"
  },
  {
  "memberId": "60d5ecb8b3b6c214c8f5e003",
  "role": "member"
  }
  ],
  "channels": [
  "60d5ecb8b3b6c214c8f5e2b3",
  "60d5ecb8b3b6c214c8f5e2b4"
  ]
  }
  ]

- channles : [
  {
  "_id": "60d5ecb8b3b6c214c8f5e2a1",
  "name": "development",
  "workspaceId": "60d5ecb8b3b6c214c8f5e1a1"
  },
  {
  "_id": "60d5ecb8b3b6c214c8f5e2a2",
  "name": "code-review",
  "workspaceId": "60d5ecb8b3b6c214c8f5e1a1"
  },
  {
  "_id": "60d5ecb8b3b6c214c8f5e2b3",
  "name": "campaigns",
  "workspaceId": "60d5ecb8b3b6c214c8f5e1b2"
  },
  {
  "_id": "60d5ecb8b3b6c214c8f5e2b4",
  "name": "general",
  "workspaceId": "60d5ecb8b3b6c214c8f5e1b2"
  }
  ]

- messages : [
  {
  "_id": "60d5ecb8b3b6c214c8f5e301",
  "senderId": "60d5ecb8b3b6c214c8f5e001",
  "channelId": "60d5ecb8b3b6c214c8f5e2a1",
  "workspaceId": "60d5ecb8b3b6c214c8f5e1a1",
  "body": "Deploying the event-driven microservices architecture update to staging.",
  "attachments": []
  },
  {
  "_id": "60d5ecb8b3b6c214c8f5e302",
  "senderId": "60d5ecb8b3b6c214c8f5e003",
  "channelId": "60d5ecb8b3b6c214c8f5e2b3",
  "workspaceId": "60d5ecb8b3b6c214c8f5e1b2",
  "body": "Here is the Q4 product launch brief.",
  "attachments": [
  {
  "url": "https://storage.example.com/docs/q4-brief.pdf",
  "fileType": "application/pdf",
  "originalName": "q4-brief.pdf",
  "fileSize": 1048576
  }
  ]
  }
  ]
