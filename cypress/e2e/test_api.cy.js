describe('Kiểm thử Backend API', () => {
  it('TC_01: Lấy danh sách Todo (GET Request)', () => {
    // SỬA LỖI: Dùng URL đầy đủ (có https://...)
    cy.request('GET', 'https://jsonplaceholder.cypress.io/todos').then((response) => {
      // Kiểm tra API trả về thành công (Status 200)
      expect(response.status).to.eq(200)

      // Kiểm tra dữ liệu trả về phải là một mảng (List)
      expect(response.body).to.be.an('array')

      // Kiểm tra độ dài mảng
      expect(response.body.length).to.be.greaterThan(0)

      cy.log('Tổng số công việc: ' + response.body.length)
    })
  })

  it('TC_02: Tạo công việc mới qua API (POST Request)', () => {
    const itemMoi = {
      title: 'Test API Backend',
      completed: false,
      userId: 1, // API mẫu này yêu cầu thêm userId
    }

    // SỬA LỖI: Dùng URL đầy đủ
    cy.request('POST', 'https://jsonplaceholder.cypress.io/todos', itemMoi).then((response) => {
      // Kiểm tra Backend đã tạo thành công (Status 201 Created)
      expect(response.status).to.eq(201)

      // Kiểm tra tên công việc trả về
      expect(response.body.title).to.eq('Test API Backend')
    })
  })
})
