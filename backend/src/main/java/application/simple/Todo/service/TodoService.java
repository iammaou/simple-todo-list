package application.simple.Todo.service;

import application.simple.Todo.model.Todo;
import application.simple.Todo.repository.TodoRepository;
import org.springframework.stereotype.Service;

@Service
public class TodoService {
    private final TodoRepository repo;

    public TodoService(TodoRepository repo) {
        this.repo = repo;
    }

    public Todo getMember(Long id){
        return repo.findById(id).get();
    }

    public Todo newMember(Todo todo){
        return repo.save(todo);
    }
}
