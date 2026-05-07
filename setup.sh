#!/bin/bash

echo "=== AFK Bot Setup Starting ==="

# Install Node.js (modern version)
echo "Installing Node.js..."
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

echo "Node installed:"
node -v
npm -v

# Install bot dependencies
echo "Installing npm packages..."
npm install

echo "=== Setup complete 😎 ==="
echo "Now run: ./start.sh yahya chan:)"