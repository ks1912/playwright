# Use Node.js base image
FROM node:latest

# Set a working directory
WORKDIR /usr/src/app

# Install necessary system-level dependencies
RUN apt-get update && \
    apt-get install -y \
        libnss3 \
        libatk-bridge2.0-0 \
        libatk1.0-0 \
        libasound2 \
        libxkbcommon-x11-0 \
        libgtk-3-0 \
        libgbm-dev \
        libxcomposite1 \
        libxcursor1 \
        libxdamage1 \
        libxi6 \
        libxtst6 \
        libxrandr2 \
        libglib2.0-0 \
        libfontconfig1 \
        libdbus-1-3 \
        libcairo2 \
        libpango-1.0-0 \
        libpangocairo-1.0-0 \
        libgdk-pixbuf2.0-0 \
        libatspi2.0-0 \
        libegl1 \
        xvfb \
        gconf-service \
        libgconf-2-4 \
        fonts-noto-color-emoji \
        dbus-x11 \
        --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Copy the rest of the application files to the working directory
COPY . .

# Install dependencies
RUN npm install && npx playwright install

# Command to run Playwright tests
CMD ["npm", "run", "headless"]