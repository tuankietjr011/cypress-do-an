class TodoPage {
    elements = {
        inputBox: () => cy.get('[data-test="new-todo"]'),
        todoListItems: () => cy.get('.todo-list li')
    }

    navigate() {
        cy.visit('https://example.cypress.io/todo');
    }

    addTodo(text) {
        this.elements.inputBox().type(text + '{enter}');
    }
}
export default new TodoPage();