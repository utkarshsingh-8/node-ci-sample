[![codecov](https://codecov.io/gh/utkarshsingh-8/node-ci-sample/branch/main/graph/badge.svg)](https://codecov.io/gh/utkarshsingh-8/node-ci-sample)

# 🚀 Node.js CI/CD Sample Project

A **production-ready Node.js backend** demonstrating professional-grade project setup with:
- ✅ Express.js REST API
- 🧪 Jest & Supertest for automated testing
- 🧹 ESLint for clean, consistent code
- 🔄 GitHub Actions for continuous integration (CI)
- 📊 Codecov for test coverage reporting
- ☁️ AWS-ready architecture (EC2, S3, RDS integration friendly)

---

## 🌟 Overview

This repository serves as a **reference template** for backend developers looking to:
- Learn **CI/CD pipelines** with GitHub Actions  
- Implement **automated testing** and coverage enforcement  
- Prepare for **AWS deployment (EC2 / Elastic Beanstalk)**  
- Maintain **clean, scalable project structures**

It’s built using **industry best practices** — the same standards used in real production backends.

---

## 🧩 Tech Stack

| Category | Technology |
|-----------|-------------|
| Runtime | Node.js (v22 LTS) |
| Framework | Express.js |
| Testing | Jest + Supertest |
| Linting | ESLint (Airbnb-style) |
| CI/CD | GitHub Actions |
| Coverage | Codecov |
| Deployment Target | AWS EC2 (Free Tier) |

---

## 🏗️ Architecture

**CI/CD Flow:**
1. Code pushed → GitHub Actions triggers build
2. Run ESLint + Jest tests + coverage report
3. Uploads results to Codecov
4. Deploys to AWS (coming soon 🚧)

---

## 🧪 Run Locally

```bash
# Clone repo
git clone https://github.com/utkarshsingh-8/node-ci-sample.git
cd node-ci-sample

# Install dependencies
npm ci

# Run tests
npm run test:ci

# Run server
npm start


