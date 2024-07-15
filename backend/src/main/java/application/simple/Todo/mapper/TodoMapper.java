package application.simple.Todo.mapper;

import application.simple.Todo.dto.TodoDTO;
import application.simple.Todo.model.Todo;

public class TodoMapper {

    public static TodoDTO mapToTodoDTO (Todo todo){
        return new TodoDTO(
                todo.getId(),
                todo.getText()
        );
    }

    public static Todo mapToTodo (TodoDTO todoDTO){
        return new Todo(
                todoDTO.getId(),
                todoDTO.getText()
        );
    }
}
