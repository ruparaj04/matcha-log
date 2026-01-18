
# Mini Class Project for my Web Programming Course!
# 🍵 Matcha Tasting Log

**Due:** Aug 18, 2025 11:59 PM EDT  
**Time to Complete:** 8 days

## Overview

This is your final assignment for the course. You'll be building a small but complete full-stack web application in a domain you choose. The project is your chance to show what you've learned in a single, integrated example, from backend to database to frontend.

This is not about making a polished, production-ready app. Instead, it's about demonstrating core skills:
- Backend with NestJS + TypeScript
- Database with PostgreSQL + TypeORM
- Frontend with React
- CRUD operations, validation, guards, pipes, and testing

You'll submit both your code and a Project Documentation Slides file that explains and shows your work.

## Step 1: Choose a Domain

You get to pick the subject area for your app. Think small and focused, the goal is to meet the requirements, not to build a huge product.

### Examples:
- Recipe manager (store, view, update, delete recipes)
- Book tracker (track books you own or have read)
- Pet adoption system (list pets, mark adopted)
- Plant watering log (track watering schedules)
- Sports team manager (manage teams and players)

You can choose any domain as long as you can represent it with at least two database entities that relate to each other.

## Step 2: Build the Application

### Backend Requirements
Your application must have a backend that is:
- Written in TypeScript
- Uses NestJS
- Uses TypeORM with PostgreSQL
- Has at least two entities in the database schema
- Implements CRUD operations (Create, Read, Update, Delete)
- Exposes a RESTful HTTP API

#### Must Include:
- Controller
- Service
- Dependency Injection
- Guard
- Pipe
- Class validation (e.g., using decorators like `@IsString()` from class-validator)
- At least one route for each CRUD operation

### Frontend Requirements
Your application must have a frontend that is:
- Built with React (using Vite)

#### Must Demonstrate:
- Basic React components
- Props
- Event handling
- Dynamic UI updates (state changes)
- Basic CSS styling applied (doesn't need to be fancy)

### Testing Requirements
- Use a REST Client file (`.http` in VS Code) to test your endpoints
- Show working requests and responses

### Runtime Requirements
Must be able to run two separate servers:
- NestJS backend
- React frontend (Vite)
- Must run in the student development environment provided in this course

## What's NOT Required

- Authentication, login, registration, or multi-user support
- Fancy UI or advanced CSS effects
- Real-world or third-party data (use mock data or Faker)
- Browser storage (localStorage, sessionStorage)
- WebSockets or other non-HTTP protocols

## Constraints

- Must use PostgreSQL (no other databases)
- Must not call third-party APIs
- Must use NestJS for the backend and React for the frontend
- Must have mock data if no real data is used

## Step 3: Create Your Project Documentation Slides

Along with your code, you will create Project Documentation Slides, a structured, visual record of your project.

### What They Are
- **Not** a live presentation
- **Not** a long written report
- **Instead:** modular documentation in slide format

Each slide covers one topic with:
- Concise explanations
- Diagrams, screenshots, or code snippets

Someone should be able to look through the slides and understand what you built and why without you explaining it in person.

### Slide Outline (12–15 slides total)

1. **Project Title and Team Members**
   - Project name, contributor names, one-sentence summary, optional logo/image

2. **Project Overview and Goals**
   - Purpose, scope (what's in / what's out), course concepts demonstrated

3. **Technology Stack**
   - Backend, frontend, tools/libraries, diagram showing backend/frontend separation

4. **System Architecture Diagram**
   - Data flow diagram (frontend → backend → database), tech labels, caption

5. **Database Schema and Entities**
   - ER diagram, relationships, PK/FK, example table data

6. **REST API Design and Endpoints**
   - Table of endpoints, method, route, description, CRUD mapping

7. **CRUD Implementation Summary**
   - How each CRUD is implemented, controller/service mapping, short code example

8. **NestJS Features Used**
   - Controllers, services, DI, guards, pipes, validation decorators

9. **Frontend Overview**
   - Component hierarchy diagram, which components fetch data vs. display data

10. **Frontend Features**
    - Examples of props, event handling, state updates, UI screenshot

11. **CSS Styling Approach**
    - Styling method, example CSS, screenshot

12. **Testing with REST Client**
    - Screenshots of .http tests, example request/response

13. **Challenges and Solutions**
    - 2–3 main challenges, how you solved them, what you'd change

14. **Conclusion and Future Improvements**
    - What you learned, possible new features, reflection on course concepts

### Length Guidance
- 12–15 slides (enough for detail without repetition)
- Optional appendix slides for extra code or diagrams

## Step 4: Submitting Your Work

1. Zip your project (without `node_modules` or `dist` folders)
2. Include Project Documentation Slides (**PDF ONLY**) in the same submission
3. Upload to Canvas before the deadline

## Tips for Success

- Pick a small, focused idea so you can meet all requirements in the time you have
- Get your backend working first, then connect the frontend
- Use mock data early to test your frontend while backend is in progress
- Keep your slides visual, diagrams and screenshots are stronger than long text
- Test every CRUD endpoint with REST Client before submission

**Remember:** the goal is to demonstrate skills from this course, not to build a full product.

## Project Documentation Slides Rubric

Your Project Documentation Slides will be graded using the following criteria. Each section below lists the points available and what you need to do to earn full credit. **Total score is 100 points.**

### Grading Breakdown

| Category | Points | Requirements |
|----------|---------|-------------|
| **Slide Completeness and Organization** | 15 | 12–15 slides covering all required sections in logical order |
| **Project Overview and Goals** | 5 | Clear purpose, scope, and course concepts demonstrated |
| **Technology Stack** | 5 | Lists all technologies with backend/frontend separation diagram |
| **System Architecture Diagram** | 10 | Shows frontend/backend/database connections with labels |
| **Database Schema and Entities** | 10 | ER diagram with 2+ entities, relationships, PK/FK |
| **REST API Design and Endpoints** | 10 | Complete endpoint table with methods, routes, CRUD mapping |
| **CRUD Implementation Summary** | 10 | Explains implementation with controller/service mapping |
| **NestJS Features Used** | 10 | Shows controllers, services, DI, guards, pipes, validation |
| **Frontend Overview** | 5 | Component hierarchy showing data flow responsibilities |
| **Frontend Features** | 5 | Props, events, state updates with UI screenshots |
| **CSS Styling Approach** | 5 | Method, example CSS, styled UI screenshot |
| **Testing with REST Client** | 5 | .http screenshots with request/response examples |
| **Challenges and Solutions** | 3 | 2–3 challenges with solutions |
| **Conclusion and Future Improvements** | 2 | Learning outcomes and future improvements |

**Passing Threshold:** 70 points

## Student Checklist

### Part 1 – Code Requirements

#### Backend (NestJS + TypeScript + PostgreSQL)
- [ ] Written in TypeScript
- [ ] Uses NestJS
- [ ] Uses TypeORM with PostgreSQL
- [ ] Database has at least 2 entities
- [ ] Implements all CRUD operations (Create, Read, Update, Delete)
- [ ] Exposes a RESTful HTTP API
- [ ] Includes a Controller
- [ ] Includes a Service
- [ ] Uses Dependency Injection
- [ ] Uses a Guard
- [ ] Uses a Pipe
- [ ] Uses Class Validation (e.g., `@IsString()`)
- [ ] At least one route per CRUD operation

#### Frontend (React + Vite)
- [ ] Built with React using Vite
- [ ] Has at least one component hierarchy (parent/child components)
- [ ] Demonstrates props
- [ ] Demonstrates event handling
- [ ] Demonstrates dynamic UI updates (state changes)
- [ ] Has basic CSS styling applied

#### Testing
- [ ] Includes REST Client (`.http`) tests for all CRUD routes
- [ ] Tests have example requests and responses

#### Running the App
- [ ] Backend server runs (NestJS)
- [ ] Frontend server runs (Vite)
- [ ] App runs in student development environment

### Part 2 – Project Documentation Slides (12–15 slides)
- [ ] **Slide 1** – Project Title and Team Members
- [ ] **Slide 2** – Project Overview and Goals
- [ ] **Slide 3** – Technology Stack
- [ ] **Slide 4** – System Architecture Diagram
- [ ] **Slide 5** – Database Schema and Entities
- [ ] **Slide 6** – REST API Design and Endpoints
- [ ] **Slide 7** – CRUD Implementation Summary
- [ ] **Slide 8** – NestJS Features Used
- [ ] **Slide 9** – Frontend Overview
- [ ] **Slide 10** – Frontend Features
- [ ] **Slide 11** – CSS Styling Approach
- [ ] **Slide 12** – Testing with REST Client
- [ ] **Slide 13** – Challenges and Solutions
- [ ] **Slide 14** – Conclusion and Future Improvements

### Part 3 – Final Submission
- [ ] Remove `node_modules` and `dist` folders before zipping
- [ ] Zip and upload the entire project (backend + frontend)
- [ ] Upload the Project Documentation Slides (**PDF**)
- [ ] Upload both files to Canvas before the deadline

---

If you follow this guide, you'll have everything you need to complete the mini project on time and with


