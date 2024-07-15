package application.simple.Todo.service;

import application.simple.Todo.dto.TodoDTO;
import application.simple.Todo.mapper.TodoMapper;
import application.simple.Todo.model.Todo;
import application.simple.Todo.repository.TodoRepository;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class TodoService {
    private final TodoRepository repo;

    public List<TodoDTO> getAllMembers(){
        List<Todo> todo = repo.findAll();
        return todo.stream().map(TodoMapper::mapToTodoDTO).collect(Collectors.toList());
    }

    public TodoDTO getMember(Long id){
        Todo todo = repo.getReferenceById(id);
        return TodoMapper.mapToTodoDTO(todo);
    }

    public TodoDTO newMember(TodoDTO todoDTO){
        Todo todo = TodoMapper.mapToTodo(todoDTO);
        Todo savedTodo = repo.save(todo);
        return TodoMapper.mapToTodoDTO(savedTodo);
    }

    public void deleteMember(Long id){
        if(!(repo.existsById(id))){
            throw new RuntimeException(String.valueOf(HttpStatus.NOT_FOUND));
        } else repo.deleteById(id);
    }

    public TodoDTO updateMember(Long id, TodoDTO todoDTO){
        if(!(repo.existsById(id))){
            throw new RuntimeException(String.valueOf(HttpStatus.NOT_FOUND));
        } else{
            Todo todo = repo.getReferenceById(id);
            todo.setText(TodoMapper.mapToTodo(todoDTO).getText());

            Todo updatedTodo = repo.save(todo);
            return TodoMapper.mapToTodoDTO(updatedTodo);
        }
    }
}
