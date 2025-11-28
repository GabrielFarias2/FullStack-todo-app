#!/usr/bin/env bash
# Exit on error
set -o errexit

# Install dependencies
npm install

# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate deploy