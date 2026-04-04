# Use official Playwright image (includes browsers)
FROM mcr.microsoft.com/playwright:v1.43.0-jammy

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Install browsers (safety)
RUN npx playwright install --with-deps

CMD ["npx", "playwright", "test"]