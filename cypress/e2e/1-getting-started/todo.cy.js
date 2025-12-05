describe('Kiem tra Google', () => {
  // Chặn lỗi linh tinh của Google để test không bị dừng
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

  it('Vao Google va kiem tra', () => {
    cy.visit('https://www.google.com');
    
    // 1. Chờ trang tải xong
    cy.get('body').should('exist');
    
    // 2. TÌM Ô SEARCH BẰNG CÁCH MỚI (Chính xác hơn)
    // [name="q"] là tên kỹ thuật của ô tìm kiếm Google
    cy.get('[name="q"]').should('be.visible').type('Cypress{enter}');
    
    // 3. Chờ kết quả hiện ra (tắt cảnh báo lỗi wait)
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(3000); 

    // 4. Chụp ảnh màn hình làm bằng chứng
    cy.screenshot('ket-qua-test-google'); 
  });
});