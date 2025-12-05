FROM cypress/included:13.6.3

WORKDIR /app

COPY package.json package-lock.json ./
COPY cypress.config.js ./

# 1. Cài thư viện (vẫn bỏ qua script để né lỗi Husky)
RUN npm install --ignore-scripts

# 2. FIX LỖI: Tự tay tải Cypress Binary về
RUN npx cypress install

COPY . .

# 3. Chạy test
ENTRYPOINT ["npm", "run", "test"]