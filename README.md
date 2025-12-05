# 🚀 Cypress Automation Framework - E-commerce Testing

Dự án kiểm thử tự động cho hệ thống E-commerce (Kitchen Sink), áp dụng các kỹ thuật nâng cao và quy trình CI/CD.

![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

---

## 🌟 Tính Năng Nổi Bật (Key Features)

Dự án đáp ứng đầy đủ các yêu cầu kỹ thuật:

- **🏗 Page Object Model (POM):** Tách biệt logic kiểm thử và đối tượng trang (trong thư mục `cypress/pages`), giúp code dễ bảo trì và tái sử dụng.
- **🔌 API Testing:** Kiểm thử Backend API (GET, POST) xử lý bất đồng bộ (Async/Await) chuyên nghiệp.
- **🐳 Dockerized:** Đóng gói toàn bộ môi trường chạy test vào Docker Container, đảm bảo "chạy đúng trên mọi máy".
- **🔄 CI/CD Pipeline:** Tích hợp GitHub Actions để tự động chạy test mỗi khi có code mới được đẩy lên.
- **📹 Artifacts:** Tự động lưu video quay màn hình quá trình test (Volume Mapping).

---

## 📂 Cấu Trúc Dự Án

```text
.
├── .github/workflows/   # Cấu hình CI/CD (GitHub Actions)
├── cypress/
│   ├── e2e/             # Chứa các kịch bản kiểm thử (Test Scripts)
│   │   ├── api_test.cy.js   # Test API Backend
│   │   └── test_pom.cy.js   # Test UI sử dụng POM
│   ├── pages/           # Page Objects (Chứa các hàm tương tác)
│   │   └── TodoPage.js      
│   └── videos/          # Video kết quả test (tự sinh ra sau khi chạy)
├── docker-compose.yml   # File điều khiển Docker
├── Dockerfile           # File cấu hình môi trường
└── README.md            # Hướng dẫn sử dụng
🚀 Hướng Dẫn Chạy (Run Tests)
Cách 1: Chạy bằng Docker (Khuyên dùng)
Không cần cài Node.js, chỉ cần máy có Docker.

Bước 1: Mở Terminal tại thư mục dự án. Bước 2: Chạy lệnh sau:

Bash

docker compose up --build
Kết quả:

Test sẽ chạy ngầm bên trong Container.

Kết quả Pass/Fail hiển thị ngay trên Terminal.

Video quay lại quá trình test sẽ xuất hiện trong thư mục cypress/videos.

Cách 2: Chạy trên máy Local (Thủ công)
Yêu cầu máy đã cài Node.js v16 trở lên.

Bước 1: Cài đặt thư viện

Bash

npm install
Bước 2: Mở giao diện Cypress (để xem trực quan)

Bash

npx cypress open
Bước 3: Chạy ẩn (Headless mode)

Bash

npx cypress run
🤖 CI/CD Status
Dự án đã được tích hợp GitHub Actions. Bạn có thể xem trạng thái các lần chạy test tự động tại tab Actions trên GitHub Repository.
