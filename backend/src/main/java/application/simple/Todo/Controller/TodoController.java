package application.simple.Todo.Controller;

import application.simple.Todo.Model.Todo;
import application.simple.Todo.Service.TodoService;
import org.apache.catalina.User;
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
