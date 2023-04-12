#!/bin/bash

# remove node_modules and pnpm-lock.yaml
echo "Removing node_modules directories and .lock files..."
find . -type dir -name node_modules | xargs rm -rf && rm -rf pnpm-lock.yaml

echo "Removing .contentlayer directory..."
rm -rf .contentlayer

echo "Removing .next directory..."
rm -rf .next

echo "Removing .vscode directory..."
rm -rf .vscode

echo "Removing pnpm-lock.yaml file..."
rm -rf pnpm-lock.yaml

# re-install dependencies
echo "Re-installing dependencies..."
pnpm install

# Run the dev server
echo "Running the dev server..."
pnpm run dev