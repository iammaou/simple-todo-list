package application.simple.Todo.controller;

import application.simple.Todo.dto.TodoDTO;
import application.simple.Todo.model.Todo;
import application.simple.Todo.service.TodoService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@AllArgsConstructor
@RequestMapping("/todo")
public class TodoController {
    private final TodoService serv;

    @GetMapping
    public ResponseEntity<List<TodoDTO>> getAllMembers(){
        List<TodoDTO> todoDTO = serv.getAllMembers();
        return new ResponseEntity<>(todoDTO, HttpStatus.OK);
    }

    @GetMapping("{id}")
    public ResponseEntity<TodoDTO> getMember(@PathVariable Long id){
        TodoDTO todoDTO = serv.getMember(id);
        return new ResponseEntity<>(todoDTO, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<TodoDTO> newMember(@RequestBody TodoDTO todoDTO){
        TodoDTO savedTodo = serv.newMember(todoDTO);
        return new ResponseEntity<>(savedTodo, HttpStatus.CREATED);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<TodoDTO> deleteMember(@PathVariable Long id){
        serv.deleteMember(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PutMapping("{id}")
    public ResponseEntity<TodoDTO> updateMember(@PathVariable Long id, @RequestBody TodoDTO todoDto){
        TodoDTO updatedTodo = serv.updateMember(id, todoDto);
        return new ResponseEntity<>(updatedTodo, HttpStatus.OK);
    }
}
