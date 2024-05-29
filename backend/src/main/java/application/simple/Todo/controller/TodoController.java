package application.simple.Todo.controller;

import application.simple.Todo.model.Todo;
import application.simple.Todo.service.TodoService;
import org.springframework.web.bind.annotation.*;

@RestController
public class TodoController {
    private final TodoService serv;

    public TodoController(TodoService serv) {
        this.serv = serv;
    }

    @GetMapping("/todo/{id}")
    public Todo getMember(@PathVariable Long id){
        return serv.getMember(id);
    }

    @PostMapping("/todo")
    public Todo newMember(@RequestBody Todo todo){
        return serv.newMember(todo);
    }
}
