import todoPage from '../pages/TodoPage' // Gọi cái file bạn vừa viết xong

describe('Test với mô hình POM xịn', () => {
  it('Thử thêm công việc mới', () => {
    // 1. Vào trang web
    todoPage.navigate()

    // 2. Thêm công việc (Code ngắn gọn, dễ hiểu)
    todoPage.addTodo('Học Page Object Model')
    todoPage.addTodo('Code không cần làm lại từ đầu')

    // 3. Kiểm tra kết quả (Optional - bạn có thể thêm hàm verify sau)
    cy.get('.todo-list li').should('have.length', 4) // Mặc định có 2, thêm 2 là 4
  })
})
