package application.simple.Todo.Service;

import application.simple.Todo.Model.Todo;
import application.simple.Todo.Repository.TodoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

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
