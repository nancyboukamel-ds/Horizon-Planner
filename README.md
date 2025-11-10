# Horizon-Planner

Horizon Planner is a cutting-edge Progressive Web App (PWA) designed to eliminate the friction points in group travel planning. It is a Multi-Agent AI (MA-AI) system that seamlessly integrates trip itinerary generation with real-time geospatial and social features.

The project is built on a robust Hybrid Cloud Architecture, leveraging AWS for security and scalable data storage, and the Google Cloud Platform (GCP) for advanced AI reasoning and world-class geospatial services (Google Maps Platform). This architecture is specifically designed to demonstrate advanced AI Engineering and MLOps principles.

🎯 Key Features and Value Proposition
1) Multi-Agent Trip Planning: Generates tailored, multi-day itineraries based on user profiles, preferences, and real-time place data (LLM Integration (Gemini), Agentic Workflow, Structured Output.)
2) Real-Time Contextual Routin:Proactively checks the exact weather conditions and traffic along a route to suggest the optimal time to leave for a destination (Real-Time API Integration (Directions, Weather), Contextual Reasoning, Low-Latency Architecture.)
3) Secure Social Collaboration: Allows users to create group trips, chat, and share media, all secured behind enterprise-grade identity management (AWS Cognito Integration, Serverless Chat (WebSockets/DynamoDB), Object Storage (S3))
4) Cross-Cloud MLOps: Orchestration logic and data flow is designed to utilize the best-in-class service from both AWS and GCP (Hybrid Cloud Proficiency, Infrastructure as Code (IaC), Vendor Agnosticism.)

🏛️ Technical Architecture: The Hybrid Cloud

The system is split across two clouds to optimize for speed, security, and AI performance.

A. AWS: Security, Data, and Serverless Backend
AWS handles the transactional data, file storage, and user identity, serving as the secure foundation.

- AWS Cognito	Authentication and Authorization: Manages all user registration, login, and JWT token issuance for API security.
- AWS DynamoDB:	NoSQL Database. Stores user profiles, chat messages, favorite places, and group metadata (high throughput, flexible schema).
- AWS Lambda:	Serverless API Backend. Executes lightweight logic for user CRUD operations, updating favorites, and acting as the API gateway for all front-end calls.
- Amazon S3: 	Media Storage. Stores all user-uploaded photos and voice messages for chat and place ratings.
- AWS AppSync / IoT:	Real-Time Communication. Provides the backend for the WebSocket-based group chat functionality.

This is the professional initial documentation (README.md) you should put in your GitHub repository. It clearly defines the project, the complex multi-cloud architecture, the core AI components, and the advanced MLOps skills you will demonstrate to recruiters.

🌍 Horizon Planner: Cross-Cloud Multi-Agent Trip Orchestrator

🌟 Overview

Horizon Planner is a cutting-edge Progressive Web App (PWA) designed to eliminate the friction points in group travel planning. It is a Multi-Agent AI (MA-AI) system that seamlessly integrates trip itinerary generation with real-time geospatial and social features.

The project is built on a robust Hybrid Cloud Architecture, leveraging AWS for security and scalable data storage, and the Google Cloud Platform (GCP) for advanced AI reasoning and world-class geospatial services (Google Maps Platform). This architecture is specifically designed to demonstrate advanced AI Engineering and MLOps principles.

🎯 Key Features and Value Proposition

Feature Category	Description	Technical Value Demonstrated
Multi-Agent Trip Planning	Generates tailored, multi-day itineraries based on user profiles, preferences, and real-time place data.	LLM Integration (Gemini), Agentic Workflow, Structured Output.
Real-Time Contextual Routing	Proactively checks the exact weather conditions and traffic along a route to suggest the optimal time to leave for a destination.	Real-Time API Integration (Directions, Weather), Contextual Reasoning, Low-Latency Architecture.
Secure Social Collaboration	Allows users to create group trips, chat, and share media, all secured behind enterprise-grade identity management.	AWS Cognito Integration, Serverless Chat (WebSockets/DynamoDB), Object Storage (S3).
Cross-Cloud MLOps	Orchestration logic and data flow is designed to utilize the best-in-class service from both AWS and GCP.	Hybrid Cloud Proficiency, Infrastructure as Code (IaC), Vendor Agnosticism.

🏛️ Technical Architecture: The Hybrid Cloud

The system is split across two clouds to optimize for speed, security, and AI performance.

A. AWS: Security, Data, and Serverless Backend

AWS handles the transactional data, file storage, and user identity, serving as the secure foundation.
AWS Service	Use Case
AWS Cognito	Authentication and Authorization. Manages all user registration, login, and JWT token issuance for API security.
AWS DynamoDB	NoSQL Database. Stores user profiles, chat messages, favorite places, and group metadata (high throughput, flexible schema).
AWS Lambda	Serverless API Backend. Executes lightweight logic for user CRUD operations, updating favorites, and acting as the API gateway for all front-end calls.
Amazon S3	Media Storage. Stores all user-uploaded photos and voice messages for chat and place ratings.
AWS AppSync / IoT	Real-Time Communication. Provides the backend for the WebSocket-based group chat functionality.

B. Google Cloud Platform (GCP): AI and Geospatial Intelligence

GCP provides the core intelligence and real-time mapping services, accessed via APIs from the AWS Lambda layer.
GCP Service / API	Use Case
1) Vertex AI (Gemini 2.5 Pro):	Planner Agent Core. Used for complex reasoning and itinerary generation based on user history, preferences, and Place API data.
2) Google Maps Platform:	Frontend Map Display. Provides the core map, location tracking, and the visual traffic overlay (Green/Yellow/Red indicators).
3) Places API	Search Agent Tool: Used by the Planner Agent to find detailed information (ratings, photos, reviews) on tourist spots and nearby services.0
4) Directions API	Context Agent Tool: Provides real-time route calculations, distance, travel time, and traffic data.
5) Cloud Functions / Pub/Sub:	(Future Expansion) Can be used for lightweight, event-driven triggers when complex Gemini processing is required, complementing AWS Lambda.

This is the professional initial documentation (README.md) you should put in your GitHub repository. It clearly defines the project, the complex multi-cloud architecture, the core AI components, and the advanced MLOps skills you will demonstrate to recruiters.

🌍 Horizon Planner: Cross-Cloud Multi-Agent Trip Orchestrator

🌟 Overview

Horizon Planner is a cutting-edge Progressive Web App (PWA) designed to eliminate the friction points in group travel planning. It is a Multi-Agent AI (MA-AI) system that seamlessly integrates trip itinerary generation with real-time geospatial and social features.

The project is built on a robust Hybrid Cloud Architecture, leveraging AWS for security and scalable data storage, and the Google Cloud Platform (GCP) for advanced AI reasoning and world-class geospatial services (Google Maps Platform). This architecture is specifically designed to demonstrate advanced AI Engineering and MLOps principles.

🎯 Key Features and Value Proposition

Feature Category	Description	Technical Value Demonstrated
Multi-Agent Trip Planning	Generates tailored, multi-day itineraries based on user profiles, preferences, and real-time place data.	LLM Integration (Gemini), Agentic Workflow, Structured Output.
Real-Time Contextual Routing	Proactively checks the exact weather conditions and traffic along a route to suggest the optimal time to leave for a destination.	Real-Time API Integration (Directions, Weather), Contextual Reasoning, Low-Latency Architecture.
Secure Social Collaboration	Allows users to create group trips, chat, and share media, all secured behind enterprise-grade identity management.	AWS Cognito Integration, Serverless Chat (WebSockets/DynamoDB), Object Storage (S3).
Cross-Cloud MLOps	Orchestration logic and data flow is designed to utilize the best-in-class service from both AWS and GCP.	Hybrid Cloud Proficiency, Infrastructure as Code (IaC), Vendor Agnosticism.

🏛️ Technical Architecture: The Hybrid Cloud

The system is split across two clouds to optimize for speed, security, and AI performance.

A. AWS: Security, Data, and Serverless Backend

AWS handles the transactional data, file storage, and user identity, serving as the secure foundation.
AWS Service	Use Case
1)AWS Cognito	Authentication and Authorization. Manages all user registration, login, and JWT token issuance for API security.
AWS DynamoDB	NoSQL Database. Stores user profiles, chat messages, favorite places, and group metadata (high throughput, flexible schema).
AWS Lambda	Serverless API Backend. Executes lightweight logic for user CRUD operations, updating favorites, and acting as the API gateway for all front-end calls.
Amazon S3	Media Storage. Stores all user-uploaded photos and voice messages for chat and place ratings.
AWS AppSync / IoT	Real-Time Communication. Provides the backend for the WebSocket-based group chat functionality.

B. Google Cloud Platform (GCP): AI and Geospatial Intelligence

GCP provides the core intelligence and real-time mapping services, accessed via APIs from the AWS Lambda layer.

GCP Service / API	Use Case
Vertex AI (Gemini 2.5 Pro)	Planner Agent Core. Used for complex reasoning and itinerary generation based on user history, preferences, and Place API data.
Google Maps Platform	Frontend Map Display. Provides the core map, location tracking, and the visual traffic overlay (Green/Yellow/Red indicators).
Places API	Search Agent Tool. Used by the Planner Agent to find detailed information (ratings, photos, reviews) on tourist spots and nearby services.
Directions API	Context Agent Tool. Provides real-time route calculations, distance, travel time, and traffic data.
Cloud Functions / Pub/Sub	(Future Expansion) Can be used for lightweight, event-driven triggers when complex Gemini processing is required, complementing AWS Lambda.

🤖 The Multi-Agent System: The Brain

The Horizon Planner's intelligence is driven by three specialized Python agents, primarily orchestrated through AWS Lambda and leveraging the Vertex AI Gemini API.
1
